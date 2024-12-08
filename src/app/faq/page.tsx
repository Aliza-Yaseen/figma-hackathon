'use client'
import { useState } from 'react';
import Navbar from "@/components/navbar";  // Ensure navbar is imported
import Footer from "@/components/pages/footer";

export default function FaqPage() {
    // Toggle state for each question
    const [isOpenQ1, setIsOpenQ1] = useState(false);
    const [isOpenQ2, setIsOpenQ2] = useState(false);
    const [isOpenQ3, setIsOpenQ3] = useState(false);
    const [isOpenQ4, setIsOpenQ4] = useState(false);
    const [isOpenQ5, setIsOpenQ5] = useState(false);
    const [isOpenQ6, setIsOpenQ6] = useState(false);

    return (
        <div>
            <Navbar />
            
            {/* FAQ Section */}
            <section className="py-20 px-6 sm:px-10 lg:px-14 bg-white">
                <h2 className="text-3xl font-bold text-center text-black mb-4">Questions? Look Here</h2>
                <p className="text-center text-gray-600 mb-8">
                    Find answers to frequently asked questions below. Find answers to frequently asked questions below.
                </p>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left Column: Questions and Answers */}
                    <div className="space-y-6">
                        <div className="mb-4 bg-gray-100 rounded-lg">
                            <div 
                                className="text-lg font-semibold text-black p-6 cursor-pointer"
                                onClick={() => setIsOpenQ1(!isOpenQ1)} 
                            >
                                What type of chairs do you offer?
                            </div>
                            {isOpenQ1 && (
                                <div className="p-6 text-gray-600">
                                    We offer a variety of chairs designed to suit different tastes and needs. Our collection includes ergonomic office chairs, comfortable lounge chairs, stylish dining chairs, and outdoor seating options. Whether you need a chair for work or relaxation, Comforty has something for everyone.
                                </div>
                            )}
                        </div>

                        <div className="mb-4 bg-gray-100 rounded-lg">
                            <div 
                                className="text-lg font-semibold text-black p-6 cursor-pointer"
                                onClick={() => setIsOpenQ2(!isOpenQ2)} 
                            >
                                Do your chairs come with a warranty?
                            </div>
                            {isOpenQ2 && (
                                <div className="p-6 text-gray-600">
                                    Yes, all of our chairs come with a warranty to ensure that you are fully satisfied with your purchase. Depending on the type of chair, the warranty covers material defects and craftsmanship for a period of up to 5 years. Please refer to the specific product details for more information about the warranty.
                                </div>
                            )}
                        </div>

                        <div className="mb-4 bg-gray-100 rounded-lg">
                            <div 
                                className="text-lg font-semibold text-black p-6 cursor-pointer"
                                onClick={() => setIsOpenQ3(!isOpenQ3)} 
                            >
                                Can I try a chair before purchasing?
                            </div>
                            {isOpenQ3 && (
                                <div className="p-6 text-gray-600">
                                    Yes, we offer the option to try certain chairs in person at our showrooms. You can test the comfort and fit of our chairs before making a decision. If you’re unsure about a chair, our staff can guide you to find the best option based on your preferences.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Questions and Answers */}
                    <div className="space-y-6">
                        <div className="mb-4 bg-gray-100 rounded-lg">
                            <div 
                                className="text-lg font-semibold text-black p-6 cursor-pointer"
                                onClick={() => setIsOpenQ4(!isOpenQ4)} 
                            >
                                How can I get in touch with you?
                            </div>
                            {isOpenQ4 && (
                                <div className="p-6 text-gray-600">
                                    You can reach us through our contact page or email us directly at support@comforty.com. We also have a live chat feature on our website, and our customer service team is available to assist you with any queries. Feel free to get in touch anytime!
                                </div>
                            )}
                        </div>

                        <div className="mb-4 bg-gray-100 rounded-lg">
                            <div 
                                className="text-lg font-semibold text-black p-6 cursor-pointer"
                                onClick={() => setIsOpenQ5(!isOpenQ5)} 
                            >
                                What will be delivered and when?
                            </div>
                            {isOpenQ5 && (
                                <div className="p-6 text-gray-600">
                                    When you place an order with Comforty, you will receive the exact products you selected. Our team ensures that everything is securely packaged and delivered to your doorstep. Delivery times may vary based on your location, but we aim to process and dispatch orders within 2-3 business days.
                                </div>
                            )}
                        </div>

                        <div className="mb-4 bg-gray-100 rounded-lg">
                            <div 
                                className="text-lg font-semibold text-black p-6 cursor-pointer"
                                onClick={() => setIsOpenQ6(!isOpenQ6)} 
                            >
                                How do I clean and maintain my Comforty chairs?
                            </div>
                            {isOpenQ6 && (
                                <div className="p-6 text-gray-600">
                                    To keep your Comforty chairs looking like new, we recommend regularly wiping them with a soft cloth. For fabric chairs, use a fabric cleaner or mild detergent to remove stains. For leather or faux leather chairs, use a leather cleaner and conditioner to maintain the material. Regularly check and tighten any screws to ensure stability.
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
