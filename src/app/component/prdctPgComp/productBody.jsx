"use client";

import ProductSection from "./prdctboxes";
import PrdctSdBr from "./prdctSdBr";



const ContantSection = () => {


    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">

                {/* <PrdctSdBr /> */}

                {/* Contact Section */}
                <section className="bg-white p-6 shadow-md rounded-lg md:col-span-2">
                    <ProductSection />
                </section>
            </div>
        </div>
    );
};

export default ContantSection;
