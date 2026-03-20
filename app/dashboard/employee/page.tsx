import { Role } from "@prisma/client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { EmployeeTaskActions } from "@/components/features/EmployeeTaskActions";
import { prisma } from "@/lib/prisma";
import { requireRoles } from "@/lib/auth/guards";

export default async function EmployeeDashboardPage() {
  const user = await requireRoles([Role.EMPLOYEE]);

  const tasks = await prisma.task.findMany({
    where: { assignedToId: user.id },
    include: { reports: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="grid min-h-screen gap-4 p-4 md:grid-cols-[260px,1fr]">
      <Sidebar links={[{ href: "/dashboard/employee", label: "مهامي" }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">لوحة الموظف</h1>
        {tasks.map((task) => (
          <AnimatedCard key={task.id}>
            <h2 className="font-semibold">{task.title}</h2>
            <p className="text-sm text-slate-600">الحالة: {task.status}</p>
            <p className="text-sm">عدد التقارير: {task.reports.length}</p>
            <EmployeeTaskActions taskId={task.id} />
          </AnimatedCard>
        ))}
      </section>
    </main>
  );
}
