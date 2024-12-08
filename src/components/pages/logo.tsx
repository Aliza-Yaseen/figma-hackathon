import Image from 'next/image';

export default function Logos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-10">
      <div className="icon-container group flex justify-center items-center">
        <Image
          src="/images/Logo (1).png"
          alt="Icon 1"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="icon-container group flex justify-center items-center">
        <Image
          src="/images/Logo (2).png"
          alt="Icon 2"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="icon-container group flex justify-center items-center">
        <Image
          src="/images/Logo (3).png"
          alt="Icon 3"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="icon-container group flex justify-center items-center">
        <Image
          src="/images/Logo (4).png"
          alt="Icon 4"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="icon-container group flex justify-center items-center">
        <Image
          src="/images/Logo (5).png"
          alt="Icon 5"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="icon-container group flex justify-center items-center">
        <Image
          src="/images/Logo (6).png"
          alt="Icon 6"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="icon-container group flex justify-center items-center">
        <Image
          src="/images/Logo (7).png"
          alt="Icon 7"
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-105 transition-all duration-200"
        />
      </div>
    </div>
  );
}
