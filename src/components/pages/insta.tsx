import Image from 'next/image';

export default function InstagramSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-14">
      {/* Newsletter Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Or Subscribe To The Newsletter</h2>
        <div className="max-w-md mx-auto flex items-center space-x-4 py-4">
          {/* Input Field - Increased width and black color */}
          <input
            type="email"
            placeholder="Email Address..."
            className="w-full p-3 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-teal-500 text-black"
          />
          {/* Submit Button */}
          <button
            className="w-28 p-3 border-b-2 border-black text-black hover:text-teal-500 hover:border-teal-500 focus:outline-none focus:ring-0"
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* Instagram Products Row Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Follow Products And Discounts On Instagram
        </h3>

        {/* Image Gallery (Instagram Feed Style) */}
        <div className="flex overflow-x-auto space-x-4 justify-center py-4 items-center">
          <div className="relative w-40 h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/cat-2.jpg" // Replace with your image path
              alt="Chair 1"
              layout="fill"
            //   objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="relative w-40 h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/cat-1.png" // Replace with your image path
              alt="Chair 2"
              layout="fill"
            //   objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="relative w-40 h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/pink-pf.jpg" // Replace with your image path
              alt="Chair 3"
              layout="fill"
            //   objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="relative w-40 h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/white-pf.png" // Replace with your image path
              alt="Chair 4"
              layout="fill"
            //   objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="relative w-40 h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/orange-pf.png" // Replace with your image path
              alt="Chair 5"
              layout="fill"
            //   objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="relative w-40 h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/cat-3.png" // Replace with your image path
              alt="Chair 5"
              layout="fill"
            //   objectFit="cover"
              className="rounded-t"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
