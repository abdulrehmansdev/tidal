import Image from "next/image";

export default function Brief() {
  return (
    <div className="bg-[#f7f8fa] py-8 px-6 md:px-20 ">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-auto flex items-center justify-center">
            <div>
              <h3 className="font-[Montserrat] text-3xl md:text-6xl font-bold text-[#2d3a4a] ">
                The Brief
              </h3>
              <div className="h-2 w-full bg-[#ff6b6b] mb-4" />
            </div>
            {/* <div className="w-20 h-1 bg-[#ff6b6b] mt-2 mb-6" /> */}
          </div>
          <div className="md:w-2/3 md:pl-8 mt-2 md:mt-4">
            <p className=" font-[Montserrat]  text-[#22305a] leading-tight text-base md:text-lg leading-relaxed">
              We worked with our client Capstone to create a captivating
              narrative for a 30 second TV spot to be shown on ITV, targeting
              our client’s key audience.
              <br></br>
              <br></br>
              The challenge? Creating something that felt like a story in a
              short timeframe and that had the emotional connection and journey
              a potential foster carer might expect.
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
