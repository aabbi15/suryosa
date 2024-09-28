import Image from "next/image";
import { LandingPageJs } from "../components/landing-page";
import WhyUs from "@/components/why-us";
import Solar3D from "@/components/solar3d";
import MyDivider from "@/components/divider";

export default function Home() {
  return (
   <>

    <div className="bg-slate-100">


    
   <LandingPageJs/>
   <WhyUs/>

   <MyDivider/>
   
   <Solar3D/>

   </div>
   </>
  );
}
