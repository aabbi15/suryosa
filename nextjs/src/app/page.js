import Image from "next/image";
import { LandingPageJs } from "../components/landing-page";
import WhyUs from "@/components/why-us";
import Solar3D from "@/components/solar3d";
import MyDivider from "@/components/divider";
import Calculator from "@/components/calculator";
import { SolarCalculatorComponent } from "@/components/solar-calculator";
import { CareersPageComponent } from "@/components/careers-page";
import MyMarquee from "@/components/marquee";
import Marquee from "@/components/ui/marquee";
import Testimonial from "@/components/testimonials";
import MyVideo from "@/components/myvideo";
import { FloatingSidebarComponent } from "@/components/floating-sidebar";
import { ContactFormComponent } from "@/components/contact-form";
import { ComparisonSectionComponent } from "@/components/comparison-section";
import { AnimatedStatsCardJs } from "@/components/animated-stats-card";
import FocusText from "@/components/focus-text";
import TestimonialSlider from "@/components/testimonial-slider";
import { Star } from "lucide-react";
import StarRating from "@/components/ui/star-rating";
import MountainSection from "@/components/focus-text";
import MyFooter from "@/components/footer";

export default function Home() {
  return (
   <>

    <div className="bg-gray-200 myfont">


    {/* <FloatingSidebarComponent/> */}
    <ContactFormComponent/>
   <LandingPageJs/>
   {/* <MyDivider/>
   <WhyUs/> */}

   <MyDivider/>
   <MyMarquee/>


   <MyDivider/>
   <Solar3D/>

   <MyDivider/>
   <Testimonial/>

   <MyDivider/>

   <SolarCalculatorComponent/>

   <MyDivider/>

   <MyVideo/>
   <MyDivider/>

   <ComparisonSectionComponent/>
   <MyDivider/>

   <AnimatedStatsCardJs/>
   <MyDivider/>

   {/* <FocusText/> */}

   <TestimonialSlider/>
  
   <MyDivider/>

  <MyFooter/>


   </div>
   </>
  );
}
