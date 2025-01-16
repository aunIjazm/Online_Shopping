import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ======================= ADD STUDENT =======================
export async function POST(req) {
  try {

    const { name, email, password } = await req.json();

    const student = await prisma.user.create({
      data: { name, email, password },
    });

    return NextResponse.json(student, { status: 201 });
  }
  catch (error) {
    return NextResponse.json(
      { error: "Failed to add student", details: error.message },
      { status: 500 }
    );
  }
}
