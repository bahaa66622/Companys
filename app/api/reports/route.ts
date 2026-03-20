import { NextRequest, NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { jsonError } from "@/lib/utils/response";

const createSchema = z.object({
  content: z.string().min(5),
  taskId: z.string().cuid()
});

export async function GET() {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);

  const where =
    session.user.role === Role.DEPARTMENT_HEAD
      ? { task: { departmentId: session.user.departmentId ?? undefined } }
      : session.user.role === Role.EMPLOYEE
        ? { userId: session.user.id }
        : { user: { companyId: session.user.companyId ?? undefined } };

  const reports = await prisma.report.findMany({ where, include: { user: true, task: true }, orderBy: { createdAt: "desc" } });
  return NextResponse.json(reports);
}

export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (session.user.role !== Role.EMPLOYEE) return jsonError("Forbidden", 403);

  const parsed = createSchema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  const task = await prisma.task.findUnique({ where: { id: parsed.data.taskId } });
  if (!task || task.assignedToId !== session.user.id) return jsonError("Task not assigned to you", 403);

  const report = await prisma.report.create({
    data: {
      content: parsed.data.content,
      taskId: parsed.data.taskId,
      userId: session.user.id
    }
  });

  return NextResponse.json(report, { status: 201 });
}
