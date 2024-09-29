"use client"

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Zap, Receipt, DoorOpen } from 'lucide-react'

export function SolarCalculatorComponent() {
  const [monthlyBill, setMonthlyBill] = useState(2500)
  const [savingsPercentage, setSavingsPercentage] = useState(75)
  const [showPopup, setShowPopup] = useState(false)

  const calculateSavings = () => {
    const monthlySavings = monthlyBill * (savingsPercentage / 100)
    const annualSavings = monthlySavings * 12
    const fourteenYearSavings = annualSavings * 14
    const reservedSolar = Math.round(monthlyBill / 0.85) // This is a mock calculation
    const energyProduced = Math.round(reservedSolar * 0.1054) // This is a mock calculation
    const reservationFee = Math.round(fourteenYearSavings * 0.0515) // This is a mock calculation

    return {
      monthlySavings: monthlySavings.toFixed(2),
      annualSavings: annualSavings.toFixed(2),
      fourteenYearSavings: fourteenYearSavings.toFixed(2),
      reservedSolar,
      energyProduced: energyProduced.toFixed(2),
      reservationFee: reservationFee.toFixed(2),
    };
  }

  const savings = calculateSavings()

  return (
    (
    <div className="animatedbg text-white p-8 min-h-screen">
      <div className="w-full mx-auto">

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>

        <div className="mb-8 flex flex-col justify-start items-start ml-10">

          <div className="text-green-400 mb-10">Forecast your savings</div>

          <div className="flex items-center mb-10">
            <div className="bg-pink-200 text-pink-800 rounded-xl p-2 mr-4">
              V 130
            </div>
            <div>
              <h2 className="text-2xl font-bold">Venera 130</h2>
              <p className="text-sm text-gray-400">Operational Until 2038</p>
            </div>
          </div>

          <div className="text-sm mb-4">
            Every unit of electricity from this project generates ₹6.05 discount on your power bill
          </div>


          <div className="mb-4 w-[70%]">

          <div className="mb-2 ">Enter Monthly Bill (₹) </div>
            <Input
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              placeholder="Enter avg power bill"
              className="bg-white text-black" />
          </div>

          <div className='w-[70%]'>
            <div className="mb-2">Choose savings range (%)</div>
            <Slider
              value={[savingsPercentage]}
              onValueChange={(value) => setSavingsPercentage(value[0])}
              max={100}
              step={1}
              className="w-full" />
            <div className="text-right">{savingsPercentage}%</div>
          </div>
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-2 gap-4 w-[70%]">
          
            <div className="bg-black p-4 rounded-xl ring-1 ring-green-400 mb-4 text-center col-span-2">
              <p className="text-sm mb-2">Your monthly savings</p>
              <p className="text-3xl font-bold">₹{savings.monthlySavings}</p>
            </div>

            
            <div className="col-span-2 grid grid-cols-2 gap-4 mb-4">
              <div className="bg-black p-4 rounded-xl ring-1 ring-green-400">
                <p className="text-sm mb-2">Reserved Solar</p>
                <p className="text-xl font-bold">{savings.reservedSolar} W</p>
              </div>
              <div className="bg-black p-4 rounded-xl ring-1 ring-green-400">
                <p className="text-sm mb-2">Energy Produced Mo</p>
                <p className="text-xl font-bold">{savings.energyProduced} kWh</p>
              </div>
            </div>

            <div className="grid col-span-2 grid-cols-2 gap-4 mb-4">
              <div className="bg-black p-4 rounded-xl ring-1 ring-green-400">
                <p className="text-sm mb-2">Annual Savings</p>
                <p className="text-xl font-bold">₹{savings.annualSavings}</p>
              </div>


              <div className="bg-black p-4 rounded-xl ring-1 ring-green-400">
                <p className="text-sm mb-2">14 Year Savings</p>
                <p className="text-xl font-bold">₹{savings.fourteenYearSavings}</p>
              </div>
            </div>


            <div className="bg-black p-4 rounded-xl ring-1 ring-green-400 mb-4 col-span-2 ">
              <div className="flex justify-between items-center mb-2">
                <p>One-time Reservation Fee</p>
                <p className="font-bold">₹{savings.reservationFee}</p>
              </div>
              <Button
                className="w-full bg-green-400 text-black hover:bg-green-500"
                onClick={() => setShowPopup(true)}>
                Book Now
              </Button>
            </div>
         
        </div>

        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 border-t border-gray-700 ">
          <div className="flex items-center justify-center  py-8 ">
            <Zap className="mr-2 text-green-400" />
            <div>
              <h3 className="font-bold mb-1">More for less</h3>
              <p className="text-sm text-gray-400">Cost drops as projects are bigger</p>
            </div>
          </div>
          <div className="  py-8 flex items-center justify-center border-x border-gray-700 ">
            <Receipt className="mr-2 text-green-400" />
            <div>
              <h3 className="font-bold mb-1">Tax-free returns</h3>
              <p className="text-sm text-gray-400">Discounts on power are not taxed</p>
            </div>
          </div>
          <div className="  py-8 flex items-center justify-center">
            <DoorOpen className="mr-2 text-green-400" />
            <div>
              <h3 className="font-bold mb-1">Exit anytime</h3>
              <p className="text-sm text-gray-400">Return your solar & get a refund</p>
            </div>
          </div>
        </div>

        <div
          className="-mt- z-100 bg-green-100 text-black px-4 py-2 rounded-full flex justify-between items-center">
          <p className="font-bold">Reserving solar is 30% better than fixed deposits</p>
          <Button variant="secondary" className="rounded-full">
            Benchmark Savings <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>


      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Now</DialogTitle>
          </DialogHeader>
          <p>Proceed to site assessment?</p>
          <Button onClick={() => window.location.href = '/site-assessment'}>
            Go to Site Assessment
          </Button>
        </DialogContent>
      </Dialog>
    </div>)
  );
}