"use client";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-teal-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">About Us</h2>
                        <p className="text-white">
                            We are committed to delivering the best content and services to help you succeed.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-teal-300">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-teal-300">About</a>
                            </li>
                            <li>
                                <a href="/product" className="hover:text-teal-300">Product</a>
                            </li>
                            <li>
                                <a href="/login" className="hover:text-teal-300">Login</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href=""
                                className="text-teal-400 hover:text-white"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.496V14.706h-3.18v-3.593h3.18V8.413c0-3.15 1.926-4.872 4.736-4.872 1.346 0 2.503.1 2.839.145v3.29l-1.948.001c-1.528 0-1.824.726-1.824 1.793v2.349h3.646l-.475 3.593h-3.17V24h6.216C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-teal-400 hover:text-white"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.643 4.937a9.837 9.837 0 0 1-2.828.775 4.93 4.93 0 0 0 2.163-2.724 9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482 13.946 13.946 0 0 1-10.11-5.137 4.936 4.936 0 0 0 1.523 6.574A4.905 4.905 0 0 1 .96 9.158v.062a4.916 4.916 0 0 0 3.946 4.827 4.907 4.907 0 0 1-2.213.084 4.919 4.919 0 0 0 4.6 3.417 9.868 9.868 0 0 1-6.1 2.105c-.398 0-.79-.023-1.174-.069a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.006-.423-.016-.633a10.012 10.012 0 0 0 2.466-2.548l-.047-.02z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-teal-400 hover:text-white"
                                aria-label="Instagram"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7.75 2h8.5a5.75 5.75 0 0 1 5.75 5.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5a4.25 4.25 0 0 0-4.25 4.25v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM16.5 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Copyright */}
                <div className="text-center text-white text-sm mt-4">
                    &copy; {new Date().getFullYear()} Online Shopping. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
