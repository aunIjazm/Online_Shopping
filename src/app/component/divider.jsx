const Divider = ({ text }) => {
    return (
        <div className="relative flex items-center justify-center my-12">
            <div className="absolute inset-0 border-t border-black opacity-80"></div>
            {text && (
                <span className="bg-black text-white px-6 py-1 text-sm font-semibold tracking-wide uppercase shadow-md z-10">
                    {text}
                </span>
            )}
        </div>
    );
};

export default Divider;
