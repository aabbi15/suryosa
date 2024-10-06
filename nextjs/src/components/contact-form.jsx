"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactFormComponent({isOpen, setIsOpen}) {


  // const [isOpen2, setIsOpen2] = useState(isOpen)
  console.log(isOpen,'from child')


  const toggleForm = () => setIsOpen(!isOpen)

  return (<>
    {/* <Button onClick={toggleForm} className="fixed bottom-4 right-4">
      Contact Us
    </Button> */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-full sm:w-[400px] md:w-[500px] z-[91000000] bg-gray-900 bg-opacity-[92%] text-white p-6 shadow-lg overflow-y-auto">
          <button
            onClick={toggleForm}
            className="absolute top-4 left-4 text-white hover:text-gray-300"
            aria-label="Close contact form">
            <X size={24} />
          </button>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-2">Interested in solving your problems with Suryosa?</h2>
            <p className="text-gray-400 mb-6">One of our experts will get in touch as soon as possible.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Input
                type="text"
                placeholder="First name*"
                className="bg-zinc-800 border-zinc-700" />
              <Input
                type="text"
                placeholder="Last name*"
                className="bg-zinc-800 border-zinc-700" />
              <Input type="email" placeholder="Email*" className="bg-zinc-800 border-zinc-700" />
              <div className="flex space-x-2">
                {/* <Select>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India (भारत)</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select> */}
                <Input type="tel" placeholder="Phone*" className="bg-zinc-800 border-zinc-700 w-full" />
              </div>
              <Textarea
                placeholder="Tell us how we can help"
                className="bg-slate-200 border-slate-50 "
                rows={4} />
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Submit
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              By submitting this form I agree that Suryosa may collect, process and retain my data pursuant to its Privacy Policy.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>);
}