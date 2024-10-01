'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
 

export default function MyNavbar({ current, isScrolled2 }) {

  const [isScrolled, setIsScrolled] = useState(false)
  const mypath = usePathname()

  console.log('mypath', mypath)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {  // Change this value to adjust when the navbar changes
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  current = mypath.replace('/', '');

  const links = [
    { name: 'Home', href: '/' ,id:''},
    { name: 'Commercial', href: '/commercial' ,id:'commercial'},
    { name: 'Housing Society', href: '/housing-society',id:'housing-society' },
    { name: 'Knowledge Center', href: '/knowledge-center',id:'knowledge-center' },
    { name: 'Calculator', href: '/calculator' ,id:'calculator'},
    { name: 'Blog', href: '/blog' ,id:'blog'},
  ];

  return (
    <nav className={`bg-red300 fixed top-0 left-0 right-0 z-[1000000]`}>
      <div className="flex items-center mx-auto px-4 py-4 justify-around text-white">
        {/* Logo */}
        {!isScrolled && <Image src="/fwdsuryosalogo/1.png" width={150} height={50} alt="Logo" />}

        {/* Navigation Links */}
        <div className="hidden md:block">
          <div
            className={`transition-all duration-700 rounded-full px-4 py-2 ${
              isScrolled ? 'bg-white text-gray-700' : 'bg-gray-800 bg-opacity-50'
            }`}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? 'hover:bg-gray-200'
                    : 'hover:bg-gray-800'
                } ${
                  current === link.id ? 'underline underline-offset-4' : ''
                }`}
              >
                {link.name}
              </a>
            ))}

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
            <Button variant="default" className="bg-orange-600 hover:bg-orange-700">
              Request a demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
