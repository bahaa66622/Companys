import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth/session";
import { hashPassword } from "@/lib/utils/hash";
import { jsonError } from "@/lib/utils/response";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.nativeEnum(Role)
});

export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  if (session?.user.role !== Role.SUPER_ADMIN) return jsonError("Forbidden", 403);

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return jsonError("Invalid payload", 422);

  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (exists) return jsonError("Email already exists", 409);

  const user = await prisma.user.create({
    data: {
      ...parsed.data,
      password: await hashPassword(parsed.data.password)
    },
    select: { id: true, email: true }
  });

  return NextResponse.json(user, { status: 201 });
}
