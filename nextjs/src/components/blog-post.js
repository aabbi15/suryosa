"use client"

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart, Facebook, X, ArrowLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

const blogPost = {
  category: "General Residential",
  title: "DOES YOUR SOLAR GUARANTEE POWER PRODUCTION AND SAVINGS?",
  date: "JULY 31, 2024",
  content: `
    We have been in the solar industry for over a decade and have noticed a recurring pattern: customers who previously installed solar systems from unreliable and amateur installers often experience low electricity production and savings. This is primarily due to poor installation practices, subpar equipment, and a lack of proper maintenance.

    At SolarSquare, we guarantee power production and savings through:

    1. 360-degree maintenance of your solar
    2. Regular panel deep cleaning by professionals - every single month
    3. Thousands of lines of code written to elegantly allow real-time performance monitoring of every single solar panel installed on thousands of homes across India

    And a lot more might of our team of IITians and Ph.Ds at SolarSquare.

    Join India's solar revolution and make the switch now!

    With SolarSquare GoodZero there are Zero reasons to wait.
  `,
  tags: ["savings from solar panels", "solar cost savings", "solar electricity savings", "solar panel savings", "solar savings", "solar system savings"],
  views: 777,
  likes: 1,
  readTime: 4,
}

const trendingPosts = [
  { title: "Does your solar GUARANTEE power production and savings?", image: "/placeholder2.svg" },
  { title: "Latest Technology in Solar Panels in 2024", image: "/placeholder2.svg" },
  { title: "Survive the Storm: Why storm-proof rooftop solar matters for your family's safety", image: "/placeholder2.svg" },
]

const recentPosts = [
  { title: "Does your solar GUARANTEE power production and savings?", image: "/placeholder2.svg" },
  { title: "Latest Technology in Solar Panels in 2024", image: "/placeholder2.svg" },
  { title: "Survive the Storm: Why storm-proof rooftop solar matters for your family's safety", image: "/placeholder2.svg" },
]

export default function Bloggy() {

  const router = useRouter();
  const [carouselIndex, setCarouselIndex] = useState(0)

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % trendingPosts.length)
  }

  const prevSlide = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + trendingPosts.length) % trendingPosts.length
    )
  }

  return ((
    <>
            <button onClick={()=>router.back()} className="text-white flex p-2 rounded-xl px-4 bg-orange-500 hover:bg-orange-700 justify-center ml-20 w-32 gap-2"> <ArrowLeftCircle className=''/> Go Back</button> 

    <div
      className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <br/> <br/> */}
      <div className="lg:w-2/3 lg:pr-8 lg:border-r ">
        <div className="text-sm text-orange-500 mb-2">{blogPost.category}</div>
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <div className="text-sm text-gray-500 mb-6">{blogPost.date}</div>
        <Image
          src="/placeholder2.svg"
          alt="Solar panels"
          width={800}
          height={400}
          className="w-full h-auto mb-8" />
        <div className="prose max-w-none mb-8">
          {blogPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
        <div className="mb-8">
          <a href="#" className="text-orange-500 hover:underline">Book a free consultation today.</a>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {blogPost.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Heart size={16} className="mr-1" /> {blogPost.likes} LIKE</span>
            <span>{blogPost.readTime} MINS READ</span>
            <span>{blogPost.views} VIEWS</span>
          </div>
          <div className="flex space-x-2">
            <Facebook className="text-blue-600" />
            <X className="text-blue-400" />
            {/* < className="text-red-600" /> */}
          </div>
        </div>
        <div className="border-t pt-8">
          <div className="flex items-center">
            <Image
              src="/placeholder2.svg"
              alt="Previous post thumbnail"
              width={100}
              height={100}
              className="w-24 h-24 object-cover mr-4" />
            <div>
              <div className="text-sm text-gray-500 mb-2">← PREVIOUS POST</div>
              <h3 className="text-lg font-semibold">Latest Technology in Solar Panels in 2024</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 mt-12 lg:mt-0 lg:pl-8">
        <div className="sticky top-8">
          <h2 className="text-2xl font-bold mb-6">TRENDING POSTS</h2>
          <div className="relative mb-8">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                {trendingPosts.map((post, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover mb-2" />
                    <h3 className="font-semibold">{post.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <ChevronRight size={24} />
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-6">RECENT POSTS</h2>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover mr-4" />
                <h3 className="font-semibold">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>)
  );
}