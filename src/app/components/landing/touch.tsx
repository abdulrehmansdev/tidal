import Image from "next/image";
import { FilledButton, UnFilledButton } from "./button";

export default function Touch() {
  return (
    // <div className="min-h-full bg-[#f6f7fb] flex items-center justify-center px-6 md:px-20 py-10 md:py-20 ">
    <div className="w-full container-standard">
      <div className="bg-[#287F8C] rounded-2xl flex flex-col md:flex-row w-full overflow-hidden shadow-lg">
        {/* Left: Text Content */}
        <div className="flex-1 p-6 md:p-12 gap-y-4 flex flex-col justify-center">
          <h1 className="text-waves text-white">
            Let’s Make Waves,
            <br className="hidden sm:block" />
            <span className="block">Not Ripples!</span>
          </h1>
          <div>
            <p className=" text-[#BDD5EA] text-stories mb-8 ">
              Great stories don’t just blend in—they stand out and make an
              impact. We’re here to help you create films that move people,
              spark conversations, and leave a lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <FilledButton
                text="Get in touch"
                className="w-[170px]"
                ariaLabel="Get in touch"
              />
              <UnFilledButton
                text="Book a meeting"
                className="w-[200px]"
                ariaLabel="Book a meeting"
              />
              {/* <button
              className="w-[154px] h-[44px] bg-[#ff6b5b] text-sm text-white px-6 py-2 rounded-full font-semibold text-base shadow hover:bg-[#ff4a36] transition cursor-pointer"
              aria-label="Get in touch"
            >
              GET IN TOUCH
            </button> */}
              {/* <button
              className="w-[180px] h-[44px] text-sm border border-white text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-white hover:text-[#2b8a94] transition cursor-pointer"
              aria-label="Book a meeting"
            >
              BOOK A MEETING
            </button> */}
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <video
            src="/camera.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full absolute top-0 left-0"
            style={{ objectFit: "cover" }}
            aria-label="Camera team working"
          />
        </div>
      </div>
    </div>
  );
}
