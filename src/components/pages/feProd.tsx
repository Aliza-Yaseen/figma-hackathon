import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const featuredProducts = [
  {
    id: 1,
    image: '/images/white-pf.png',
    name: 'Library Stool Chair',
    price: '$20.99',
  },
  {
    id: 2,
    image: '/images/pink-pf.jpg',
    name: 'Library Stool Chair',
    price: '$25.99',
  },
  {
    id: 3,
    image: '/images/orange-pf.png',
    name: 'Library Stool Chair',
    price: '$30.99',
  },
  {
    id: 4,
    image: '/images/sofa-pf.png',
    name: 'Library Stool Chair',
    price: '$40.99',
  },
];

export default function FeaturedProducts() {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden rounded-t-lg">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                // objectFit="cover"
                className="transform transition-transform duration-300 "
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col items-center w-full">
              {/* Name */}
              <h3 className="text-base sm:text-lg font-medium text-gray-800 text-center mb-2 hover:text-teal-600">
                {product.name}
              </h3>

              {/* Price and Cart */}
              <div className="flex justify-between items-center w-full ">
                {/* Price */}
                <p className="text-sm sm:text-base font-semibold text-gray-900 ">
                  {product.price}
                </p>

                {/* Cart Icon */}
                <button
                  className="text-gray-600 hover:text-gray-800 p-1 sm:p-2"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
