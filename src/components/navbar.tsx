'use client'

import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return(
        <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm transition-colors duration-300 ease-in-out shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-lg md:text-2xl  font-bold">Ariana Banden Central</span>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "Services","Used tyre disposal","Export", "About us", "Find us","Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().split(" ").join("-")}`.toLowerCase()}
                    className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="flex items-center">
              <div className="ml-4 lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-md 
                    "hover:bg-gray-200"
                   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg
                    className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Services","Used tire disposal","Export","Find us", "About us", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().split(" ").join("-")}`.toLowerCase()}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                 "hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
}