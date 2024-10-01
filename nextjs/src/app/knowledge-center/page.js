import { FaqSection } from "@/components/faq-section";
import MyNavbar from "@/components/ui/navbar";

export default function Page() {
    return (
        <div className=" bg-gray-200 shadow-xl">

            <MyNavbar/>

            <div className="  min-h-screen pt-20">
            <div className="text-3xl mb-4 font-semibold myfont text-center my-4 text-orange-500">FAQ</div>
            <div className="text-6xl mb-4 font-bold myfont text-center my-4">Frequently Asked Questions</div>
            <div className="text-xl mb-10 font-normal myfont text-center my-4 text-gray-700">Have questions? we're here to help.</div>

                <FaqSection/>
                </div>
        </div>
    );
    }
