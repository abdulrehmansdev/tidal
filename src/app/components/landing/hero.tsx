"use client";
import Image from "next/image";
import { FilledButton } from "./button";

const Hero = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-y-3 items-center md:items-end">
        <h1 className="text-56 xl:text-76 text-dark-blue">
          A Different Kind Of Video Production Agency
        </h1>

        <div className="flex gap-x-4 justify-center md:justify-end">
          <button
            className="btn-secondary cursor-pointer w-44 uppercase"
            aria-label="watch showreel"
          >
            Watch Showreel
          </button>
          <button
            className="btn-primary cursor-pointer w-32"
            aria-label="Let’s Talk"
          >
            LET`S TALK
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-10 rounded-[30px] overflow-hidden">
        <video
          src="/showreel.mp4"
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
