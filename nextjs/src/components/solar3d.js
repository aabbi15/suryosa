import { SolarBenefitsComponent } from "./solar-benefits";
import Card3D from "./ui/3d-card";

export default function Solar3D() {
    return(
        <div className=" rounded-[20px] bg1 bgslate-900 mx-[5%] shadow-lg py-10">
        
        <div className="grid grid-cols-2">
            <div className="flex pl-[40px] flex-col items-center justify-center">
                <h1 className="text-2xl md:text-5xl mb-10 font-bold  text-white title_underline self-start">Why Solar?</h1>
                <SolarBenefitsComponent/>
            </div>
            <div className="flex items-center justify-center">
            <Card3D/>
            </div>
        </div>
        
        </div>
    )

}