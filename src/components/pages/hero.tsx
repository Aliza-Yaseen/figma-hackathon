import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <p className="text-sm font-semibold text-teal-600 uppercase mb-2 pt-5">
            Welcome to Chairy
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 ">
            Best Furniture Collection For Your Interior.
          </h1>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Discover our wide range of premium furniture designed to bring style
            and comfort to your home.
          </p>
          <button className="mt-6 inline-flex items-center bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-teal-700 transition duration-300">
            Shop Now
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 lg:mt-0 lg:ml-12 flex justify-center">
          <Image
            src="/images/home-i.png"
            alt="Comfortable Chair"
            width={450}
            height={450}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
