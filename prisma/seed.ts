import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function upsertUser(name: string, email: string, password: string, role: Role, companyId: string | null, departmentId: string | null) {
  const hash = await bcrypt.hash(password, 10);
  await prisma.user.upsert({
    where: { email },
    update: { name, password: hash, role, companyId, departmentId },
    create: { name, email, password: hash, role, companyId, departmentId }
  });
}

async function main() {
  const company = await prisma.company.upsert({
    where: { id: "cm-demo-company" },
    update: { name: "Acme Internal" },
    create: { id: "cm-demo-company", name: "Acme Internal" }
  });

  const department = await prisma.department.upsert({
    where: { id: "cm-demo-dept" },
    update: { name: "Technology", companyId: company.id },
    create: { id: "cm-demo-dept", name: "Technology", companyId: company.id }
  });

  await upsertUser("System Admin", "admin@company.local", "Admin@12345", Role.SUPER_ADMIN, null, null);
  await upsertUser("Company Manager", "manager@company.local", "Manager@12345", Role.COMPANY_MANAGER, company.id, null);
  await upsertUser("Department Head", "head@company.local", "Head@12345", Role.DEPARTMENT_HEAD, company.id, department.id);
  await upsertUser("Employee One", "employee1@company.local", "Employee@12345", Role.EMPLOYEE, company.id, department.id);
  await upsertUser("Employee Two", "employee2@company.local", "Employee2@12345", Role.EMPLOYEE, company.id, department.id);

  const manager = await prisma.user.findUnique({ where: { email: "manager@company.local" } });
  const head = await prisma.user.findUnique({ where: { email: "head@company.local" } });

  await prisma.company.update({ where: { id: company.id }, data: { managerId: manager?.id } });
  await prisma.department.update({ where: { id: department.id }, data: { headId: head?.id } });

  console.log("Demo users ready");
}

main().finally(() => prisma.$disconnect());
