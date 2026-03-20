import { Role } from "@prisma/client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { CounterCard } from "@/components/dashboard/CounterCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ManagerOperations } from "@/components/features/ManagerOperations";
import { prisma } from "@/lib/prisma";
import { requireRoles } from "@/lib/auth/guards";

export default async function ManagerDashboardPage() {
  const user = await requireRoles([Role.COMPANY_MANAGER]);
  if (!user.companyId) {
    return <main className="p-6">لا يوجد شركة مربوطة بهذا المدير بعد.</main>;
  }

  const [departments, users, tasks] = await Promise.all([
    prisma.department.findMany({ where: { companyId: user.companyId } }),
    prisma.user.findMany({ where: { companyId: user.companyId }, select: { id: true, name: true, role: true } }),
    prisma.task.count({ where: { department: { companyId: user.companyId } } })
  ]);

  return (
    <main className="grid min-h-screen gap-4 p-4 md:grid-cols-[260px,1fr]">
      <Sidebar links={[{ href: "/dashboard/manager", label: "لوحة المدير" }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">لوحة مدير الشركة</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <CounterCard label="الأقسام" value={departments.length} />
          <CounterCard label="المستخدمين" value={users.length} />
          <CounterCard label="المهام" value={tasks} />
        </div>

        <ManagerOperations
          companyId={user.companyId}
          users={users.map((u) => ({ id: u.id, name: u.name, role: u.role }))}
          departments={departments.map((d) => ({ id: d.id, name: d.name }))}
        />

        <AnimatedCard>
          <h2 className="mb-2 font-semibold">الأقسام الحالية</h2>
          <ul className="space-y-2 text-sm">
            {departments.map((department) => (
              <li key={department.id} className="rounded border p-2">{department.name}</li>
            ))}
          </ul>
        </AnimatedCard>
      </section>
    </main>
  );
}
