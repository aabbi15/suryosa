import { CareersPageComponent } from "@/components/careers-page";
import MyDivider from "@/components/divider";
import MyNavbar from "@/components/ui/navbar";

export default function Page() {
    return (
        <>
        <div className="">
            <MyNavbar/>
            
            <div className="mt-40">

            <CareersPageComponent/>
            </div>
    
            
        </div>
        </>
    );
    }