import { FaqSection } from "@/components/faq-section";
import MyNavbar from "@/components/ui/navbar";

export default function Page() {
    return (
        <div className="faqbg  shadow-xl">

            <MyNavbar/>

            <div className="faqbg  min-h-screen pt-20">
                <FaqSection/>
                </div>
        </div>
    );
    }
