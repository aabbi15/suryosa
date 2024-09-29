import { FaqSection } from "@/components/faq-section";
import MyNavbar from "@/components/ui/navbar";

export default function Page() {
    return (
        <div>

            <MyNavbar/>

            <div className="bg-slate-200 min-h-screen pt-20">
                <FaqSection/>
                </div>
        </div>
    );
    }
