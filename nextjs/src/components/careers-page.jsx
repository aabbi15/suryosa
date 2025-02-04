"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp, Share2 } from 'lucide-react'
import Image from 'next/image'

const jobCategories = [
  {
    name: 'Ceo Office',
    roles: []
  },
  {
    name: 'Human Resources',
    roles: []
  },
  {
    name: 'Marketing',
    roles: [
      { title: 'Content Writer', location: 'Gurgaon' },
      { title: 'Brand Manager', location: 'Gurgaon' }
    ]
  },
  {
    name: 'Operations',
    roles: []
  },
  {
    name: 'Product',
    roles: []
  },
  {
    name: 'Sales',
    roles: []
  }
]

const jobDetails = {
  title: 'Content Writer',
  department: 'Marketing',
  type: 'Full Time',
  location: 'Gurgaon',
  description: [
    'Own and manage social media channels of ZunRoof, build an attractive & likable brand',
    'Creative writing skills - including one-liners, tweets in-line with current media trends',
    'Publish short & long blog posts based on campaign or marketing objectives',
    'Prospect and generate leads using social media channels and increase digital presence'
  ],
  requirements: [
    'Experience in social media marketing',
    'Lots of creativity and passion, who takes initiative and can lead from the front',
    'Lots of drive. Must be assertive and willing to take ownership'
  ],
  offers: [
    'Competitive pay, structured to accelerate upwards with future funding rounds',
    'The great learning curve with an all-IIT founding team',
    'Hands-on experience of the end-to-end working of a growth-phase start-up'
  ]
}

export function CareersPageComponent() {
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category)
    setSelectedJob(null)
  }

  const selectJob = (job) => {
    setSelectedJob(job)
  }

  return (
    (
    <div className="grid grid-cols-1 md:grid-cols-5 mx-[5%]">
      <div className="w-full md:col-span-2 p-6 ">
        {jobCategories.map((category) => (

          <div key={category.name} className="mb-4">
            <button
              className=" w-full flex justify-between items-center py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded border-black border-[0.5px]"
              onClick={() => toggleCategory(category.name)}>
              <span className='text-xl'>{category.name}</span>
              {expandedCategory === category.name ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedCategory === category.name && category.roles.length > 0 && (
              <div className="mt-2 ml-4">
                {category.roles.map((role) => (
                  <button
                    key={role.title}
                    className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded"
                    onClick={() => selectJob(role.title)}>
                    <span className="font-medium">{role.title}</span>
                    <span className="text-gray-500 ml-2">{role.location}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className= {`w-full md:col-span-3 p-6  rounded-xl border ${!selectedJob ? "" :"border-black" }`}>
        {!selectedJob ? (
          <div className='flex flex-col'>
            <h1 className="text-4xl font-bold mb-4">Join us on our journey to a brighter future!</h1>
            <p className="mb-4">
              We are a home-tech start-up, powered by a mix of Image Processing, VR, IOT and
              Data Analytics. We are solving energy issues of India by using un-utilised rooftops for
              solar, and by providing sense and control of every appliance in one&apos;s house.
            </p>
            <Image
              src="/office.jpg"
              alt="Team collaboration"
              width={250}
              height={150}
              className="w-[70%] self-center h-auto" />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold text-green-700">{jobDetails.department}</h2>
                <h3 className="text-xl font-semibold">{jobDetails.title}</h3>
                <p className="text-gray-600">{jobDetails.type}, {jobDetails.location}</p>
              </div>
              <button className="flex items-center text-green-700 hover:text-green-800">
                <Share2 className="mr-1" />
                Share this Job
              </button>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Job Description:</h4>
              <ul className="list-decimal pl-5">
                {jobDetails.description.map((item, index) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">What we need?</h4>
              <ul className="list-decimal pl-5">
                {jobDetails.requirements.map((item, index) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">What we offer?</h4>
              <ul className="list-decimal pl-5">
                {jobDetails.offers.map((item, index) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
            <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">
              Apply Now
            </button>
          </div>
        )}
      </div>


    </div>)
  );
}