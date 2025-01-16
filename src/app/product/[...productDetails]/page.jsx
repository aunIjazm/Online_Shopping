"use client";

import Image from "next/image";
import ProdImg from "../../../../public/webFiles/images/logo.png";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function page() {
  const { productDetails } = useParams() || {};

  const [dbItem, setdbItem] = useState({});

  useEffect(() => {
    LoadingItems();
  }, []);

  // ============================================================================
  const LoadingItems = async () => {
    try {
      const response = await axios.get("/api/product");

      if (response.status === 200) {
        const selectedItem = response.data.find((item) => item.productId == productDetails);
        setdbItem(selectedItem || {}); // Fallback to an empty object if no item is found
      } else {
        alert("Failed to load items");
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      alert("An error occurred while loading items.");
    }
  };

  // ============================================================================
  const Update_Order = async order_id => {
    // alert(order_id)
    const proId = order_id
    const response = await axios.post('/api/orders', { proId })
    alert('order updated')
  }
  // ============================================================================

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-6">
        {/* Product Image and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <Image
              src={ProdImg} // Replace with your image path
              alt="Product Image"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {dbItem?.productName || "Loading..."}
            </h1>
            <p className="text-gray-600 mb-4">{dbItem?.subLine || "Loading..."}</p>
            <p className="text-xl font-semibold text-teal-600 mb-6">
              {dbItem?.currentPrice || "Loading..."}
            </p>

            {/* Delivery Time */}
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l-4-4m0 0l4-4m-4 4h16m-5 4h-6"
                />
              </svg>
              <p className="text-gray-600">
                Estimated Delivery:
                <span className="font-semibold text-teal-600">
                  {dbItem?.estimatedDeliveryTime || "N/A"} Business Days
                </span>
              </p>
            </div>

            {/* Features List */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {dbItem?.features || "No features available"}
              </h3>
            </div>

            {/* Buy and Add to Cart Buttons */}
            <div className="flex gap-4">
              <button onClick={() => Update_Order(dbItem.productId)} className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition">
                Buy Now
              </button>
              <button onClick={() => Update_Order(dbItem.productId)} className="px-4 py-2 bg-gray-100 text-teal-600 border border-teal-600 rounded-lg shadow-md hover:bg-gray-200 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Additional Product Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {dbItem?.description || "No description available"}
          </p>
        </div>
      </div>
    </div>
  );
}
