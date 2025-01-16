"use client";

import product from "@/app/product/page";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";


import prod1 from "../../../../public/images/products/prod1.png"
import prod2 from "../../../../public/images/products/prod2.png"
import prod3 from "../../../../public/images/products/prod3.png"
import prod4 from "../../../../public/images/products/prod4.png"
import prod5 from "../../../../public/images/products/prod5.png"
import prod6 from "../../../../public/images/products/prod6.png"


const ProductSection = () => {

    const pics = [prod1, prod2, prod3, prod4, prod5, prod6]

    let [dbItems, setdbItems] = useState([])

    // ========================================================================
    useEffect(() => {
        LoadingItems()
    }, [dbItems])
    // ========================================================================

    const LoadingItems = async () => {
        const response = await axios.get('/api/product')

        if (response.status === 200) {
            setdbItems(response.data)
        } else {
            alert('Failed to load items')
        }
    }

    // ========================================================================

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Featured Products
            </h2>


            {/* ==================================================================================== */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {

                    // Render each product
                    dbItems.map((v, i) => {
                        return (
                            // ======================================================
                            <div
                                key={i}
                                className="flex flex-col lg:flex-row items-start bg-teal-50 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex flex-col justify-between w-full">
                                    <h3 className="text-lg font-semibold text-gray-800">{v.productName}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{v.features}</p>
                                    <div className="items-center space-x-2">
                                        <div className="text-sm text-red-500 line-through">{v.oldPrice}</div>
                                        <div className="text-lg font-bold text-blue-600">{v.currentPrice}</div>
                                    </div>
                                    <Link
                                        href={`/product/${v.productId}`}
                                        className="mt-4 bg-teal-600 text-white text-center px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300"
                                    >
                                        Product Details
                                    </Link>
                                </div>

                                <div className="mt-4 b-2 border-black lg:mt-0 lg:ml-4 w-full lg:w-1/4 text-sm text-gray-600">
                                    <p>
                                        <Image src={pics[i]} alt="" />
                                    </p>
                                </div>
                            </div>
                            // ======================================================
                        )
                    })
                }

                {/* ==================================================================================== */}



            </div>
        </div>
    );
};

export default ProductSection;
