import Image from "next/image";
import { FilledButton, UnFilledButton } from "./button";

export default function Touch() {
  return (
    <div className="container mx-auto my-16">
      <div className="bg-teal rounded-2xl flex flex-col lg:flex-row w-full overflow-hidden shadow-lg">
        {/* Left: Text Content */}
        <div className="flex-1 p-6 md:p-12 gap-y-4 flex flex-col justify-center">
          <h1 className="text-56 xl:text-64 text-offWhite">
            Let’s Make Waves, Not Ripples
            
          </h1>
          <div>
            <p className=" text-pale-blue text-20 mb-8 ">
              Great stories don’t just blend in—they stand out and make an
              impact. We’re here to help you create films that move people,
              spark conversations, and leave a lasting impression.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-5">
            <button
              className="btn-secondary cursor-pointer w-full md:w-44 uppercase"
              aria-label="Get in touch"
            >
             Get in touch
            </button>

            <UnFilledButton
              text="Book a meeting"
              className="md:w-[200px] w-full"
              ariaLabel="Book a meeting"
            />
          </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 relative min-h-[300px]">
          <video
            src="/public2/camera.mp4"
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
