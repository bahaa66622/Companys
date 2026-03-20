import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { Role } from "@prisma/client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { CounterCard } from "@/components/dashboard/CounterCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export default async function ManagerDashboardPage() {
  const session = await getAuthSession();
  if (!session?.user) redirect("/auth/login");
  if (![Role.SUPER_ADMIN, Role.COMPANY_MANAGER].includes(session.user.role)) redirect("/dashboard");

  const [departments, users, companies] = await Promise.all([
    prisma.department.count({ where: { companyId: session.user.companyId ?? undefined } }),
    prisma.user.count({ where: { companyId: session.user.companyId ?? undefined } }),
    prisma.company.count()
  ]);

  return (
    <main className="grid min-h-screen gap-4 p-4 md:grid-cols-[260px,1fr]">
      <Sidebar links={[{ href: "/dashboard/manager", label: "Overview" }, { href: "/auth/register", label: "Register User" }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Manager Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <CounterCard label="Companies" value={companies} />
          <CounterCard label="Departments" value={departments} />
          <CounterCard label="Users" value={users} />
        </div>
        <AnimatedCard>
          <h2 className="mb-2 text-xl font-semibold">Management Operations</h2>
          <p>Create departments, assign heads, and manage users through API endpoints.</p>
        </AnimatedCard>
      </section>
    </main>
  );
}
