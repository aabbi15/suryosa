import { ArrowBigRightDash, ArrowUpLeftFromCircle, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { CardStackDemo } from "./ui/mycardstack";

export default function Testimonial() {

    return (

        <div>

            <div className="grid mx-[5%] gap-5  md:grid-cols-7 myfont ">

                <div className="md:col-span-7 relative rounded-xl bg-red-200  h-96 flex flex-col "
                >
                    <div className="w-full h-full bg-no-repeat bg-center rounded-xl"
                        style={{
                            backgroundImage: "url('solar-trees.png')",
                            filter: "brightness(80%)",
                            backgroundSize: "cover",
                            // rotate:"180deg"
                        }} />

                    <div className="absolute flex flex-col gap-5 justify-center items-center h-full w-full px-5 ">
                        <div className="text-6xl font-extrabold myfont text-white ">Welcome to the future</div>
                        <div className="text-3xl font-normal myfont text-white text-center">We are a group of people of people who create solar panel and make your life amazing and make your life amazing and make your life amazing </div>
                        <Button variant="glass" className="mt-10 hover:bg-orange-500 hover:bg-opacity-100 hover:text-white "> <ArrowUpRight className="mr-2  rounded-full" /> Learn More</Button>
                    </div>

                </div>

                <div className="relative flex flex-col col-span-4 rounded-xl bg-cover bg-center "
                    style={{

                    }}>

                    <div className="w-full h-full bg-no-repeat bg-center rounded-xl"
                        style={{
                            backgroundImage: "url('fwdsuryosalogo/5.jpg')",
                            filter: "brightness(80%)",
                            backgroundSize: "cover",
                            // rotate:"180deg"
                        }} />

                    <div className="absolute flex flex-col gap-5 justify-start items-start h-full w-full px-5 py-5">
                        <div className="text-2xl font-extrabold text- myfont text-black w-60">The Best Customer Service In Town.</div>
                        <Button variant="ghost" className="mt-10"> <ArrowUpRight className="mr-2" /> Learn More</Button>
                    </div>

                </div>


                <div className="bgred-500 rounded-xl col-span-3">
                    <CardStackDemo />
                </div>

            </div>
        </div>

    )
}