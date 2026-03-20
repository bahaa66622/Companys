import { NextRequest, NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { jsonError } from "@/lib/utils/response";

const assignSchema = z.object({
  userId: z.string().cuid(),
  departmentId: z.string().cuid().nullable(),
  companyId: z.string().cuid().nullable()
});

export async function GET() {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);

  const users = await prisma.user.findMany({
    where:
      session.user.role === Role.SUPER_ADMIN
        ? {}
        : session.user.role === Role.DEPARTMENT_HEAD
          ? { departmentId: session.user.departmentId ?? undefined }
          : { companyId: session.user.companyId ?? undefined },
    select: { id: true, name: true, email: true, role: true, companyId: true, departmentId: true }
  });

  return NextResponse.json(users);
}

export async function PATCH(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (![Role.SUPER_ADMIN, Role.COMPANY_MANAGER].includes(session.user.role)) return jsonError("Forbidden", 403);

  const parsed = assignSchema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  if (session.user.role === Role.COMPANY_MANAGER && parsed.data.companyId !== session.user.companyId) {
    return jsonError("Forbidden for this company", 403);
  }

  const department = parsed.data.departmentId
    ? await prisma.department.findUnique({ where: { id: parsed.data.departmentId } })
    : null;

  const role = department ? Role.EMPLOYEE : undefined;

  const user = await prisma.user.update({
    where: { id: parsed.data.userId },
    data: {
      companyId: parsed.data.companyId,
      departmentId: parsed.data.departmentId,
      ...(role ? { role } : {})
    },
    select: { id: true, companyId: true, departmentId: true, role: true }
  });

  return NextResponse.json(user);
}
