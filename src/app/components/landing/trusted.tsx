import Image from "next/image";
import { FilledButton } from "./button";

export default function Trusted() {
  return (
    // <section className="relative w-full overflow-hidden min-h-[450px] md:min-h-[600px] flex items-center justify-center">
    //   {/* Background image */}
    //   <Image
    //     src="/public2/wave.svg"
    //     alt="Background"
    //     fill
    //     className="object-cover object-top z-0 opacity-70"
    //     priority
    //   />
    //   {/* Overlay for darkening */}
    //   {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2C]/80 to-[#0B1C2C]/95 z-10" /> */}

    //   {/* Content */}
    //   <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full  mx-auto px-6 md:px-20 py-16 md:py-24">
    //     {/* Left: Text */}
    //     <div className="w-full md:w-1/2 flex flex-col items-start text-white">
    //       <h2 className="text-trusted mb-6">
    //         Trusted By Brands,
    //         <br />
    //         Made For People
    //       </h2>
    //       <p className=" mb-8 text-trust max-w-lg">
    //         We’ve worked with companies across the UK — but it’s the individuals
    //         behind the brands that matter most. Every video we create is a
    //         collaboration, crafted to connect with real people and spark real
    //         impact.
    //       </p>
    //       <FilledButton text="View all work" className="w-[190px]" ariaLabel="View all work" />
    //     </div>
    //     {/* Right: Logos */}
    //     <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
    //       <div className="relative w-[340px] h-[220px] sm:w-[420px] sm:h-[270px] md:w-[600px] md:h-[420px]">
    //         <Image
    //           src="/public2/logos.svg"
    //           alt="Brand Logos"
    //           fill
    //           className="object-contain"
    //           priority
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      className="w-full h-5/6 bg-cover bg-center bg-no-repeat mt-10"
      style={{ backgroundImage: "url('/public2/wave.svg')" }}
    >
      <div className="container flex flex-col xl:flex-row justify-between xl:items-center w-full py-24 gap-y-14">
        {/* Left Content */}
        <div className="xl:w-2/4 flex flex-col gap-y-6">
          <h3 className="text-56 text-offWhite pb-6 lg:py-0">
          Trusted By Brands, Made For People
          </h3>
          <p className="text-20 text-offWhite">
          We’ve worked with companies across the UK — but it’s the individuals
            behind the brands that matter most. Every video we create is a
            collaboration, crafted to connect with real people and spark real
             impact.
          </p>

          <button
            className="btn-secondary cursor-pointer w-44 uppercase mt-3"
            aria-label="view all services"
          >
            View All Work
          </button>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative w-[340px] h-[220px] sm:w-[420px] sm:h-[270px] md:w-[600px] md:h-[420px]">
            <Image
              src="/public2/logos.svg"
              alt="Brand Logos"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
