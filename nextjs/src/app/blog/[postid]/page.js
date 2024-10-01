'use client'


import Bloggy  from "@/components/blog-post";
import MyNavbar from "@/components/ui/navbar";

export default function App() {
    return (
        <>
        <div className="bg-gray-200">
            <MyNavbar/>
            
            <div className="pt-40">

           <Bloggy/>
            </div>
    
            
        </div>
        </>
    );
    }