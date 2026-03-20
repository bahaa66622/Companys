import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { Role } from "@prisma/client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export default async function EmployeeDashboardPage() {
  const session = await getAuthSession();
  if (!session?.user) redirect("/auth/login");
  if (session.user.role !== Role.EMPLOYEE) redirect("/dashboard");

  const tasks = await prisma.task.findMany({
    where: { assignedToId: session.user.id },
    include: { reports: true }
  });

  return (
    <main className="grid min-h-screen gap-4 p-4 md:grid-cols-[260px,1fr]">
      <Sidebar links={[{ href: "/dashboard/employee", label: "My Tasks" }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        {tasks.map((task) => (
          <AnimatedCard key={task.id}>
            <h2 className="font-semibold">{task.title}</h2>
            <p className="text-sm text-slate-600">Status: {task.status}</p>
            <p className="text-sm">Reports submitted: {task.reports.length}</p>
          </AnimatedCard>
        ))}
      </section>
    </main>
  );
}
