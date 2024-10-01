"use client"

import { useState } from 'react'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    question: "Should I go Solar ?",
    answer: "Yes, going solar is a great investment for your home and the environment. It can significantly reduce your electricity bills and carbon footprint.",
    category: "All"
  },
  {
    question: "Is Solar Energy safe?",
    answer: "Solar energy is one of the safest and cleanest forms of energy available. Solar panels have no moving parts and do not emit any harmful substances.",
    category: "Solar: The Technology"
  },
  {
    question: "How do Solar panels work?",
    answer: "Solar panels work by converting sunlight into electricity. They contain photovoltaic cells that absorb sunlight and create an electric field, generating direct current (DC) electricity.",
    category: "Solar: The Technology"
  },
  {
    question: "What is a Solar Rooftop System ?",
    answer: "A Solar Rooftop System is a photovoltaic system that has its electricity-generating solar panels mounted on the rooftop of a residential or commercial building.",
    category: "Suryosa"
  },
  {
    question: "What are the types of Solar Rooftop Systems for homes ?",
    answer: "There are mainly two types of Solar Rooftop Systems for homes: Grid-Tied Systems (connected to the utility grid) and Off-Grid Systems (with battery storage for energy independence).",
    category: "Suryosa"
  },
  {
    question: "How to calculate my Solar Power requirement ?",
    answer: "To calculate your solar power requirement, review your past year's electricity bills to determine your average monthly consumption. Divide this by the number of peak sun hours in your area to get an estimate of the system size you need.",
    category: "All"
  },
  {
    question: "Are Solar Panels easily breakable ?",
    answer: "Solar panels are designed to be durable and withstand various weather conditions. They are made with tempered glass and can typically withstand hail and other impacts.",
    category: "Solar: The Technology"
  },
  {
    question: "Do Solar Panels not work in cloudy weather ?",
    answer: "Solar panels can still generate electricity in cloudy weather, although at a reduced efficiency. They work best in direct sunlight but can still produce some power on overcast days.",
    category: "Solar: The Technology"
  }
]

export function FaqSection() {
  const [activeTab, setActiveTab] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItem, setExpandedItem] = useState(null)

  const filteredFAQs = faqData.filter(faq => 
    (activeTab === "All" || faq.category === activeTab) &&
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    (<div className="max-w-4xl mx-auto p-4 bg-white bg-opacity-20 shadow-xl rounded-xl myfont">
      <div className="flex justify-center space-x-4 mb-6 ">
        {["All", "Solar: The Technology", "Suryosa"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2  ${activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'}`}
            onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className=" border-b border-gray-200 pb-4">
            <button
              className="  flex justify-between items-center w-full text-left"
              onClick={() => setExpandedItem(expandedItem === index ? null : index)}>
              <span className="text-lg font-medium">{faq.question}</span>
              {expandedItem === index ? (
                <ChevronUp className="text-orange-500" />
              ) : (
                <ChevronDown className="text-orange-500" />
              )}
            </button>
            {expandedItem === index && (
              <p className="  mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>)
  );
}