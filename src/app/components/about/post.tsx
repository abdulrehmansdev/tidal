import Image from "next/image";

export default function PostProduction() {
  return (
      <div className=" container mx-auto mt-20">


        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="flex flex-col items-start w-fit">
            <h3 className="font-[Montserrat] text-dark-blue text-56 lg:text-64">
              <span>Post-</span>
              <div className=" h-2 w-40 bg-reddish-orange" />
              <span className="inline lg:block">Production</span>
            </h3>
            <div className="h-2 w-full bg-reddish-orange" />
          </div>
          <p className=" font-[Montserrat] text-20 text-dark-blue lg:w-4/6">
          The final stage is where everything comes together. Editing is the
              secret to impactful content—it's about structure, story, sound
              design, and perfecting the final grade. We keep you involved every
              step of the way with regular updates and review points, ensuring
              the finished product exceeds your expectations.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 md:m-10 lg:mt-20">
          {/* First row: 1st and 2nd images, 1st is larger */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 rounded-2xl border-2 overflow-hidden mb-4 md:mb-0">
              <Image
                src="/about/creative/post1.png"
                alt="Woman in field"
                width={600}
                height={400}
                className="w-full h-40 sm:h-48 md:h-80 lg:h-96 object-cover object-center"
                priority
              />
            </div>
            <div className="flex w-full md:w-auto md:items-end">
              <div className="rounded-2xl border-2 overflow-hidden w-full md:w-auto">
                <Image
                  src="/about/creative/post2.png"
                  alt="Coffee cup"
                  width={600}
                  height={400}
                  className="w-full h-32 sm:h-40 md:h-56 lg:h-64 object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Second row: 3rd and 4th images, 4th is larger */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex w-full md:w-auto md:items-start mb-4 md:mb-0">
              <div className="rounded-2xl border-2 overflow-hidden w-full md:w-auto">
                <Image
                  src="/about/creative/post3.png"
                  alt="Surfer"
                  width={600}
                  height={400}
                  className="w-full h-32 sm:h-40 md:h-56 lg:h-64 object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 rounded-2xl border-2 overflow-hidden">
              <Image
                src="/about/creative/post4.png"
                alt="City street"
                width={600}
                height={400}
                className="w-full h-40 sm:h-48 md:h-80 lg:h-96 object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
  );
}
