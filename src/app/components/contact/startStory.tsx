import Image from "next/image";
import React from "react";

const StartStory = () => {
  return (
    <section className="bg-[#f7f8fa] py-16 px-6 md:px-20">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-[montserrat] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1C4062] leading-tight whitespace-pre-line">
              Start Your
              <br />
              Story With
              <br />
              Us
            </h2>
            <p className="font-[montserrat] text-[#1C4062] text-lg md:text-xl leading-relaxed">
              If you're looking to tell your story, create meaningful content,
              or bring your ideas to life through video, we'd love to hear from
              you. Let's start a conversation about how we can work together to
              create something extraordinary.
            </p>
            <div className="pt-2">
              <button
                className="inline-flex items-center px-7 py-3 border-2 border-[#1C4062] text-[#1C4062] font-bold text-base tracking-wide rounded-full hover:bg-[#23456a] hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Let's Talk"
              >
                LET'S TALK
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <video
                src="/about/camera.mp4"
                autoPlay
                loop
                muted
                playsInline
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                style={{ borderRadius: "inherit" }}
                aria-label="Tidal Film crew working with professional camera equipment during a video production"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartStory;
