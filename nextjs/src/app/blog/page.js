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
      <div className="text-3xl mb-4 font-semibold myfont text-center my-4 text-orange-500">Blog</div>
            <div className="text-6xl mb-4 font-bold myfont text-center my-4">Latest Blogs</div>
            <div className="text-xl mb-4 font-normal myfont text-center my-5 text-gray-700">Stay updated with the latest news in the solar tech</div>
    <MyDivider/>
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