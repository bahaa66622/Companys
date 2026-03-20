import { Role } from "@prisma/client";
import { CounterCard } from "@/components/dashboard/CounterCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { AdminCompanyManager } from "@/components/features/AdminCompanyManager";
import { DemoSeederPanel } from "@/components/features/DemoSeederPanel";
import { DashboardShell } from "@/components/dashboard-shell/DashboardShell";
import { SectionCard } from "@/components/dashboard-shell/SectionCard";
import { prisma } from "@/lib/prisma";
import { requireRoles } from "@/lib/auth/guards";

export default async function AdminDashboardPage() {
  await requireRoles([Role.SUPER_ADMIN]);

  const [companies, managers, users, departments, tasks] = await Promise.all([
    prisma.company.findMany({ include: { manager: true, departments: true } }),
    prisma.user.findMany({ where: { role: Role.COMPANY_MANAGER }, select: { id: true, name: true, email: true } }),
    prisma.user.count(),
    prisma.department.count(),
    prisma.task.count()
  ]);

  return (
    <DashboardShell
      title="لوحة Super Admin"
      subtitle="إدارة الشركات والمدراء والمنصة بشكل شامل"
      links={[{ href: "/dashboard/admin", label: "الرئيسية" }, { href: "/auth/register", label: "إضافة مستخدم" }]}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <CounterCard label="الشركات" value={companies.length} />
        <CounterCard label="المستخدمين" value={users} />
        <CounterCard label="الأقسام" value={departments} />
        <CounterCard label="المهام" value={tasks} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <AdminCompanyManager managers={managers} />
        <DemoSeederPanel />
      </div>

      <SectionCard title="سجل الشركات">
        <div className="space-y-3">
          {companies.map((company) => (
            <AnimatedCard key={company.id}>
              <p className="font-semibold">{company.name}</p>
              <p className="text-sm text-slate-600">المدير: {company.manager?.name ?? "غير معين"}</p>
              <p className="text-xs text-slate-500">عدد الأقسام: {company.departments.length}</p>
            </AnimatedCard>
          ))}
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
