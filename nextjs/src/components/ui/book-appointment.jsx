'use client'

import React, { useState } from 'react';

export default function BookAppointment() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [address, setAddress] = useState('');

  // Dummy data for services and time slots
  const services = [
    { id: '1', name: 'Financial Planning', duration: '1 Hour' },
    { id: '2', name: 'Retirement Planning', duration: '1 Hour' },
    { id: '3', name: 'Investment Advice', duration: '1 Hour' },
  ];

  const timeSlots = ['09:00', '12:00', '14:00', '15:00'];

  const handleSubmit = () => {
    if (!selectedService || !selectedDate || !selectedTime || !address) {
      alert('Please fill in all fields before booking.');
      return;
    }

    alert(`Appointment Booked! \nService: ${selectedService}\nDate: ${selectedDate}\nTime: ${selectedTime}\nAddress: ${address}`);
  };

  return (
    <div>
      <div className="w-full">
        <div className="relative mx-auto mt-5 mb-5 max-w-screen-lg overflow-hidden rounded-t-xl py-20 text-center shadow-xl">
          <div className="flex justify-center items-center flex-col">
            <h1 className="mt-2 px-8 text-3xl font-bold text-white">Book an appointment</h1>
            <p className="mt-6 text-lg text-white">Get an appointment with our experts</p>
          </div>
          <img
            className="absolute top-0 left-0 -z-10 h-fit w-full object-cover"
            src="https://img.freepik.com/premium-vector/vector-abstract-3d-square-pattern-geometric-with-blue-gradient-texture-background_178863-758.jpg"
            alt=""
          />
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
          {/* Service Selection */}
          <div>
            <p className="font- text-xl font-bold text-white">Select a service</p>
            <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3">
              {services.map((service) => (
                <div key={service.id} className="relative">
                  <input
                    className="peer hidden"
                    id={`radio_${service.id}`}
                    type="radio"
                    name="service"
                    onChange={() => setSelectedService(service.name)}
                  />
                  <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-green-400"></span>
                  <label
                    className={`flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg rounded-full  peer-checked:bg-orange-600 peer-checked:text-white`}
                    htmlFor={`radio_${service.id}`}
                  >
                    <span className="font-medium">{service.name}</span>
                    <span className="text-xs uppercase">{service.duration}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <p className="mt-8 font- text-xl font-bold text-white">Select a date</p>
            <input
              type="date"
              className="mt-4 block w-56 rounded-lg border border-orange-300 bg-orange-50 p-2.5 pl-10 text-gray-800 outline-none ring-opacity-30 placeholder:text-gray-800 focus:ring focus:ring-orange-300"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Time Slot Selection */}
          <div>
            <p className="mt-8 font- text-xl font-bold text-white">Select a time</p>
            <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`rounded-lg px-4 py-2 font-medium ${selectedTime === time ? 'bg-orange-700 text-white' : 'bg-orange-100 text-gray-900'} active:scale-95`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Address Input */}
          <div>
            <p className="mt-8 text-xl font-bold text-white">Enter your address</p>
            <input
              type="text"
              className="mt-4 block w-full max-w-3xl rounded-lg border border-orange-300 bg-orange-50 p-2.5 text-gray-800 outline-none ring-opacity-30 placeholder:text-gray-800 focus:ring focus:ring-orange-300"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className='flex flex-col items-center justify-center'>
          <button
            className="mt-8 w-[50%] rounded-full border-2 border-green-100 bg-green-600 hover:bg-green-500 px-4 py-4 text-lg font-bold text-white transition hover:translate-y-2"
            onClick={handleSubmit}
          >
            Book Now
          </button>

          {/* Cancel Text */}
          <div className="mt-4  text-center text-red-500 text-md cursor-pointer hover:underline" onClick={() => alert('Booking canceled')}>
            Not Now? Cancel.
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
