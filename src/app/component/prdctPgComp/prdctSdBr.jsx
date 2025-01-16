"use client";
import { useState } from "react";

const PrdctSdBr = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Sidebar Toggler Button */}
            <div className="md:hidden flex justify-between items-center">
                <h2 className="text-xl font-semibold">Category</h2>
                <button
                    onClick={toggleSidebar}
                    className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Left Sidebar */}
            <aside
                className={`bg-white p-4 shadow-md rounded-lg md:col-span-1 md:block ${isSidebarOpen ? "block" : "hidden"
                    }`}
            >
                <h2 className="text-xl font-semibold mb-4">Category</h2>
                <ul className="space-y-3">
                    <li>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-blue-600 hover:underline"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-blue-600 hover:underline"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-blue-600 hover:underline"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-blue-600 hover:underline"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-blue-600 hover:underline"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
export default PrdctSdBr;