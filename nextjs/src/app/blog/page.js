import MyDivider from "@/components/divider";
import { LandingPageJs } from "@/components/landing-page";
import BlogCard from "@/components/ui/blog-card";

export default function Page() {
  return (
    <>
      <div className="bg-slate-200">
        <LandingPageJs />
        
        <MyDivider/>

        <BlogCard/>
      </div>
    </>
  );
}