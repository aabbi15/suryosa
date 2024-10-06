"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Home, Image as ImageIcon, Plus, CreditCard, Package } from 'lucide-react'

const sidebarItems = [
  { icon: Star, name: 'Featured' },
  { icon: Home, name: 'Home' },
  { icon: ImageIcon, name: 'Gallery' },
  { icon: Plus, name: 'Add' },
  { icon: CreditCard, name: 'Payment' },
  { icon: Package, name: 'Shipping' },
]

export function FloatingSidebarComponent() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const scrollPercentage = scrollPosition / (docHeight - windowHeight)
      const newIndex = Math.min(
        Math.floor(scrollPercentage * sidebarItems.length),
        sidebarItems.length - 1
      )
      setActiveIndex(newIndex)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    (<motion.div
      className={`fixed left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 z-[1000] rounded-[15px] ${ isHovered? "": "rounded-full" }p-2 shadow-lg`}
      initial={{ width: '50px' }}
      animate={{ width: isHovered ? '200px' : '50px' }}
      onMouseEnter={() => setIsHovered(true) }
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
      whileHover={{justifyContent: 'flex-start'}}
      >


      <ul className="space-y-4 ">
        {sidebarItems.map((item, index) => (
          <motion.li
            key={index}
            className={`flex items-center cursor-pointer ${
              activeIndex === index ? 'text-orange-500' : 'text-gray-500'
            } 
            ${isHovered ? 'justify-start' : 'justify-center'}`}
            whileHover={{ scale: 1.1 }}>
            <div className="relative">
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  layoutId="activeBackground"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
              )}
              <div className="relative z-10 p-2">
                <item.icon size={22} />
              </div>
            </div>
            {isHovered && (
              <motion.span
                className=" text-sm font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}>
                {item.name}
              </motion.span>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>)
  );
}