import Navbar from "@/components/navbar";
import Footer from "@/components/pages/footer";
import Image from 'next/image';
import { FaShippingFast, FaHammer, FaTag } from 'react-icons/fa'; // Import only necessary icons

export default function AboutUsSection() {
    return (
        <div>
            <Navbar />

            {/* About Us Section */}
            <section className="py-16 px-6 sm:px-10 lg:px-14">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Background Teal with Text */}
                    <div className="bg-teal-600 text-white p-8 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
                        <p className="text-lg mb-6">
                            At Comforty, we believe in creating high-quality furniture that blends
                            style with comfort. Our pieces are designed to fit seamlessly into your
                            home, offering both beauty and practicality.
                        </p>
                        <button
                            className="w-40 p-3 bg-teal-600 text-white border border-white hover:bg-white hover:text-teal-600 transition-all duration-300"
                        >
                            View Collection
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative w-full h-96">
                        <Image
                            src="/images/white-pf.png"
                            alt="Comforty Furniture"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                </div>
            </section>

            {/* What Makes Our Brand Different Section */}
            <section className="py-16 px-6 sm:px-10 lg:px-14 bg-white">
                <h2 className="text-3xl font-bold text-center text-black mb-12">
                    What Makes Our Brand Different
                </h2>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-200 p-8 flex flex-col items-start space-y-4">
                        <div className="text-cyan-700 text-3xl">
                            <FaShippingFast />
                        </div>
                        <h3 className="text-lg font-semibold text-cyan-700">Next Day as Standard</h3>
                        <p className="text-sm text-cyan-700">
                            We provide fast delivery with next-day shipping as standard to make sure you get your furniture when you need it.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-200 p-8 flex flex-col items-start space-y-4">
                        <div className="text-cyan-700 text-3xl">
                            <FaHammer />
                        </div>
                        <h3 className="text-lg font-semibold text-cyan-700">Made by True Artisans</h3>
                        <p className="text-sm text-cyan-700">
                            Each piece of furniture is carefully handcrafted by skilled artisans, ensuring unique and quality craftsmanship.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-200 p-8 flex flex-col items-start space-y-4">
                        <div className="text-cyan-700 text-3xl">
                            <FaTag />
                        </div>
                        <h3 className="text-lg font-semibold text-cyan-700">Unbeatable Prices</h3>
                        <p className="text-sm text-cyan-700">
                            We offer the best value for your money with high-quality furniture at competitive and affordable prices.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gray-200 p-8 flex flex-col items-start space-y-4">
                        <div className="text-cyan-700 text-3xl">
                            <FaTag />
                        </div>
                        <h3 className="text-lg font-semibold text-cyan-700">Recycled Packaging</h3>
                        <p className="text-sm text-cyan-700">
                            We care about the environment and use only recycled packaging materials for all our deliveries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Popular Products Section */}
            <section className="py-16 px-6 sm:px-10 lg:px-14 bg-white">
                <h2 className="text-3xl font-semibold  text-black mb-12">
                    Our Popular Products
                </h2>

                {/* Grid Layout for Popular Products */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Single Image */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-[330px]">
                            <Image
                                src="/images/big-sofa.png"
                                alt="Popular Product 1"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <div className=" mt-2">
                            <h3 className="text-xl font-semibold text-black">Sofa Set</h3>
                            <p className="text-lg text-black">$899.99</p>
                        </div>
                    </div>

                    {/* Right Column - Two Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* First Image in Right Column */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-full h-[330px]">
                                <Image
                                    src="/images/blck-seat.png"
                                    alt="Popular Product 2"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                            <div className=" mt-2">
                                <h3 className="text-xl font-semibold text-black">Black Chair</h3>
                                <p className="text-lg text-black">$299.99</p>
                            </div>
                        </div>

                        {/* Second Image in Right Column */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-full h-[330px]">
                                <Image
                                    src="/images/silver.png"
                                    alt="Popular Product 3"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                            <div className=" mt-2">
                                <h3 className="text-xl font-semibold text-black">Silver Desk</h3>
                                <p className="text-lg text-black">$499.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
