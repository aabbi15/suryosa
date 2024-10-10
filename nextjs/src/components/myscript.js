import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";




const splitText = new SplitText(".paragraph2 p", {
    type: "lines",
    linesClass: "line2"
  });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      // pinSpacing: false, // You almost always want pinSpacing: true
      trigger: ".actual-section",
      scrub: 1,
      start: "top top",
      end: "bottom top",
      pin: ".background2",
      markers: true
    }
  });
  tl.to(".line2", {
    "--highlight-offset": "100%",
    stagger: 0.5
  });