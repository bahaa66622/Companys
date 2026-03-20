import { Role, TaskStatus } from "@prisma/client";
import { CounterCard } from "@/components/dashboard/CounterCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { HeadTaskManager } from "@/components/features/HeadTaskManager";
import { DashboardShell } from "@/components/dashboard-shell/DashboardShell";
import { SectionCard } from "@/components/dashboard-shell/SectionCard";
import { prisma } from "@/lib/prisma";
import { requireRoles } from "@/lib/auth/guards";

const columns: TaskStatus[] = [TaskStatus.TODO, TaskStatus.IN_PROGRESS, TaskStatus.DONE];

export default async function HeadDashboardPage() {
  const user = await requireRoles([Role.DEPARTMENT_HEAD]);
  if (!user.departmentId) return <main className="p-6">لم يتم ربطك بقسم بعد.</main>;

  const [tasks, employees, reports] = await Promise.all([
    prisma.task.findMany({
      where: { departmentId: user.departmentId },
      include: { assignedTo: true, reports: true },
      orderBy: { createdAt: "desc" }
    }),
    prisma.user.findMany({ where: { departmentId: user.departmentId, role: Role.EMPLOYEE }, select: { id: true, name: true, email: true } }),
    prisma.report.findMany({ where: { task: { departmentId: user.departmentId } }, include: { user: true, task: true }, orderBy: { createdAt: "desc" } })
  ]);

  return (
    <DashboardShell
      title="لوحة رئيس القسم"
      subtitle="إدارة مهام فريق القسم ومراجعة التقارير اليومية"
      links={[{ href: "/dashboard/head", label: "الرئيسية" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <CounterCard label="عدد الموظفين" value={employees.length} />
        <CounterCard label="عدد المهام" value={tasks.length} />
        <CounterCard label="عدد التقارير" value={reports.length} />
      </div>

      <HeadTaskManager employees={employees.map((e) => ({ id: e.id, name: e.name }))} departmentId={user.departmentId} />

      <SectionCard title="Kanban المهام">
        <div className="grid gap-4 md:grid-cols-3">
          {columns.map((status) => (
            <div key={status} className="rounded-2xl bg-slate-100 p-4">
              <h2 className="mb-3 font-semibold">{status}</h2>
              <div className="space-y-3">
                {tasks.filter((task) => task.status === status).map((task) => (
                  <AnimatedCard key={task.id}>
                    <h3 className="font-semibold">{task.title}</h3>
                    <p className="text-sm text-slate-600">الموظف: {task.assignedTo.name}</p>
                    <p className="text-xs text-slate-500">التقارير: {task.reports.length}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="تقارير القسم الأخيرة">
        <ul className="space-y-2 text-sm">
          {reports.slice(0, 10).map((report) => (
            <li key={report.id} className="rounded border p-2">
              <span className="font-semibold">{report.user.name}</span> — {report.content}
            </li>
          ))}
        </ul>
      </SectionCard>
    </DashboardShell>
  );
}
