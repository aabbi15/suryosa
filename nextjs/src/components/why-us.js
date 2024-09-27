'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CollapseCard from './ui/collapse-card';
import Image from 'next/image';

const cards = [
    { num:'3', title: 'Card 1', description: 'Description for Card 1' },
    { num:'2' ,title: 'Card 2', description: 'Description for Card 2' },
    { num:'3' , title: 'Card 3', description: 'Description for Card 3' },
    { num:'2' , title: 'Card 4', description: 'Description for Card 4' },
    
  ];

export default function WhyUs() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 800) {  // Change this value to adjust when the navbar changes
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll);
    }, [])


  const [activeCard, setActiveCard] = useState(0); // Tracks which card is active
  const [timer, setTimer] = useState(0); // State to track the reset of the timer
  const [activeImage, setActiveImage] = useState("url('/eg2.jpg')");
 

  // Function to set the active card and reset the timer
  const handleCardClick = (index) => {
    setActiveCard(index);
    setTimer((prev) => prev + 1); // Reset timer by incrementing the state
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length); // Move to the next card
      
      
    }, 5000); 

    
    return () => clearInterval(interval);
  }, [timer]); 

  useEffect(() => {
    const num = cards[activeCard].num;
    setActiveImage(`url('/eg${num}.jpg')`);
  }, [activeCard]); 




  return (
    <div className="flex items-center justify-center ">


      <div className="  rounded-[20px] bg-contain shadow-lg py-10 w-[100%]  overflow-hidden bgblue-200"

        style={{
            // backgroundImage: `url('/bg3.jpg')`,
            paddingLeft: '5%',
        }}
      >
        <h1 className="text-2xl md:text-3xl font-bold  text-black text-left">Why Us?</h1>

        <div className='grid grid-cols-2 min-h-[600px] bgred-200'>

            <div className="flex flex-col w-full justify-center items-start gap-10">

          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex justify-start items-start transition-all duration-700 ease-in-out ${
                activeCard === index ? 'max-h-96' : 'max-h-20'
              } overflow-hidden relative w-full`}
              onClick={() => handleCardClick(index)}
            >
              <CollapseCard
                title={card.title}
                description={card.description}
                isActive={activeCard === index}
              />

            
            </div>
          ))}
        </div>

        
        {/* <div className='w-full h-full'> */}

        <div className='rounded-l-[10px] transition-all duration-500 ease-in-out overflow-hidden flex items-center justify-center bg-cover  bg-center my-[10px]'
            style={{
                backgroundImage: `${activeImage}`,
                marginRight: ` ${!isScrolled ? "10%" : "0"}`,
                borderTopRightRadius: `${!isScrolled ? "10px" : "0"}`,
                borderBottomRightRadius: `${!isScrolled ? "10px" : "0"}`,
                
            }}
        >
               
            </div>
        {/* </div> */}
        

        </div>
       
      </div>
    </div>
  );
}
