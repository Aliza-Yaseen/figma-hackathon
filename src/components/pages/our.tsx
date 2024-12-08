
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa'; // Import a cart icon from react-icons

export default function ProductGrid() {
  // Example Product Data
  const products = [
    { id: 1, name: 'Library Stool Chair', price: '$25', originalPrice: '$30', image: '/images/white-pf.png' },
    { id: 2, name: 'Library Stool Chair', price: '$30', originalPrice: '$40', image: '/images/pink-pf.jpg' },
    { id: 3, name: 'Library Stool Chair', price: '$40', originalPrice: '$50', image: '/images/orange-pf.png' },
    { id: 4, name: 'Library Stool Chair', price: '$35', originalPrice: '$45', image: '/images/sofa-pf.png' },
    { id: 5, name: 'Library Stool Chair', price: '$20', originalPrice: '$25', image: '/images/cat-1.png' },
    { id: 6, name: 'Library Stool Chair', price: '$28', originalPrice: '$35', image: '/images/exp-gray.png' },
    { id: 7, name: 'Library Stool Chair', price: '$32', originalPrice: '$38', image: '/images/our-black.png' },
    { id: 8, name: 'Library Stool Chair', price: '$45', originalPrice: '$50', image: '/images/white-pf.png' },
  ];

  return (
    <div className="py-12 px-6 sm:px-10 lg:px-14">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>

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
            {index === 0 || index === 4 ? (
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-lg">
                New
              </div>
            ) : null}

            {index === 1 || index === 5 ? (
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
    </div>
  );
}
