"use client";
import Image from "next/image";
import { FilledButton } from "./button";

const Hero = () => {
  return (
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-col-2">
          <h1 className="text-76 mb-6 md:mb-0 text-primary">
            A Different Kind Of Video Production Agency
          </h1>

          <div className="flex gap-4 justify-center md:justify-end ">
            <FilledButton text="Watch Showreel" className="w-[212px]" ariaLabel='Watch Showreel'/>
            <button
              className="w-[135px] h-[44px] border font-semibold border-[#1C4062] px-4 py-2 md:px-6 md:py-3 hover:bg-[#d84037] hover:border-[#d84037] hover:text-white rounded-full text-xs md:text-sm text-[#1C4062] cursor-pointer transition-all duration-100"
              aria-label="Let’s Talk"
            >
              LET`S TALK
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 rounded-[30px] overflow-hidden">
          <video
            src="/public2/showreel.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-[30px] w-full h-auto"
            poster="/showreel-poster.jpg"
          />
        </div>
      </div>
  );
};

export default Hero;
