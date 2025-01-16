"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WebLogo from "../../public/webFiles/images/logo.png"
import { useState } from 'react'
import axios from 'axios'

export default function UserReg() {

    // =====================================================================
    // Additional Functions---
    function resetFields() {
        setName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
    }
    // ---------------------------------------------------------------------
    // =====================================================================
    // States Used---
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    // ---------------------------------------------------------------------

    // =====================================================================
    // Creating User Function---
    const createUser = async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            const data = { name, email, password };
            if (password === confPassword) {
                const response = await axios.post("/api/user", data);

                resetFields();
                alert("SignUp Success");
                // Removed response.data as it's not being used
            } else {
                alert("Passwords do not match");
            }
        } catch (error) {
            alert("There is an error, please recheck");
            console.error(error); // Logging the error for better debugging
        }
    }
    // ---------------------------------------------------------------------

    return (
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
            {/* Logo */}
            <div className="flex rounded-full justify-center mb-6">
                <Image src={WebLogo} alt="Web Logo" className="h-20 w-20 rounded-full" />
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Create Your Account
            </h2>
            <p className="text-sm text-center text-gray-500 mb-4">
                Fill in the details below to sign up
            </p>

            <form className="space-y-6" onSubmit={createUser}>
                {/* Name */}
                <div className="gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                {/* Password and Confirm Password */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                

                {/* Register Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition"
                    >
                        Register
                    </button>
                </div>
            </form>

            {/* Login Link */}
            <p className="mt-8 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                    Log In
                </Link>
            </p>
        </div>
    )
}
