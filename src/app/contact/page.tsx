import Navbar from "@/components/navbar";
import Footer from "@/components/pages/footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaTrophy, FaCheckCircle, FaUserCircle } from 'react-icons/fa'; // Import necessary icons

export default function ContactPage() {
    return (
        <div>
            <Navbar />

            {/* Contact Section */}
            <section className="py-16 px-6 sm:px-20 lg:px-14 bg-white">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Get in Touch with Us
                </h2>

                <div className="flex flex-col items-center justify-center h-auto px-4">
                    <p className="text-center text-gray-600 w-full sm:w-[70%]">
                        We’d love to hear from you! Whether you have a question about our products, need assistance with an order, or want to provide feedback, we’re here to help. Our team is committed to ensuring you have the best experience with Comforty.
                    </p>
                </div>


                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-8">
                    {/* Left Side: Contact Information */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div>
                            <h3 className="text-xl font-semibold text-black flex items-center space-x-2 py-8">
                                <FaMapMarkerAlt className="" />
                                <span>Address</span>
                            </h3>
                            <p className="text-gray-800 mt-2">123 Comforty Street, Cozy City, 45678</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <h3 className="text-xl font-semibold text-black flex items-center space-x-2">
                                <FaPhoneAlt className="" />
                                <span>Phone</span>
                            </h3>
                            <p className="text-gray-800 mt-2">
                                Headline: (123) 456-7890 <br />
                                Mobile: (987) 654-3210
                            </p>
                        </div>

                        {/* Working Time */}
                        <div>
                            <h3 className="text-xl font-semibold text-black flex items-center space-x-2">
                                <FaClock className="" />
                                <span>Working Time</span>
                            </h3>
                            <p className="text-gray-800 mt-2">
                                Monday to Friday: 09:00 - 22:00 <br />
                                Saturday - Sunday: 09:00 - 21:00
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className=" p-8 rounded ">
                        <form className="space-y-6">
                            {/* Your Name */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-4">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>

                            {/* Your Address */}
                            <div>
                                <label htmlFor="address" className="block text-gray-700 font-semibold mb-4">
                                    Your Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Enter your address"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-4">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Enter subject"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-4">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4} // Change from "4" to 4 (number)
                                    placeholder="Enter your message"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                ></textarea>

                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-[50%] p-3 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition-all duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* last */}


            <section className="py-16 px-6 sm:px-10 lg:px-14">
                <div className="container mx-auto bg-gray-200 p-10"> {/* Parent div with gray background and more padding */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Increased gap between columns */}
                        {/* Column 1 - High Quality */}
                        <div className="flex flex-col items-center text-center space-y-4 p-6  "> {/* Added padding, background, border-radius, and shadow */}
                            <div className="flex items-center space-x-2">
                                <FaTrophy className="text-4xl text-black" /> {/* High quality trophy icon */}
                                <h3 className="text-lg font-semibold text-gray-800">High Quality</h3>
                            </div>
                            <p className="text-gray-600">Crafted from the finest materials to ensure durability and luxury in every piece.</p>
                        </div>

                        {/* Column 2 - Warranty Protection */}
                        <div className="flex flex-col items-center text-center space-y-4 p-6 ]shadow-lg"> {/* Added padding, background, border-radius, and shadow */}
                            <div className="flex items-center space-x-2">
                                <FaCheckCircle className="text-4xl text-black" /> {/* Verified icon */}
                                <h3 className="text-lg font-semibold text-gray-800">Warranty Protection</h3>
                            </div>
                            <p className="text-gray-600">Enjoy peace of mind with our comprehensive warranty coverage, protecting your investment for years.</p>
                        </div>

                        {/* Column 3 - 24/7 Support */}
                        <div className="flex flex-col items-center text-center space-y-4 p-6 \shadow-lg"> {/* Added padding, background, border-radius, and shadow */}
                            <div className="flex items-center space-x-2">
                                <FaUserCircle className="text-4xl text-black" /> {/* 24/7 Support icon */}
                                <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
                            </div>
                            <p className="text-gray-600">Our dedicated support team is always available to assist you whenever you need help.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
