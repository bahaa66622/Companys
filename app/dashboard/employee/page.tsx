import { Role } from "@prisma/client";
import { CounterCard } from "@/components/dashboard/CounterCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { EmployeeTaskActions } from "@/components/features/EmployeeTaskActions";
import { DashboardShell } from "@/components/dashboard-shell/DashboardShell";
import { SectionCard } from "@/components/dashboard-shell/SectionCard";
import { prisma } from "@/lib/prisma";
import { requireRoles } from "@/lib/auth/guards";

export default async function EmployeeDashboardPage() {
  const user = await requireRoles([Role.EMPLOYEE]);

  const [tasks, reportsCount] = await Promise.all([
    prisma.task.findMany({
      where: { assignedToId: user.id },
      include: { reports: true },
      orderBy: { createdAt: "desc" }
    }),
    prisma.report.count({ where: { userId: user.id } })
  ]);

  return (
    <DashboardShell
      title="لوحة الموظف"
      subtitle="إدارة المهام اليومية، تحديث الحالة، وإرسال التقارير"
      links={[{ href: "/dashboard/employee", label: "مهامي" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <CounterCard label="إجمالي المهام" value={tasks.length} />
        <CounterCard label="مهام مكتملة" value={tasks.filter((task) => task.status === "DONE").length} />
        <CounterCard label="تقاريري" value={reportsCount} />
      </div>

      <SectionCard title="قائمة المهام">
        <div className="space-y-3">
          {tasks.map((task) => (
            <AnimatedCard key={task.id}>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-slate-600">الحالة الحالية: {task.status}</p>
              <p className="text-xs text-slate-500">عدد التقارير: {task.reports.length}</p>
              <EmployeeTaskActions taskId={task.id} />
            </AnimatedCard>
          ))}
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
