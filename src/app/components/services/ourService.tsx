// import Image from "next/image";
// import React from "react";

// const OurServices = () => {
//     return (
//         <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//                     {/* Text Content */}
//                     <div className="space-y-6">
//                         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
//                             Our Services
//                         </h2>

//                         <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
//                             <p>
//                                 Every project begins with a spark—your idea. Whether big or small,
//                                 it's the foundation of your creative journey. At Tidal Film, we take
//                                 the time to understand your organisation, your goals, and the story
//                                 you want to tell. Collaboration is key, and we’re here to guide you
//                                 through the process from the very start.
//                             </p>
//                         </div>

//                         <div className="pt-4">
//                             <button
//                                 className="inline-flex items-center px-6 py-3 border-2 border-slate-800 text-slate-800 font-semibold text-sm tracking-wider uppercase hover:bg-slate-800 hover:text-white transition-colors duration-300 rounded-full cursor-pointer"
//                                 aria-label="View All Services"
//                             >
//                                View All Services
//                             </button>
//                         </div>
//                     </div>

//                     {/* Image */}
//                     <div className="relative">
//                         <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//                             <Image
//                                 src="about/camera2.svg"
//                                 alt="Tidal Film crew working with professional camera equipment during a video production"
//                                 width={600}
//                                 height={400}
//                                 className="w-full h-auto object-cover"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurServices;
import Image from "next/image";
import React from "react";

export default function OurServices() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className=" mx-auto">
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
      </div>
    </section>
  );
}
