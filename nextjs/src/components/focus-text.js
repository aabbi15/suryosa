'use client'



import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set the opacity of the hidden paragraph to 1
    gsap.set(".hidden", { opacity: 1 });

    const spans = gsap.utils.toArray("p.hidden span");

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".hidden",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        markers: true,
      },
    });

    spans.forEach((span, i) => {
      const next = spans[i + 1];
      tl.to(span, { opacity: 1 });
      if (next) {
        tl.to(span, { opacity: 0 }).to(next, { opacity: 1 }, "<");
      }
    });
  }, []);

  return (
    <>
      <section className="h-screen"></section>
      <section id="textSection">
        <div className="container mx-auto flex items-center h-screen max-w-[800px] px-4">
          <div className="relative w-full">
            <p className="absolute w-full text-gray-500 text-4xl">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <span>Perferendis consectetur voluptatem quae ea similique adipisci reprehenderit vero voluptatum, debitis exercitationem</span>
              <span>nisi ad mollitia? Molestias veniam sint quisquam ea et dolorum nesciunt rem</span>
              <span>saepe id, amet vero, necessitatibus esse reiciendis molestiae.</span>
            </p>
            <p className="absolute w-full text-4xl text-white hidden opacity-0">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <span>Perferendis consectetur voluptatem quae ea similique adipisci reprehenderit vero voluptatum, debitis exercitationem</span>
              <span>nisi ad mollitia? Molestias veniam sint quisquam ea et dolorum nesciunt rem</span>
              <span>saepe id, amet vero, necessitatibus esse reiciendis molestiae.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </>
  );
}
