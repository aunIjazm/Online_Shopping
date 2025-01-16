
const PrdctCatDrp = () => {
    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-md mx-auto">
                <div className="relative">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Select a Category
                    </label>

                    <select
                        id="category"
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default PrdctCatDrp;