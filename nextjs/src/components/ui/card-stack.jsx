"use client";;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  const [w,setW] = useState();

  useEffect(() => {
    startFlipping();

    setW(window.innerWidth >= 768 ? "55px" : "35px")

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className="relative  h-full w-full my-10 myfont ">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.id}
            className="absolute darky:bg-black bg-white  h-full w-full rounded-3xl p-4 shadow-xl border border-neutral-200 darky:border-white/[0.1]  shadow-black/[0.1] darky:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              fontWeight:"400"
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>

            <div className="text-2xl md:text-4xl  space-y-2  md:pr-32 md:pl-5 md:px-0 px-5 text-neutral-700 darky:text-neutral-200"
            style={{
              lineHeight: w,
            }}>
              {card.content}
            </div>
            <div>
              <p className="text-black font-medium pl-5 darky:text-white">
                {card.name}
              </p>
              <p className="text-gray-600 font-normal mb-10 pl-5 darky:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};
