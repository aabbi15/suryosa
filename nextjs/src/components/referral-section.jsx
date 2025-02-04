'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function ReferralSectionComponent() {
  return (
    (<div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Refer a friend, get $250</h2>
          <p className="text-lg text-gray-600">
            Simply refer a realtor, developer or homeowner to our service and you&apos;ll earn $250 when they sign up for our renovation services. Not bad, eh?
          </p>
          <form className="space-y-4">
            <Input type="email" placeholder="Their Email" />
            <Input type="text" placeholder="Their Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="text" placeholder="Your Name" />
            <Button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white">
              Submit →
            </Button>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Friends enjoying coffee"
            className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
      <Card className="mt-12">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Know More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">How it works</h4>
              <p className="text-gray-600">Our referral program is simple. Just provide your friend&apos;s details and your own. When they sign up, you&apos;ll receive $250 as a thank you from us.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Who can I refer?</h4>
              <p className="text-gray-600">You can refer realtors, developers, or homeowners who might be interested in our renovation services. There&apos;s no limit to how many people you can refer!</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">When do I get paid?</h4>
              <p className="text-gray-600">You&apos;ll receive your $250 reward once your referred friend signs up for our renovation services. The payment will be processed within 30 days of their signup.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Any restrictions?</h4>
              <p className="text-gray-600">The referral program is open to everyone, but we reserve the right to verify all referrals. Self-referrals are not eligible for the reward.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}