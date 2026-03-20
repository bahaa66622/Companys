import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export async function requireRoles(roles: Role[]) {
  const session = await getAuthSession();
  if (!session?.user) redirect("/auth/login");
  if (!roles.includes(session.user.role)) redirect("/dashboard");
  return session.user;
}
