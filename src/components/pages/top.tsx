import Image from 'next/image';

const topCategories = [
  {
    id: 1,
    image: '/images/cat-1.png',
    name: 'Wing Chair',
    price: '3,584 Products',
  },
  {
    id: 2,
    image: '/images/cat-2.jpg',
    name: 'Wooden Chair',
    price: '158 Products',
  },
  {
    id: 3,
    image: '/images/cat-3.png',
    name: 'Desk Chair',
    price: '154 Products',
  },
];

export default function TopCategories() {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">Top Categories</h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topCategories.map((category) => (
          <div
            key={category.id}
            className="relative group border border-gray-200 rounded-sm shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-72 lg:h-80">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                // objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/5 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-sm md:text-lg font-semibold">{category.name}</h3>
              <p className="text-xs md:text-sm font-medium text-gray-300">{category.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
