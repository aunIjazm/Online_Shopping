import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ===========================================================================

// Get Api
export async function GET() {
    try {
        const data = await prisma.product.findMany()
        return NextResponse.json(data)
    } catch (error) {
        // -------------------------------------------------
        return NextResponse.json(
            { error: 'Failed to fetch users', details: error.message },
            { status: 500 }
        )
    }
}

// ======================= ADD PRODUCT =======================
export async function POST(req) {
    try {
        const {
            productName,
            subLine,
            description,
            oldPrice,
            currentPrice,
            estimatedDeliveryTime,
            features
        } = await req.json();

        const product = await prisma.product.create({
            data: {
                productName,
                subLine,
                description,
                oldPrice,
                currentPrice,
                estimatedDeliveryTime,
                features
            },
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        // Log error internally for server-side tracking, without exposing details
        console.error("Error adding product:", error);

        return NextResponse.json(
            { error: "Failed to add product. Please try again later." },
            { status: 500 }
        );
    }
}


// ======================= DELETE  =======================
export async function DELETE(request) {
    try {

        const { productId } = await request.json();

        await prisma.product.delete({
            where: { productId },
        });

        return NextResponse.json(
            { message: "User deleted successfully" },
            { status: 200 }
        );

    }
    catch (error) {
        return NextResponse.json(
            { error: "Failed to delete user", details: error.message },
            { status: 500 }
        );
    }
}

// ======================= UPDATE  =======================
export async function PATCH(request) {
    try {
        const {
            productId,
            productName,
            subLine,
            description,
            oldPrice,
            currentPrice,
            estimatedDeliveryTime,
            features
        } =
            await request.json();


        const updatedUser = await prisma.product.update({
            where: { productId },
            data: {
                productName,
                subLine,
                description,
                oldPrice,
                currentPrice,
                estimatedDeliveryTime,
                features
            },
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update user", details: error.message },
            { status: 500 }
        );
    }
}
