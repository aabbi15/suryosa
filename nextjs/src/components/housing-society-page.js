'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

import { motion } from "framer-motion";
import MyNavbar from './ui/navbar'

export function HousingSocietyPageJs() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    (
      <div className="min-h-screen  text-white">

        {/* Navigation */}
        <MyNavbar isScrolled={isScrolled}/>

        {/* Hero Section */}
        <div className="relative h-screen"
          style={{
            display: "flex",         // Centering the inner div
            justifyContent: "center",
            alignItems: "center",
            ...(isScrolled ? {
              borderRadius: "50px",    // Rounds the parent container
              overflow: "hidden",
            } : {})
          }}>
          {/* Background Image */}
          <div
            className="bg-no-repeat bg-center transition-all duration-700"
            style={{
              backgroundImage: `url('/housingsocietybg.jpg')`,
              filter: "brightness(60%)",
              ...(isScrolled
                ? {
                  backgroundSize: "100% 100%",   // Fills the inner div
                  width: "90%",                // Set the size of the square background image
                  height: "90%",
                  borderRadius: "50px",
                }
                : {
                  backgroundSize: "cover",     // Covers the full background
                  width: "100%",
                  height: "100%",
                })
            }}
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="mb-6 space-x-4">
                  <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
                    Letter from the CEO
                  </Button>
                  <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
                    Our Next Chapter
                  </Button>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Become a Solar Powered Society.
                </h1>
                <p className="text-xl mb-8 max-w-2xl">
                  The customer platform built to acquire, service and grow lifelong customers.
                </p>
                <div className="space-y-4 md:space-y-0 md:space-x-4">
                  <Button variant="link" className="text-white hover:text-gray-100">
                    Discover the Planthouse <ChevronRight className="inline-block w-4 h-4" />
                  </Button>
                  <Button variant="default" className="bg-orange-600 hover:bg-orange-700">
                    Request a demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
          
      </div>
    )
  );
}