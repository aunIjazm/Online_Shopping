import React from "react";
import Image from "next/image";
import WebLogo from "../../../public/webFiles/images/logo.png"
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r sm:px-2 from-teal-400 to-gray-600">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex rounded-full justify-center mb-6">
          <Image
            src={WebLogo}
            className="h-20 w-20 rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to Online Shopping
        </h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          Log in to your account
        </p>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* Remember Me */}
          {/* <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div> */}

          {/* Login Button */}
          <div>
            <Link href={"/"}>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition"
              >
                Log In
              </button>
            </Link>
          </div>
        </form>

        {/* Divider */}
        {/* <div className="mt-6 flex items-center justify-between">
          <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
          <p className="text-xs text-gray-500 uppercase">Or Login With</p>
          <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
        </div> */}

        {/* Social Login */}
        {/* <div className="mt-6 flex space-x-3">
          <button
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Facebook
          </button>
          <button
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Google
          </button>
        </div> */}

        {/* Signup Link */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/userRegistration" className="text-blue-600 hover:underline">
            Not Registered ?
          </Link>
        </p>
      </div>

    </div>
  );
};

export default LoginPage;

export async function generateMetadata() {
  return {
    title: "Login to Online Shopping",
    description: "",
  };
}