'use client'

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

// import "./mystyles.css"

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";



  function Item() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });
  
    return (
      <section>
        <div ref={ref}>
          <figure className="progress">
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </figure>
        </div>
      </section>
    );
  }

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const images = [
  {
    name: "sponsor1",
    src: "partner/1.svg"
  },
  {
    name: "sponsor2",
    src: "partner/2.svg"
  },
  {
    name: "sponsor3",
    src: "partner/3.svg"
  },
  {
    name: "sponsor4",
    src: "partner/4.svg"
  },
  {
    name: "sponsor5",
    src: "partner/5.svg"
  },
  {
    name: "sponsor6",
    src: "partner/6.svg"
  },
]


const SponsorLogo = ({
  name, src
}) => {
  return (
    <div>
      <Image src={src} width={300} height={200} alt={name} />
    </div>
  );
};

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MyMarquee2() {
  return (
    <div>

      <div>
        <div className="text-3xl font-bold text-center text-gray-900 mb-6 title_underline">Our Partners</div>
      </div>


      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden   ">

     

        <Marquee pauseOnHover className="[--duration:20s]">
          {images.map((obj) => (
            <SponsorLogo key={obj.name} {...obj} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-gray-50 "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-gray-50 "></div>
      </div>

    </div>
  );
}

