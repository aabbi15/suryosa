import { CareersPageComponent } from "@/components/careers-page";
import MyDivider from "@/components/divider";
import { OurTeamComponent } from "@/components/our-team";
import MyNavbar from "@/components/ui/navbar";

export default function Page() {
    return (
        <>
        <div className="bg-slate-200 ">
            <MyNavbar/>
            
            {/* <MyDivider/> */}
            
    
            <OurTeamComponent/>
        </div>
        </>
    );
    }