"use client";
import Link from "next/link";
import { useState } from "react";


const Navbar = (props) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <div>
            <nav className="bg-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Title */}
                        <div className="text-xl font-bold">{props.title}</div>

                        {/* Navigation Links (Desktop) */}
                        <div className="hidden md:flex space-x-4">

                            <Link href="/" className="hover:bg-teal-700 px-3 py-2 rounded-md">Home</Link>
                            <Link href="/about" className="hover:bg-teal-700 px-3 py-2 rounded-md">About</Link>
                            <Link href="/product" className="hover:bg-teal-700 px-3 py-2 rounded-md">Products</Link>
                            <Link href="/cart" className="hover:bg-teal-700 px-3 py-2 rounded-md"><i class="fa-solid fa-cart-shopping"></i> Cart</Link>
                            <Link href="/profile" className="hover:bg-teal-700 px-3 py-2 rounded-md"><i class="fa-solid fa-address-card"></i> Admin</Link>
                            <Link href="/login" className="hover:bg-teal-700 px-3 py-2 rounded-md"><i class="fa-solid fa-right-to-bracket"></i> Login</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                id="menu-btn"
                                className="focus:outline-none"
                                onClick={toggleMobileMenu}
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
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
                    </div>

                    {/* Mobile Menu */}
                    <div
                        id="mobile-menu"
                        className={`${isMobileMenuOpen ? "block" : "hidden"
                            } md:hidden flex flex-col space-y-2 mt-2`}
                    >
                        <Link href="/" className="block hover:bg-teal-700 px-3 py-2 rounded-md">Home</Link>
                        <Link href="/about" className="block hover:bg-teal-700 px-3 py-2 rounded-md">About</Link>
                        <Link href="/product" className="block hover:bg-teal-700 px-3 py-2 rounded-md">Product</Link>
                        <Link href="/cart" className="block hover:bg-teal-700 px-3 py-2 rounded-md"><i class="fa-solid fa-cart-shopping"></i> Cart</Link>
                        <Link href="/profile" className="block hover:bg-teal-700 px-3 py-2 rounded-md"><i class="fa-solid fa-address-card"></i> Profile</Link>
                        <Link href="/login" className="block hover:bg-teal-700 px-3 py-2 rounded-md"><i class="fa-solid fa-right-to-bracket"></i> Login</Link>
                    </div>
                </div>
            </nav>

        </div>

    )
}
export default Navbar;