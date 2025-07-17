import React from "react";
import Image from "next/image";

const Outcomes = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-12 px-6 md:px-20">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full">
          <div className="flex-1 min-w-[260px] lg:max-w-[420px] lg:mr-8">
            <h1 className="font-[Montserrat] leading-tight text-4xl md:text-6xl font-bold text-[#1C4062] mb-2 leading-tight">
              <span className="block border-b-6 border-[#ff6b6b] pb-1 mb-2 inline-block w-fit">
                The
              </span>
              <br />
              <span className="block border-b-6 border-[#ff6b6b] pb-1 mb-2 inline-block w-fit">
                Outcome
              </span>
            </h1>
          </div>
          <div className="flex-1 lg:mt-0 mt-2">
            <p className=" font-[Montserrat]  text-[#22305a] leading-tight text-base md:text-lg ">
              An authentic film that highlights key moments in the foster
              carer's journey. With a ROI of ...
              <br />
              <br />
              Check out our behind the scenes film to see how we pulled it all
              together!
              <br />
            </p>
          </div>
        </div>
        {/* Image Grid */}
        <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
          <div className="flex gap-8">
            <div
              className="rounded-2xl overflow-hidden flex md:items-end"
              style={{ flexBasis: "60%", minWidth: 0 }}
            >
              <Image
                src="/work/outcome1.png"
                alt="Outcome 1"
                width={800}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center rounded-2xl"
              />
            </div>
            <div
              className="flex md:items-end"
              style={{ flexBasis: "40%", minWidth: 0 }}
            >
              <div className="rounded-2xl overflow-hidden w-full">
                <Image
                  src="/work/outcome2.png"
                  alt="Outcome 2"
                  width={800}
                  height={400}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/work/outcome3.png"
              alt="Outcome 3"
              width={800}
              height={190}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
