"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import item1 from "@/app/assests/images/products/prod1.png"
import Image from "next/image";

const CartPage = () => {

    // ========================================================================

    let [dborders, setdborders] = useState({})
    let [id, setId] = useState('')

    // ========================================================================

    useEffect(() => {
        Loadorders()
    }, [])

    // ========================================================================

    const Loadorders = async () => {
        const response = await axios.get('/api/orders')

        const responsee = await axios.get('/api/product')


        const order = responsee.data.find(
            item => item.productId === response.data[0].proId
        )

        setdborders(order)
    }

    // ========================================================================




    return (
        <section className="bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-4 md:space-y-0">

                    {/* ============================================== */}
                    <div
                        key={dborders.productId}
                        className="bg-white border border-gray-200 shadow-md rounded-md p-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <div className="flex items-center space-x-4 w-full sm:w-auto">
                            <Image
                                src={item1}
                                alt={dborders.productId}
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{dborders.productId}</h3>
                                <p className="text-sm text-gray-500">Price: {dborders.currentPrice}</p>
                            </div>
                        </div>
                        {/* <div className="flex items-center space-x-4">
                            <button
                                onClick={() => handleDecrement(item.id)}
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
                            >
                                -
                            </button>
                            <span className="text-gray-800 font-semibold">{item.quantity}</span>
                            <button
                                onClick={() => handleIncrement(item.id)}
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
                            >
                                +
                            </button>
                        </div> */}
                        <div>
                            <p className="text-gray-800 font-semibold">
                                Total: {dborders.currentPrice}
                            </p>
                        </div>
                    </div>
                    {/* ============================================== */}


                </div>
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <span className="text-lg font-semibold text-gray-800">
                        Total Price:
                    </span>
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300">
                        Place Order
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CartPage;
