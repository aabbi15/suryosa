import MyDivider from "@/components/divider";
import { LandingPageJs } from "@/components/landing-page";
import BlogCard from "@/components/ui/blog-card";
import MyNavbar from "@/components/ui/navbar";

export default function Page() {
  return (
    <>
      <div className="bg-slate-200">
        {/* <LandingPageJs /> */}
        
        {/* <MyDivider/> */}
        <MyNavbar/>

      <div className="pt-20 bg-gray-200">
      <BlogCard/>
        <BlogCard/>
        <BlogCard/> 
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>

      </div>
        
      </div>
    </>
  );
}