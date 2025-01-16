import PageTitle from "../component/pageTitle";
import Image from "next/image";
import sirBasitImg from "../../../public/stakeholders/sirBasit.jpeg"
import sirZahidImg from "../../../public/stakeholders/sirZahid.jpeg"
import sirHanzalaImg from "../../../public/stakeholders/sirHanzala.jpeg"
import aunImg from "../../../public/stakeholders/aun.jpeg"
import bilalImg from "../../../public/stakeholders/bilal.jpeg"
import ahmadImg from "../../../public/stakeholders/ahmad.jpeg"
import hanzalaImg from "../../../public/stakeholders/hanzala.jpeg"
import missionImg from "../../../public/webFiles/images/mission.png"

const AboutPage = () => {
    return (
        <div>
            {/* <PageTitle title="About" /> */}
            <div className="bg-teal-50 min-h-screen flex flex-col items-center py-12 px-6">
                {/* Header Section */}
                <header className="text-center max-w-4xl mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">About Us</h1>
                    <p className="text-teal-800 text-lg md:text-xl leading-relaxed">
                        Welcome to <q>Online Shopping</q>! We are passionate about delivering the best products and services to our customers. Here's a little more about who we are and what drives us.
                    </p>
                </header>

                {/* Mission Section */}
                <section className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Our Mission</h2>
                        <p className="text-teal-700 text-lg leading-relaxed">
                            Our mission is to revolutionize the way people shop online by providing a seamless, enjoyable, and reliable shopping experience. We are committed to quality, innovation, and customer satisfaction.
                        </p>
                    </div>
                    <Image
                        src={missionImg}
                        alt="Our mission"
                        className="rounded-lg shadow-lg w-full object-cover"
                    />
                </section>

                {/* Teachers Section */}
                <section className="max-w-5xl mb-16">
                    <h2 className="text-3xl font-semibold text-teal-600 text-center mb-8">Our Teachers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div
                            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={sirZahidImg}
                                alt="aun"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-600"
                            />
                            <h3 className="text-xl font-semibold text-teal-800">Sir Zahid Javed</h3>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center text-center bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={sirBasitImg}
                                alt="aun"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-600"
                            />
                            <h3 className="text-xl font-semibold text-teal-800">Sir Basit</h3>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center text-center bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={sirHanzalaImg}
                                alt="aun"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-600"
                            />
                            <h3 className="text-xl font-semibold text-teal-800">Sir Hanzala</h3>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="max-w-5xl mb-16">
                    <h2 className="text-3xl font-semibold text-teal-600 text-center mb-8">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div
                            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={aunImg}
                                alt="aun"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-600"
                            />
                            <h3 className="text-xl font-semibold text-teal-800">Muhammad Aun</h3>
                            <p className="text-teal-600">22-NTU-CS-1280</p>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center text-center bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={bilalImg}
                                alt="aun"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-600"
                            />
                            <h3 className="text-xl font-semibold text-teal-800">Muhammad Bilal Nadeem</h3>
                            <p className="text-teal-600">22-NTU-CS-1282</p>
                        </div>
                        <div
                            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={ahmadImg}
                                alt="aun"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-600"
                            />
                            <h3 className="text-xl font-semibold text-teal-800">Ahmad Fraz</h3>
                            <p className="text-teal-600">22-NTU-CS-1241</p>
                        </div>
                        <div
                            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={hanzalaImg}
                                alt="aun"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-600"
                            />
                            <h3 className="text-xl font-semibold text-teal-800">Hanzala Nadeem</h3>
                            <p className="text-teal-600">22-NTU-CS-1270</p>
                        </div>
                    </div>
                </section>
                

                {/* Values Section */}
                <section className="max-w-5xl mb-16">
                    <h2 className="text-3xl font-semibold text-teal-600 text-center mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Customer First', description: 'We prioritize our customers above everything.' },
                            { title: 'Integrity', description: 'We operate with honesty and transparency.' },
                            { title: 'Innovation', description: 'We embrace change and drive progress.' },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-teal-800 mb-2">{value.title}</h3>
                                <p className="text-teal-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;

export async function generateMetadata() {
    return {
        title: "Online Shopping - About",
        description: "",
    };
}