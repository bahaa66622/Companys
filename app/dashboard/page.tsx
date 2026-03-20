import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import { Role } from "@prisma/client";

export default async function DashboardIndexPage() {
  const session = await getAuthSession();
  if (!session?.user) redirect("/auth/login");

  switch (session.user.role) {
    case Role.SUPER_ADMIN:
      redirect("/dashboard/admin");
    case Role.COMPANY_MANAGER:
      redirect("/dashboard/manager");
    case Role.DEPARTMENT_HEAD:
      redirect("/dashboard/head");
    default:
      redirect("/dashboard/employee");
  }
}
