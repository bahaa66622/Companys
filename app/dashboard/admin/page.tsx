import { Role } from "@prisma/client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { CounterCard } from "@/components/dashboard/CounterCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { AdminCompanyManager } from "@/components/features/AdminCompanyManager";
import { prisma } from "@/lib/prisma";
import { requireRoles } from "@/lib/auth/guards";

export default async function AdminDashboardPage() {
  await requireRoles([Role.SUPER_ADMIN]);

  const [companies, managers, users, departments, tasks] = await Promise.all([
    prisma.company.findMany({ include: { manager: true } }),
    prisma.user.findMany({ where: { role: Role.COMPANY_MANAGER }, select: { id: true, name: true, email: true } }),
    prisma.user.count(),
    prisma.department.count(),
    prisma.task.count()
  ]);

  return (
    <main className="grid min-h-screen gap-4 p-4 md:grid-cols-[260px,1fr]">
      <Sidebar links={[{ href: "/dashboard/admin", label: "لوحة الأدمن" }, { href: "/auth/register", label: "إضافة مستخدم" }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">لوحة Super Admin</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <CounterCard label="الشركات" value={companies.length} />
          <CounterCard label="المستخدمين" value={users} />
          <CounterCard label="الأقسام" value={departments + tasks} />
        </div>

        <AdminCompanyManager managers={managers} />

        <AnimatedCard>
          <h2 className="mb-2 text-lg font-semibold">كل الشركات</h2>
          <ul className="space-y-2">
            {companies.map((company) => (
              <li key={company.id} className="rounded-lg border p-2 text-sm">
                {company.name} — المدير: {company.manager?.name ?? "غير معين"}
              </li>
            ))}
          </ul>
        </AnimatedCard>
      </section>
    </main>
  );
}
