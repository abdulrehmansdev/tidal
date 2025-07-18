import Image from "next/image";

export default function PostProduction() {
  return (
    <div className="bg-[#f7f8fa] py-8 px-6 md:px-20 ">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="md:w-auto">
            <h1 className="font-[Montserrat] text-4xl md:text-6xl font-bold text-[#22305a] leading-tight">
              <span>Post-</span>
              <div className="w-40 h-2 bg-[#ff6b6b]  " />
              <br className="md:hidden" />

              <span>Production</span>
              <div className="w-full h-2 bg-[#ff6b6b] " />
            </h1>
            {/* <div className="w-20 h-1 bg-[#ff6b6b] mt-2 mb-6" /> */}
          </div>
          <div className="md:w-2/3 md:pl-8 mt-2 md:mt-4">
            <p className=" font-[Montserrat]  text-[#22305a] leading-tight text-base md:text-lg leading-relaxed">
              The final stage is where everything comes together. Editing is the
              secret to impactful content—it's about structure, story, sound
              design, and perfecting the final grade. We keep you involved every
              step of the way with regular updates and review points, ensuring
              the finished product exceeds your expectations.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-6 md:mt-20">
          {/* First row: 1st and 2nd images, 1st is larger */}
          <div className="flex gap-6">
            <div className="flex-1 rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
              <Image
                src="/about/creative/post1.png"
                alt="Woman in field"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                priority
              />
            </div>
            <div className="  flex  md:items-end">
              <div className=" rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                <Image
                  src="/about/creative/post2.png"
                  alt="Coffee cup"
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Second row: 3rd and 4th images, 4th is larger */}
          <div className="flex gap-6">
            <div className="  flex  md:items-start">
              <div className="rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                <Image
                  src="/about/creative/post3.png"
                  alt="Surfer"
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
              <Image
                src="/about/creative/post4.png"
                alt="City street"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
