'use client'

import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { Globe, PersonStanding, PersonStandingIcon } from 'lucide-react'

export function AnimatedStatsCardJs() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    };
  }, [])

  return (
    (<div ref={ref} className="bggray-100 p-8 mx-[5%] ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="neon-bg neon-red p-6 rounded-lg">
          <div className="text-sm font-semibold mb-2">Rated on Google</div>
          <div className="text-6xl font-bold mb-2" aria-live="polite">
            {isVisible ? <CountUp end={84} duration={2} /> : '0'}%
          </div>
          <div className="text-lg">Happy With Look Youthful & Refreshed With A Natural Facelift.</div>
        </div>
        <div className="neon-bg neon-green p-6 rounded-lg">
          <div className="text-6xl font-bold mb-2" aria-live="polite">
            {isVisible ? <CountUp end={14} duration={2} /> : '0'}
          </div>
          <div className="text-lg mb-2">Branches In Utah</div>
          <div className="text-sm">04 Newly Inaugurated (Salt Lake)</div>
        </div>
        <div className="neon-bg neon-blue p-6 rounded-lg">
          <div className="text-6xl font-bold mb-2" aria-live="polite">
            {isVisible ? <CountUp end={45} duration={2} /> : '0'}%
          </div>
          <div className="text-lg mb-2">Growth In Patient Last Year*</div>
          <div className="text-sm">Smile-O International (Global)</div>
        </div>
        <div className="col-span-1 md:col-span-2 neon-bg neon-purple p-6 rounded-lg">
          <div className="text-lg mb-2">Total Numbers of Surgery*</div>
          <div className="text-6xl font-bold mb-2" aria-live="polite">
            {isVisible ? <CountUp end={2.35} decimals={2} duration={2} /> : '0.00'}K
          </div>
          <div className="text-lg">
            Stunning On
            <ul className="list-disc list-inside mt-2">
              <li>Facial</li>
              <li>Lips Filler</li>
              <li>Smile Makeover</li>
            </ul>
          </div>
        </div>
        <div className="neon-bg neon-black text-white p-6 rounded-lg">
          <div className="text-lg font-semibold mb-4">International Surgeons Globally</div>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5" aria-hidden="true" />
            <span>Salt Lake City Utah</span>
          </div>
          <div className="flex -space-x-2">

          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
          <PersonStanding/>
            
            
            {/* //   src="/placeholder.svg?height=40&width=40"
            //   alt="Surgeon 1"
            //   className="w-10 h-10 rounded-full border-2 border-white" />
            // <img
            //   src="/placeholder.svg?height=40&width=40"
            //   alt="Surgeon 2"
            //   className="w-10 h-10 rounded-full border-2 border-white" />
            // <img
            //   src="/placeholder.svg?height=40&width=40"
            //   alt="Surgeon 3"
            //   className="w-10 h-10 rounded-full border-2 border-white" /> */}
          </div>
          <div className="text-lg mt-4">Over 200+ happy customers in the past 2 years</div>
        </div>
      </div>
    </div>)
  );
}