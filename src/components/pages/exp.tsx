// import Image from 'next/image';

// export default function ExploreStyles() {
//   return (
//     <div className="py-16 px-4 sm:px-8 lg:px-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left Section: Full Cover Image with Heading Positioned Outside */}
//         <div className="relative flex items-center justify-start bg-gray-100 rounded-lg overflow-hidden h-[20rem] sm:h-[24rem] md:h-[30rem]">
//           {/* Heading Positioned Outside of the Image */}
//           <h2
//             className="absolute text-4xl font-bold text-gray-800 transform rotate-90"
//             style={{
//               right: '-9rem', // Push heading slightly left of the image
//               top: '50%',
//               transform: 'translateY(-50%) rotate(-90deg)', // Rotate and center vertically
//               whiteSpace: 'nowrap'
//             }}
//           >
//             Explore New and Popular Styles
//           </h2>
//           {/* Full Cover Image */}
//           <div className="relative w-full h-full">
//             <Image
//               src="/images/orange-pf.png"
//               alt="Left Side Style"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Right Section: Images */}
//         <div className="grid grid-cols-2 grid-rows-2 gap-4">
//           <div className="relative w-full h-36 sm:h-56 md:h-64 rounded-lg overflow-hidden">
//             <Image
//               src="/images/sofa-pf.png"
//               alt="Style 1"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="relative w-full h-36 sm:h-56 md:h-64 rounded-lg overflow-hidden">
//             <Image
//               src="/images/white-pf.png"
//               alt="Style 2"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="relative w-full h-36 sm:h-56 md:h-64 rounded-lg overflow-hidden">
//             <Image
//               src="/images/exp-gray.png"
//               alt="Style 3"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="relative w-full h-36 sm:h-56 md:h-64 rounded-lg overflow-hidden">
//             <Image
//               src="/images/white-pf.png"
//               alt="Style 4"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from 'next/image';

export default function ExploreStyles() {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Full Cover Image with Vertical Text */}
        <div className="relative flex items-center bg-gray-100 rounded-lg overflow-hidden" style={{ height: '500px' }}>
          {/* Vertical Text Positioned to the Left of the Orange Column */}
          <div
            className="absolute left-0 top-0 bottom-0 flex items-center"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'Right center',
              left: '-100rem', // Adjust this to move text closer or further from the orange column
            }}
          >
            <h2 className="text-4xl font-bold text-gray-800 whitespace-nowrap">
              Explore New and Popular Styles
            </h2>
          </div>
          {/* Full Cover Image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/orange-pf.png"
              alt="Left Side Style"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section: Images with Equal Height */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4" style={{ height: '500px' }}>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/images/sofa-pf.png"
              alt="Style 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/images/white-pf.png"
              alt="Style 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/images/exp-gray.png"
              alt="Style 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/images/white-pf.png"
              alt="Style 4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
