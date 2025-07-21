import React from "react";
import Image from "next/image";

const Outcomes = () => {
  return (
    <section className="container mx-auto my-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <div className="flex flex-col items-start w-fit">
          <h3 className="font-[Montserrat] text-dark-blue text-56 lg:text-64 w-fit">
            <span className="relative inline-block w-fit">
              The
              <span className="block md:hidden lg:block h-2 bg-reddish-orange w-full" />
            </span> {" "}
            <span className="inline lg:block">
              Outcome{" "}
              <span className="block h-2 bg-reddish-orange w-full" />
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-y-4 lg:w-4/6">
          <p className=" font-[Montserrat] text-20 text-dark-blue ">
            An authentic film that highlights key moments in the foster carer's
            journey. With a ROI of ...
          </p>
          <p className=" font-[Montserrat] text-20 text-dark-blue">
            Check out our behind the scenes film to see how we pulled it all
            together!
          </p>
        </div>
      </div>
      {/* Image Grid */}
      <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-6 mt-8 md:mt-10 lg:mt-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div
            className="rounded-2xl overflow-hidden flex md:items-end w-full md:w-auto"
            style={{ flexBasis: "60%", minWidth: 0 }}
          >
            <Image
              src="/work/outcome1.png"
              alt="Outcome 1"
              width={800}
              height={400}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover object-center rounded-2xl"
            />
          </div>
          <div
            className="flex md:items-end w-full md:w-auto"
            style={{ flexBasis: "40%", minWidth: 0 }}
          >
            <div className="rounded-2xl overflow-hidden w-full">
              <Image
                src="/work/outcome2.png"
                alt="Outcome 2"
                width={800}
                height={400}
                className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden w-full">
          <Image
            src="/work/outcome3.png"
            alt="Outcome 3"
            width={800}
            height={190}
            className="w-full h-36 sm:h-48 md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
