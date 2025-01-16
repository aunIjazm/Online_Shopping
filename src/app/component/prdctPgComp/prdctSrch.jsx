"use client";

const PrdctSrch = () => {
    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                    />
                    <button
                        className="bg-teal-600 text-white px-4 py-2 hover:bg-teal-700 focus:outline-none"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
export default PrdctSrch;