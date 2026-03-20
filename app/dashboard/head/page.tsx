import { Role, TaskStatus } from "@prisma/client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { HeadTaskManager } from "@/components/features/HeadTaskManager";
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
    prisma.user.findMany({ where: { departmentId: user.departmentId, role: Role.EMPLOYEE }, select: { id: true, name: true } }),
    prisma.report.findMany({ where: { task: { departmentId: user.departmentId } }, include: { user: true, task: true } })
  ]);

  return (
    <main className="grid min-h-screen gap-4 p-4 md:grid-cols-[260px,1fr]">
      <Sidebar links={[{ href: "/dashboard/head", label: "لوحة رئيس القسم" }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">لوحة رئيس القسم</h1>

        <HeadTaskManager employees={employees} departmentId={user.departmentId} />

        <div className="grid gap-4 md:grid-cols-3">
          {columns.map((status) => (
            <div key={status} className="rounded-2xl bg-slate-100 p-4">
              <h2 className="mb-3 font-semibold">{status}</h2>
              <div className="space-y-3">
                {tasks.filter((task) => task.status === status).map((task) => (
                  <AnimatedCard key={task.id}>
                    <h3 className="font-semibold">{task.title}</h3>
                    <p className="text-sm text-slate-600">{task.assignedTo.name}</p>
                    <p className="mt-2 text-sm">التقارير: {task.reports.length}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimatedCard>
          <h2 className="mb-2 font-semibold">آخر التقارير</h2>
          <ul className="space-y-2 text-sm">
            {reports.slice(0, 8).map((report) => (
              <li key={report.id} className="rounded border p-2">
                {report.user.name}: {report.content}
              </li>
            ))}
          </ul>
        </AnimatedCard>
      </section>
    </main>
  );
}
