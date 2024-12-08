
"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for handling images

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      {/* Top Strip */}
      <div className="bg-indigo-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <p className="hidden md:block">Free Shipping On All Orders Over $50</p>
        <div className="flex space-x-4">
          <span className="hidden md:block cursor-pointer hover:underline">Eng</span>
          <span className="hidden md:block cursor-pointer hover:underline">Faqs</span>
          <span className="cursor-pointer hover:underline">Need Help</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/images/sofa-logo.png" // Replace with your logo image
            alt="Comforty Logo"
            width={40}  // Adjust the width and height as needed
            height={40}
          />
          <h1 className="text-2xl font-bold text-gray-800">Comforty</h1>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Cart and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg space-x-2 hover:shadow-md transition duration-300">
            <span className="text-gray-700">🛒</span>
            <span className="font-medium">Cart</span>
            <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-sm">2</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            ☰ {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 font-medium hover:text-teal-600 transition duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

