
import Navbar from "@/components/navbar";
import Footer from "@/components/pages/footer";
import InstagramSection from "@/components/pages/insta";
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa'; // Import a cart icon from react-icons

export default function AllProducts() {
  // Updated Product Data with the additional row of products
  const products = [
    { id: 1, name: 'Library Stool Chair', price: '$25', originalPrice: '$30', image: '/images/white-pf.png' },
    { id: 2, name: 'Library Stool Chair', price: '$30', originalPrice: '$40', image: '/images/pink-pf.jpg' },
    { id: 3, name: 'Library Stool Chair', price: '$40', originalPrice: '$50', image: '/images/orange-pf.png' },
    { id: 4, name: 'Library Stool Chair', price: '$35', originalPrice: '$45', image: '/images/sofa-pf.png' },
    { id: 5, name: 'Library Stool Chair', price: '$20', originalPrice: '$25', image: '/images/cat-1.png' },
    { id: 6, name: 'Library Stool Chair', price: '$28', originalPrice: '$35', image: '/images/exp-gray.png' },
    { id: 7, name: 'Library Stool Chair', price: '$32', originalPrice: '$38', image: '/images/our-black.png' },
    { id: 8, name: 'Library Stool Chair', price: '$45', originalPrice: '$50', image: '/images/white-pf.png' },

    // Adding one more row with 4 products
    { id: 9, name: 'Office Chair', price: '$50', originalPrice: '$60', image: '/images/cat-1.png' },
    { id: 10, name: 'Armchair', price: '$70', originalPrice: '$80', image: '/images/pink-pf.jpg' },
    { id: 11, name: 'Bean Bag', price: '$40', originalPrice: '$50', image: '/images/orange-pf.png' },
    { id: 12, name: 'Coffee Table', price: '$45', originalPrice: '$55', image: '/images/cat-3.png' }
  ];

  return (
    <div>
      <Navbar />

      {/* Products Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 py-2">All Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              style={{ height: '400px' }} // Set a fixed height for the product card
            >
              {/* Product Image */}
              <div className="relative w-full" style={{ height: '280px' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Product Labels (New and Sales) */}
              {index === 0 || index === 4 || index === 8 ? (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-lg">
                  New
                </div>
              ) : null}

              {index === 1 || index === 5 || index === 9 ? (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-lg">
                  Sales
                </div>
              ) : null}

              {/* Product Details */}
              <div className="p-4 flex flex-col justify-between h-full">
                {/* Left Side: Name and Price */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-red-500 line-through">{product.originalPrice}</span>
                    <span className="text-sm font-bold text-gray-800">{product.price}</span>
                  </div>
                </div>

                {/* Right Side: Cart Icon */}
                <div className="flex justify-end mt-auto">
                  <button
                    className="flex items-center justify-center w-12 h-12 bg-teal-500 text-white border border-gray-300 rounded-md hover:bg-teal-600 transition-colors"
                    aria-label="Add to Cart"
                  >
                    <FaShoppingCart size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InstagramSection/>

      <Footer />
    </div>
  );
}
