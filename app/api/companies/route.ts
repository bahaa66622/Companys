import { NextRequest, NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { jsonError } from "@/lib/utils/response";

const createSchema = z.object({
  name: z.string().min(2),
  managerId: z.string().cuid().optional()
});

const updateSchema = z.object({
  companyId: z.string().cuid(),
  managerId: z.string().cuid().nullable()
});

export async function GET() {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);

  if (session.user.role === Role.SUPER_ADMIN) {
    const companies = await prisma.company.findMany({ include: { manager: true, departments: true } });
    return NextResponse.json(companies);
  }

  if (session.user.role === Role.COMPANY_MANAGER && session.user.companyId) {
    const company = await prisma.company.findUnique({
      where: { id: session.user.companyId },
      include: { manager: true, departments: true }
    });
    return NextResponse.json(company ? [company] : []);
  }

  return jsonError("Forbidden", 403);
}

export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (session.user.role !== Role.SUPER_ADMIN) return jsonError("Forbidden", 403);

  const parsed = createSchema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  const company = await prisma.company.create({ data: parsed.data });
  if (parsed.data.managerId) {
    await prisma.user.update({
      where: { id: parsed.data.managerId },
      data: { companyId: company.id, role: Role.COMPANY_MANAGER }
    });
  }

  return NextResponse.json(company, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (session.user.role !== Role.SUPER_ADMIN) return jsonError("Forbidden", 403);

  const parsed = updateSchema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  const company = await prisma.company.update({
    where: { id: parsed.data.companyId },
    data: { managerId: parsed.data.managerId ?? null }
  });

  if (parsed.data.managerId) {
    await prisma.user.update({ where: { id: parsed.data.managerId }, data: { companyId: company.id, role: Role.COMPANY_MANAGER } });
  }

  return NextResponse.json(company);
}
