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

export default function Home() {
  return (
   <>

    <div className="bg-slate-200">


    
   <LandingPageJs/>
   <MyDivider/>
   <WhyUs/>

   <MyDivider/>
   
   <Solar3D/>

   <MyDivider/>

   <SolarCalculatorComponent/>
   <MyDivider/>
   <MyMarquee/>
   <MyDivider/>
   <CareersPageComponent/>
   <MyDivider/>

   </div>
   </>
  );
}
