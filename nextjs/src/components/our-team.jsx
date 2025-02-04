'use client'

import Image from 'next/image'
import { Linkedin, PlusCircle } from 'lucide-react'

const teamMembers = [
  {
    name: "Pranesh Chaudhary",
    role: "CEO",
    image: "/placeholder.svg",
    description: "An IIT Kharagpur alumnus, Pranesh Chaudhary, has extensive subject matter expertise on Credit Cards, Insurance, Small Business and Auto Finance. Pranesh had seven years of experience across some of the largest financial services firms in the world before he joined ZunRoof in mid-2016. With a vision of solving electricity issues of urban India through Clean and Smart Energy, he has been assembling a team of tech, operations and product superstars across India. His persistence and perseverance have grown ZunRoof to become the market leader in Residential Solar Rooftop installation and maintenance in India.",
    featured: true
  },
  { name: "Vivek Kumar", role: "Marketing", image: "/placeholder.svg" },
  { name: "Pranav Shah", role: "CEO Office", image: "/placeholder.svg" },
  { name: "Aayush Gupta", role: "Fulfillment", image: "/placeholder.svg" },
  { name: "Sonakshi Mathur", role: "Product", image: "/placeholder.svg" },
  { name: "Sushant Singh", role: "Business Operations", image: "/placeholder.svg" },
]

export function OurTeamComponent() {
  return (
    (<div className="bg-slate-200 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-yellow-400 pb-2">Our Team</span>
        </h2>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            member.featured ? (
              <div key={member.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <Image
                      className=" m-5 object-cover md:w-48"
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192} />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-gray-900">{member.name}</div>
                      <Linkedin className="ml-2 text-blue-600" size={24} />
                    </div>
                    <div
                      className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">{member.role}</div>
                    <p className="mt-2 text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ) : null
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            !member.featured ? (
              <div key={member.name} className='flex flex-col gap-4'>
              <div key={member.name} className="bg-white flex justify-center items-center shadow-lg h-72 rounded-xl overflow-hidden">
                <Image
                  className=" object-cover m-5"
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100} />
                
              </div>
              <div className="">
              <div className="font-bold text-xl mb-2">{member.name}</div>
              <p className="text-gray-700 text-base">{member.role}</p>
            </div>
            </div>
            ) : null
          ))}
          <div
            className="bg-green-500  h-72 flex flex-col cursor-pointer shadow-lg rounded-xl overflow-hidden gap-2 items-center justify-center"
            onClick={() => alert("Join our team!")}
            >
              <PlusCircle className="text-white" size={44} />
            <div className="text-white text-xl font-bold ">
              JOIN OUR TEAM
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}