import Navbar from "@/components/navbar";  // Import your Navbar component
import Footer from "@/components/pages/footer"; // Import your Footer component
import Image from 'next/image';  // For image handling

export default function ShopPage() {
    return (
        <div className="">
            <div>
                <Navbar />

                {/* Shop Page Section */}
                <section className="py-16 px-6 sm:px-10 lg:px-14 bg-white">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Product Image */}
                        <div className="relative w-full h-96">
                            <Image
                                src="/images/pink-pf.jpg" // Replace with your actual image path
                                alt="Library Stool Chair"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Right Column - Product Info */}
                        <div className="flex flex-col justify-center space-y-6">
                            <h2 className="text-5xl font-semibold w-[70%] text-black">Library Stool Chair</h2>

                            {/* Price Button */}
                            <button className="w-40 py-2 px-4 bg-teal-600 text-white font-semibold  rounded-full w-[37%]">
                                Price: $129.99
                            </button>

                            {/* Gray Line */}
                            <hr className="border-gray-300 my-6" />

                            {/* Description */}
                            <p className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet velit metus. Mauris euismod arcu nec mi feugiat, ut placerat felis bibendum. Sed vehicula convallis purus, eu hendrerit lorem volutpat id. Cras ultricies neque nulla, ac efficitur magna auctor non.
                            </p>

                            {/* Add to Cart Button with 70% Width */}
                            <button className="w-[50%] py-3 bg-teal-600 text-white rounded-lg flex items-center justify-center">
                                <span className="mr-2">Add to Cart</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h18l-2 9H5l-2-9zm0 0l2 9h14l2-9M6 16h12a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 012-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>


                {/* new */}

                {/* Instagram Products Row Section */}
                <div className=" mt-12 py-16 ">
                    <h3 className="text-2xl font-semibold px-[10%] text-gray-800 mb-10">
                        FEATURED PRODUCTS
                    </h3>

                    {/* Image Gallery (Instagram Feed Style) */}
                    <div className="flex overflow-x-auto space-x-4 justify-center  items-center">
                        <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                            <Image
                                src="/images/our-black.png" // Replace with your image path
                                alt="Chair 1"
                                layout="fill"
                                //   objectFit="cover"
                                className="rounded-t"
                            />
                        </div>
                        <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                            <Image
                                src="/images/white-pf.png" // Replace with your image path
                                alt="Chair 2"
                                layout="fill"
                                //   objectFit="cover"
                                className="rounded-t"
                            />
                        </div>
                        <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                            <Image
                                src="/images/cat-3.png" // Replace with your image path
                                alt="Chair 3"
                                layout="fill"
                                //   objectFit="cover"
                                className="rounded-t"
                            />
                        </div>
                        <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                            <Image
                                src="/images/orange-pf.png" // Replace with your image path
                                alt="Chair 4"
                                layout="fill"
                                //   objectFit="cover"
                                className="rounded-t"
                            />
                        </div>
                   
                        <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                            <Image
                                src="/images/cat-1.png" // Replace with your image path
                                alt="Chair 5"
                                layout="fill"
                                //   objectFit="cover"
                                className="rounded-t"
                            />
                        </div>
                    </div>
                </div> 

                <Footer />
            </div>

        </div>
    );
}
