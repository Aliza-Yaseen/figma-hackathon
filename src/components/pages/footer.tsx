
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaypal, FaCcMastercard, FaCcVisa } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 sm:px-10 lg:px-14">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-3">
            <Image 
              src="/images/sofa-logo.png" // Replace with your logo
              alt="Comforty Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-semibold">Comforty</h1>
          </div>
          <p className="mt-2 text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-3 mt-4">
            {/* Social Icons */}
            <a href="#" className="text-gray-500 items-center p-2 rounded-full border border-gray-300 hover:bg-teal-500 hover:text-white transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 items-center p-2 rounded-full border border-gray-300 hover:bg-teal-500 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 items-center p-2 rounded-full border border-gray-300 hover:bg-teal-500 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-500 items-center p-2 rounded-full border border-gray-300 hover:bg-teal-500 hover:text-white transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-gray-500">Category</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Sofa</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Armchair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Wing Chair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Desk Chair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Park Bench</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-gray-500">Support</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Help & Support</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Help</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-gray-500">Newsletter</h3>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="w-full mt-2 p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Gray Line Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Payment Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <div className="w-12 h-12 flex justify-center items-center">
          <FaPaypal size={24} />
        </div>
        <div className="w-12 h-12 flex justify-center items-center">
          <FaCcVisa size={24} />
        </div>
        <div className="w-12 h-12 flex justify-center items-center">
          <FaCcMastercard size={24} />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>&copy; 2021 Comforty - Designed & Developed by Zaksisoft</p>
      </div>
    </footer>
  );
}
