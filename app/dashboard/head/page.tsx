import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { Role, TaskStatus } from "@prisma/client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const columns: TaskStatus[] = [TaskStatus.TODO, TaskStatus.IN_PROGRESS, TaskStatus.DONE];

export default async function HeadDashboardPage() {
  const session = await getAuthSession();
  if (!session?.user) redirect("/auth/login");
  if (session.user.role !== Role.DEPARTMENT_HEAD || !session.user.departmentId) redirect("/dashboard");

  const tasks = await prisma.task.findMany({
    where: { departmentId: session.user.departmentId },
    include: { assignedTo: true, reports: true },
    orderBy: { title: "asc" }
  });

  return (
    <main className="grid min-h-screen gap-4 p-4 md:grid-cols-[260px,1fr]">
      <Sidebar links={[{ href: "/dashboard/head", label: "Kanban" }]} />
      <section>
        <h1 className="mb-4 text-3xl font-bold">Department Head Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {columns.map((status) => (
            <div key={status} className="rounded-2xl bg-slate-100 p-4">
              <h2 className="mb-3 font-semibold">{status}</h2>
              <div className="space-y-3">
                {tasks.filter((task) => task.status === status).map((task) => (
                  <AnimatedCard key={task.id}>
                    <h3 className="font-semibold">{task.title}</h3>
                    <p className="text-sm text-slate-600">{task.assignedTo.name}</p>
                    <p className="mt-2 text-sm">Reports: {task.reports.length}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
