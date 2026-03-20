import { NextRequest, NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { jsonError } from "@/lib/utils/response";

const createSchema = z.object({
  name: z.string().min(2),
  companyId: z.string().cuid(),
  headId: z.string().cuid().optional()
});

export async function GET() {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);

  const where =
    session.user.role === Role.SUPER_ADMIN
      ? {}
      : session.user.role === Role.DEPARTMENT_HEAD
        ? { id: session.user.departmentId ?? undefined }
        : { companyId: session.user.companyId ?? undefined };

  const departments = await prisma.department.findMany({ where, include: { head: true, members: true } });
  return NextResponse.json(departments);
}

export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (![Role.SUPER_ADMIN, Role.COMPANY_MANAGER].includes(session.user.role)) return jsonError("Forbidden", 403);

  const parsed = createSchema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  if (session.user.role === Role.COMPANY_MANAGER && session.user.companyId !== parsed.data.companyId) {
    return jsonError("Forbidden for this company", 403);
  }

  const department = await prisma.department.create({ data: parsed.data });

  if (parsed.data.headId) {
    await prisma.user.update({
      where: { id: parsed.data.headId },
      data: { companyId: parsed.data.companyId, departmentId: department.id, role: Role.DEPARTMENT_HEAD }
    });
  }

  return NextResponse.json(department, { status: 201 });
}
