

import { Button } from '@/components/ui/button'


export default function MyNavbar({current, isScrolled}){
    return (

        <nav className={`fixed top-0 left-0 right-0 z-10`}>
        <div className="flex items-center mx-auto px-4 py-4 justify-around">
          {/* Logo */}
          {!isScrolled && <div className="text-2xl font-bold">suryosa</div>}

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div
              className={`transition-all duration-700 rounded-full px-4 py-2 ${isScrolled ? "bg-white text-gray-700" : "bg-gray-800 bg-opacity-50"}`}
            >
              <a
                href="#"
                className={`px-3 py-2 rounded-full transition-colors duration-300 ${isScrolled ? " hover:bg-gray-200" : "hover:bg-gray-800"}`}
              >
                Home
              </a>
              <a
                href="#"
                className={`px-3 py-2 rounded-full transition-colors duration-300 ${isScrolled ? " hover:bg-gray-200" : "hover:bg-gray-800"}`}
              >
                Solutions
              </a>
              <a
                href="#"
                className={`px-3 py-2 rounded-full transition-colors duration-300 ${isScrolled ? " hover:bg-gray-200" : "hover:bg-gray-800"}`}
              >
                Platform
              </a>
              <a
                href="#"
                className={`px-3 py-2 rounded-full transition-colors duration-300 ${isScrolled ? " hover:bg-gray-200" : "hover:bg-gray-800"}`}
              >
                Customers
              </a>
              <a
                href="#"
                className={`px-3 py-2 rounded-full transition-colors duration-300 ${isScrolled ? " hover:bg-gray-200" : "hover:bg-gray-800"}`}
              >
                Pricing
              </a>
              <a
                href="#"
                className={`px-3 py-2 rounded-full transition-colors duration-300 ${isScrolled ? " hover:bg-gray-200" : "hover:bg-gray-800"}`}
              >
                Explore
              </a>

              {isScrolled && (
                <button className="transition-all duration-100 py-[3px] -my-2 px-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white">
                  Request a demo
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          {!isScrolled && (
            <div className="flex items-center space-x-4">
              {/* <Button variant="ghost" className="text-white">Log in</Button> */}
              <Button variant="default" className="bg-orange-600 hover:bg-orange-700">Request a demo</Button>
            </div>
          )}
        </div>
      </nav>
    )
}