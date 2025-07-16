import Image from "next/image";
import React from "react";

const AboutTidal = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-[Montserrat] text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1C4062] leading-tight">
              About Tidal Film
            </h2>

            <div className=" font-[Montserrat] leading-[100%] tracking-[-0.02em] text-[#1C4062] text-base md:text-xl sm:text-lg leading-relaxed">
              <p>
                At Tidal Film, we're passionate about storytelling that
                connects. Based in sunny Southend-on-Sea, we're a friendly and
                approachable creative video production agency that specialises
                in crafting quality films with feeling. Whether it's a TV
                advert, a promotional video, or a heartfelt charity film, we
                pride ourselves on taking the stress out of production, so you
                can focus on sharing your vision.
              </p>
              <br />
              <p>
                With a no-nonsense approach, we work tirelessly to shape and
                deliver stories that resonate with audiences and inspire action.
                Our team is energetic, creative, and dedicated to bringing your
                ideas to life, no matter how big or small. After all, when
                people feel something, they take action—and that's what great
                storytelling is all about.
              </p>
            </div>

            <div className="pt-4">
              <button
                className="w-[125px] h-[44px] inline-flex items-center justify-center py-3 border-2 border-slate-800 text-slate-800 font-semibold text-sm tracking-wider uppercase hover:bg-slate-800 hover:text-white transition-colors duration-300 rounded-full cursor-pointer"
                aria-label="Let's Talk"
              >
                LET'S TALK
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
      </div>
    </section>
  );
};

export default AboutTidal;
