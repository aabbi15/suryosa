'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

import { motion } from "framer-motion";

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
      <div className="min-h-screen  text-white">
        {/* Navigation */}
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
                  Know them.<br />Grow them.
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
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Success</CardTitle>
                  <CardDescription>Empower your team to drive customer outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Streamline your customer success processes and improve customer satisfaction with our comprehensive tools and insights.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Product Analytics</CardTitle>
                  <CardDescription>Understand user behavior and product performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Gain valuable insights into how customers use your product and identify areas for improvement and growth.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Optimization</CardTitle>
                  <CardDescription>Maximize customer lifetime value</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Optimize your pricing strategies and identify upsell opportunities to increase revenue from your existing customer base.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
