'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

import { motion } from "framer-motion";
import MyNavbar from './ui/navbar'

export function LandingPageJs() {
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
      <div className={`min-h-screen ${ isScrolled ? "" : ""} transition-all duration-700 text-white`}>

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
              backgroundImage: `url('/bg.webp')`,
              filter: "brightness(60%)",
              ...(isScrolled
                ? {
                  backgroundSize: "100% 100%",   // Fills the inner div
                  width: "90%",                // Set the size of the square background image
                  height: "90%",
                  // width: "100%",
                  // height: "100%",
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
            <div className={`container mx-auto transition-all duration-700 ${isScrolled? "px-16 ": "px-4"} `} >
              <div className="max-w-3xl">
                <div className="mb-6 space-x-4 space-y-4  ">
                  <Button variant="glass" className=" text-white bg-gray-500">
                    Letter from the CEO
                  </Button>
                  <Button variant="primary" className=" text-white bg-orange-600">
                    Our Next Chapter
                  </Button>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Know them.<br />Grow them.
                </h1>
                <p className="text-xl mb-8 max-w-2xl">
                  The customer platform built to acquire, service and grow lifelong customers.
                </p>
                <div className="space-y-4 flex md:flex-row flex-col items-center md:justify-start md:items-center  md:space-y-0 md:space-x-4">

                  <div>
                  <Button variant="link" className="text-white hover:text-gray-100">
                    Discover the Planthouse <ChevronRight className="inline-block w-4 h-4" />
                  </Button>
                  </div>
                  <div>
                  <Button variant="default" className="bg-orange-600 hover:bg-orange-700">
                    Request a demo
                  </Button>
                  </div>
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
