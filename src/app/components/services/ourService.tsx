import React from "react";

export default function OurServices() {
  return (
    <section className="container mx-auto py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-[Montserrat] text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1C4062] leading-tight">
              Our Services
            </h2>

            <div className=" font-[Montserrat] leading-[100%] tracking-[-0.02em] text-[#1C4062] text-base md:text-xl sm:text-lg leading-relaxed">
              <p>
                Every project begins with a spark—your idea. Whether big or
                small, // it's the foundation of your creative journey. At Tidal
                Film, we take // the time to understand your organisation, your
                goals, and the story // you want to tell. Collaboration is key,
                and we’re here to guide you // through the process from the very
                start.
              </p>
            </div>

            <div className="pt-4">
              <button
                className="w-[198px] h-[44px] inline-flex items-center justify-center py-3 border-2 border-slate-800 text-slate-800 font-semibold text-sm tracking-wider uppercase hover:bg-slate-800 hover:text-white transition-colors duration-300 rounded-full cursor-pointer"
                aria-label="Let's Talk"
              >
                View All Services
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-4xl shadow-2xl">
              <video
                src="/about/camera.mp4"
                autoPlay
                loop
                muted
                playsInline
                width={650}
                height={450}
                className="w-full h-auto object-cover"
                style={{ borderRadius: "inherit" }}
                aria-label="Tidal Film crew working with professional camera equipment during a video production"
              />
            </div>
          </div>
        </div>
    </section>
  );
}
