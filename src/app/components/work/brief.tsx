import Image from "next/image";

export default function Brief() {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div className="flex flex-col items-start w-fit">
          {/* <h3 className="font-[Montserrat] text-dark-blue text-56 lg:text-64">
            The Brief
          </h3> */}
          <h3 className="font-[Montserrat] text-dark-blue text-56 lg:text-64 w-fit">
            <span className="relative inline-block w-fit">
            The 
              <span className=" md:hidden lg:block  h-2 bg-reddish-orange w-full" />
            </span>{" "}
            <span className="inline lg:block">
            Brief{" "}
              <span className="block h-2 bg-reddish-orange w-full" />
            </span>
          </h3>
         
        </div>
        <div className="flex flex-col gap-y-4 lg:w-4/6">
          <p className=" font-[Montserrat] text-20 text-dark-blue ">
            We worked with our client Capstone to create a captivating narrative
            for a 30 second TV spot to be shown on ITV, targeting our client’s
            key audience.
          </p>
          <p className=" font-[Montserrat] text-20 text-dark-blue">
            The challenge? Creating something that felt like a story in a short
            timeframe and that had the emotional connection and journey a
            potential foster carer might expect.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-6 md:mt-20">
        {/* First row: 1st and 2nd images, 1st is larger */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:flex-1 rounded-2xl overflow-hidden mb-4 md:mb-0">
            <Image
              src="/about/creative/post2.png"
              alt="Woman in field"
              width={600}
              height={400}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover object-center"
              priority
            />
          </div>
          <div className="w-full md:w-auto flex md:items-end">
            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src="/about/creative/post3.png"
                alt="Coffee cup"
                width={600}
                height={400}
                className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
        {/* Second row: 3rd and 4th images, 4th is larger */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-auto flex md:items-start mb-4 md:mb-0">
            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src="/about/creative/post4.png"
                alt="Surfer"
                width={600}
                height={400}
                className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="w-full md:flex-1 rounded-2xl overflow-hidden">
            <Image
              src="/about/creative/post1.png"
              alt="City street"
              width={600}
              height={400}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
