export default function Loader(props){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          {/* Logo (optional) */}
          <div className="mb-4">
            <img
              src="/logo.png" // Add your logo here or replace with a default one
              alt="Logo"
              className="w-32 h-auto mx-auto"
            />
          </div>
          
          {/* Spinner */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-400 border-solid rounded-full animate-spin border-t-blue-600"></div>
          </div>
  
          {/* Loading text */}
          <h1 className="text-xl text-gray-700 font-semibold">
            {props.PageTitle} Page is Loading, please wait...
          </h1>
        </div>
      </div>
    );
}