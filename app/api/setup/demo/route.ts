import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { hashPassword } from "@/lib/utils/hash";
import { jsonError } from "@/lib/utils/response";

const demoUsers = [
  { name: "System Admin", email: "admin@company.local", password: "Admin@12345", role: Role.SUPER_ADMIN },
  { name: "Company Manager", email: "manager@company.local", password: "Manager@12345", role: Role.COMPANY_MANAGER },
  { name: "Department Head", email: "head@company.local", password: "Head@12345", role: Role.DEPARTMENT_HEAD },
  { name: "Employee One", email: "employee1@company.local", password: "Employee@12345", role: Role.EMPLOYEE },
  { name: "Employee Two", email: "employee2@company.local", password: "Employee2@12345", role: Role.EMPLOYEE }
];

export async function POST() {
  const session = await getAuthSession();
  if (!session?.user || session.user.role !== Role.SUPER_ADMIN) return jsonError("Forbidden", 403);

  const company =
    (await prisma.company.findFirst({ where: { name: "Acme Internal" } })) ||
    (await prisma.company.create({ data: { name: "Acme Internal" } }));

  const department =
    (await prisma.department.findFirst({ where: { name: "Technology", companyId: company.id } })) ||
    (await prisma.department.create({ data: { name: "Technology", companyId: company.id } }));

  for (const user of demoUsers) {
    const exists = await prisma.user.findUnique({ where: { email: user.email } });
    if (exists) continue;

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: await hashPassword(user.password),
        role: user.role,
        companyId: user.role === Role.SUPER_ADMIN ? null : company.id,
        departmentId: [Role.DEPARTMENT_HEAD, Role.EMPLOYEE].includes(user.role) ? department.id : null
      }
    });
  }

  const manager = await prisma.user.findUnique({ where: { email: "manager@company.local" } });
  const head = await prisma.user.findUnique({ where: { email: "head@company.local" } });

  await prisma.company.update({ where: { id: company.id }, data: { managerId: manager?.id ?? null } });
  await prisma.department.update({ where: { id: department.id }, data: { headId: head?.id ?? null } });

  return NextResponse.json({
    company: company.name,
    department: department.name,
    credentials: demoUsers.map((user) => ({ email: user.email, password: user.password, role: user.role }))
  });
}
