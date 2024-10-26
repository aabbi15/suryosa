'use client'

import { color } from 'framer-motion';
import { Sun, HandCoins, Leaf, RotateCcw } from 'lucide-react'

const benefits = [
  {
    icon: Sun,
    title: "Make Money From Sun",
    description: "Zunroof helps you save 100% on electricity bills, and also make money by selling excess solar units back to the grid",
    color:"text-deep-orange-700"
  },
  {
    color:"text-yellow-700",
    icon: HandCoins,
    title: "Attractive Subsidy",
    description: "Avail upto 40% solar subsidy on total installation cost as per Government guidelines*"
  },
  {
    color:"text-green-500",
    icon: Leaf,
    title: "Green Energy",
    description: "1kW solar saves 154+ trees and prevents 20+ tons of CO₂ emission"
  },
  {
    color:" text-light-blue-700",
    icon: RotateCcw,
    title: "Return on Investment",
    description: "Quick payback period of 3-4 years guaranteed, with pure profit following thereafter"
  }
]

export function SolarBenefitsComponent() {
  return (
    (<div className="max-w-2xl ">
      <ul className="space-y-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
            </div>
            <div>
              <h3 className={`${benefit.color} text-lg font-semibold  `}>{benefit.title}</h3>
              <p className="text-sm text-gray-300">{benefit.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* <p className="text-xs text-gray-500 mt-4">* Terms and conditions apply</p> */}
    </div>)
  );
}