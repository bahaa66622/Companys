import { NextRequest, NextResponse } from "next/server";
import { Role, TaskStatus } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { jsonError } from "@/lib/utils/response";

const createSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  assignedToId: z.string().cuid(),
  departmentId: z.string().cuid()
});

const updateSchema = z.object({
  taskId: z.string().cuid(),
  status: z.nativeEnum(TaskStatus)
});

export async function GET() {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);

  const where =
    session.user.role === Role.DEPARTMENT_HEAD
      ? { departmentId: session.user.departmentId ?? undefined }
      : session.user.role === Role.EMPLOYEE
        ? { assignedToId: session.user.id }
        : { department: { companyId: session.user.companyId ?? undefined } };

  const tasks = await prisma.task.findMany({ where, include: { assignedTo: true, reports: true } });
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);
  if (session.user.role !== Role.DEPARTMENT_HEAD) return jsonError("Forbidden", 403);

  const parsed = createSchema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  const task = await prisma.task.create({ data: parsed.data });
  return NextResponse.json(task, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) return jsonError("Unauthorized", 401);

  const parsed = updateSchema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  const task = await prisma.task.findUnique({ where: { id: parsed.data.taskId } });
  if (!task) return jsonError("Task not found", 404);

  if (session.user.role === Role.EMPLOYEE && task.assignedToId !== session.user.id) return jsonError("Forbidden", 403);

  const updated = await prisma.task.update({
    where: { id: parsed.data.taskId },
    data: { status: parsed.data.status }
  });

  return NextResponse.json(updated);
}
