import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// ===========================================================================

// Get Api
export async function GET () {
  try {
    const data = await prisma.orders.findMany()
    return NextResponse.json(data)
  } catch (error) {
    // -------------------------------------------------
    return NextResponse.json(
      { error: 'Failed to fetch users', details: error.message },
      { status: 500 }
    )
  }
}

// ======================= ADD =======================
export async function POST (req) {
  try {
    const { proId } = await req.json()

    const newItem = await prisma.orders.create({
      data: { proId }
    })

    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add item', details: error.message },
      { status: 500 }
    )
  }
}

// ====================================================
