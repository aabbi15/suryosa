import Image from "next/image";
// import { LandingPageJs } from "../components/landing-page";

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
import { CommercialPAgeJs } from "@/components/commercial-page";
import { HousingSocietyPageJs } from "@/components/housing-society-page";

export default function Home() {
  return (
   <>

    <div className="bg-slate-200">


    
   {/* <LandingPageJs/>
    */}

    <HousingSocietyPageJs/>
   <MyDivider/>
   <WhyUs/>

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


   </div>
   </>
  );
}
