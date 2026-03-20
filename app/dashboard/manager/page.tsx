import { Role } from "@prisma/client";
import { CounterCard } from "@/components/dashboard/CounterCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ManagerOperations } from "@/components/features/ManagerOperations";
import { DashboardShell } from "@/components/dashboard-shell/DashboardShell";
import { SectionCard } from "@/components/dashboard-shell/SectionCard";
import { prisma } from "@/lib/prisma";
import { requireRoles } from "@/lib/auth/guards";

export default async function ManagerDashboardPage() {
  const user = await requireRoles([Role.COMPANY_MANAGER]);
  if (!user.companyId) {
    return <main className="p-6">لا يوجد شركة مربوطة بهذا المدير بعد.</main>;
  }

  const [departments, users, tasks, reports] = await Promise.all([
    prisma.department.findMany({ where: { companyId: user.companyId }, include: { members: true } }),
    prisma.user.findMany({ where: { companyId: user.companyId }, select: { id: true, name: true, role: true, email: true } }),
    prisma.task.count({ where: { department: { companyId: user.companyId } } }),
    prisma.report.count({ where: { user: { companyId: user.companyId } } })
  ]);

  return (
    <DashboardShell
      title="لوحة مدير الشركة"
      subtitle="إدارة الأقسام والموظفين ومتابعة الأداء داخل الشركة"
      links={[{ href: "/dashboard/manager", label: "الرئيسية" }]}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <CounterCard label="الأقسام" value={departments.length} />
        <CounterCard label="المستخدمين" value={users.length} />
        <CounterCard label="المهام" value={tasks} />
        <CounterCard label="التقارير" value={reports} />
      </div>

      <ManagerOperations
        companyId={user.companyId}
        users={users.map((u) => ({ id: u.id, name: u.name, role: u.role }))}
        departments={departments.map((d) => ({ id: d.id, name: d.name }))}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="الأقسام الحالية">
          <div className="space-y-2 text-sm">
            {departments.map((department) => (
              <AnimatedCard key={department.id}>
                <p className="font-semibold">{department.name}</p>
                <p className="text-slate-600">عدد الأعضاء: {department.members.length}</p>
              </AnimatedCard>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="المستخدمون بالشركة">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead>
                <tr className="text-slate-500">
                  <th className="p-2">الاسم</th>
                  <th className="p-2">البريد</th>
                  <th className="p-2">الدور</th>
                </tr>
              </thead>
              <tbody>
                {users.map((member) => (
                  <tr key={member.id} className="border-t">
                    <td className="p-2">{member.name}</td>
                    <td className="p-2">{member.email}</td>
                    <td className="p-2">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
