import { NextRequest, NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { jsonError } from "@/lib/utils/response";

const schema = z.object({
  name: z.string().min(2),
  managerId: z.string().cuid().optional()
});

export async function GET() {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (session.user.role !== Role.SUPER_ADMIN) return jsonError("Forbidden", 403);

  const companies = await prisma.company.findMany({ include: { manager: true, departments: true } });
  return NextResponse.json(companies);
}

export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (session.user.role !== Role.SUPER_ADMIN) return jsonError("Forbidden", 403);

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  const company = await prisma.company.create({ data: parsed.data });
  return NextResponse.json(company, { status: 201 });
}
