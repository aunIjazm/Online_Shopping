-- CreateTable
CREATE TABLE "Product" (
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "subLine" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "oldPrice" TEXT NOT NULL,
    "currentPrice" TEXT NOT NULL,
    "estimatedDeliveryTime" TEXT NOT NULL,
    "features" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);
