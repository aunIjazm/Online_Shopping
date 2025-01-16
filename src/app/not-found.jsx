import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 to-gray-100 px-6">
            {/* Emoji */}
            <div className="text-9xl mb-6 animate-bounce">😢</div>

            {/* Error Message */}
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl text-gray-700 mb-6">
                Oops! We can't seem to find the page you're looking for.
            </h2>

            {/* Suggestion */}
            <p className="text-lg text-gray-600 mb-8">
                It might have been moved, deleted, or maybe you mistyped the URL.
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
                <Link
                    href="/"
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
