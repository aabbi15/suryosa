import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function MyVideo() {
  return (
    <div className="h-full w-full">
      <div className="grid mx-[5%] gap-5 h-[500px] w-full md:grid-cols-7 myfont">
        <div className="col-span-4 relative">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            loop
            autoPlay
            muted
          >
            <source src="fwdsuryosalogo/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center px-5">
            <div className="text-5xl font-extrabold myfont text-white bg-white bg-opacity-15">
              Get a handbook delivered to your door
            </div>
            <div className="text-2xl font-normal myfont text-white text-center">
              Suryosa offers free hanbooks for you to learn more about solar panel and how it can help you
            </div>
            <Button
              variant="glass"
              className="mt-10 hover:bg-orange-500 hover:bg-opacity-100 hover:text-white"
            >
              <ArrowUpRight className="mr-2 rounded-full" /> Get it now
            </Button>
          </div>
        </div>

        {/* Additional Content */}
        <div className="flex flex-col col-span-3 rounded-xl bg-cover bg-center">
          hi
        </div>
      </div>
    </div>
  );
}
