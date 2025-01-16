"use client";

import { useState, useCallback } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AdminPanel() {
    // State Management for Product Attributes
    const [productName, setProductName] = useState("");
    const [subLine, setSubLine] = useState("");
    const [description, setDescription] = useState("");
    const [oldPrice, setOldPrice] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");
    const [estimatedDeliveryTime, setEstimatedDeliveryTime] = useState("");
    const [features, setFeatures] = useState("");
    const [productId, setProductId] = useState("");


    const reset = () => {
        setProductName("");
        setSubLine("");
        setDescription("");
        setOldPrice("");
        setCurrentPrice("");
        setEstimatedDeliveryTime("");
        setFeatures("");
    }

    // Add Product Handler
    // ============================================================================

    const handleAddProduct = async (event) => {
        event.preventDefault();

        try {
            const data = {
                productName,
                subLine,
                description,
                oldPrice,
                currentPrice,
                estimatedDeliveryTime,
                features
            };

            const response = await axios.post("/api/product", data);

            reset();

            // Alert user on success
            alert("Product added successfully!");

        } catch (error) {
            // Handle error gracefully without showing in the console
            alert("There was an issue adding the product. Please try again.");
        }
    };
    // ========================================================================================

    const handeldelete = async (e) => {

        e.preventDefault();
        await axios.delete('/api/product', { data: { productId: productId } });
        Swal.fire('Success', 'User deleted successfully!', 'success');
        reset();

    };

    // ================================================================================================

    const handleEdit = async (e) => {
        e.preventDefault();
        await axios.patch('/api/product', {
            productId,
            productName,
            subLine,
            description,
            oldPrice,
            currentPrice,
            estimatedDeliveryTime,
            features
        });
        Swal.fire('Success', 'User updated successfully!', 'success');
        reset();

    };

    // ================================================================================================


    return (
        <div className="min-h-screen bg-teal-50 p-8">
            <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Admin Panel</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Add Product Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-teal-700 mb-4">Add Product</h2>
                    <form onSubmit={handleAddProduct}>
                        <label className="block mb-2">
                            Product Name:
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Sub Line:
                            <input
                                type="text"
                                value={subLine}
                                onChange={(e) => setSubLine(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Description:
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Old Price:
                            <input
                                type="text"
                                value={oldPrice}
                                onChange={(e) => setOldPrice(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Current Price:
                            <input
                                type="text"
                                value={currentPrice}
                                onChange={(e) => setCurrentPrice(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Estimated Delivery Time:
                            <input
                                type="text"
                                value={estimatedDeliveryTime}
                                onChange={(e) => setEstimatedDeliveryTime(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            Features:
                            <textarea
                                value={features}
                                onChange={(e) => setFeatures(e.target.value)}
                                className="w-full p-2 border rounded"
                            ></textarea>
                        </label>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white py-2 px-4 rounded mt-4 hover:bg-teal-600"
                        >
                            Add Product
                        </button>
                    </form>
                </div>

                {/* Delete Product Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-teal-700 mb-4">Delete Product</h2>
                    <label className="block mb-2">
                        Product ID:
                        <input
                            type="text"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <button
                        onClick={handeldelete}
                        className="w-full bg-teal-500 text-white py-2 px-4 rounded mt-4 hover:bg-teal-600"
                    >
                        Delete Product
                    </button>
                </div>

                {/* Update Product Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-teal-700 mb-4">Update Product</h2>
                    <label className="block mb-2">
                        Product ID:
                        <input
                            type="text"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Product Name:
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Sub Line:
                        <input
                            type="text"
                            value={subLine}
                            onChange={(e) => setSubLine(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Old Price:
                        <input
                            type="text"
                            value={oldPrice}
                            onChange={(e) => setOldPrice(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Current Price:
                        <input
                            type="text"
                            value={currentPrice}
                            onChange={(e) => setCurrentPrice(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Estimated Delivery Time:
                        <input
                            type="text"
                            value={estimatedDeliveryTime}
                            onChange={(e) => setEstimatedDeliveryTime(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Features:
                        <textarea
                            value={features}
                            onChange={(e) => setFeatures(e.target.value)}
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </label>
                    <button
                        onClick={handleEdit}
                        className="w-full bg-teal-500 text-white py-2 px-4 rounded mt-4 hover:bg-teal-600"
                    >
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
}
