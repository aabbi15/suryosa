import Image from "next/image";
import { LandingPageJs } from "../components/landing-page";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
   <>

    <div className="bg-slate-100">


    
   <LandingPageJs/>
   <WhyUs/>

   </div>
   </>
  );
}
