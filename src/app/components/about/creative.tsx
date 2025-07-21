import Image from "next/image";

export default function Creative() {
  return (
    <div className="container mx-auto mt-20">
      <h2 className="font-[Montserrat] text-56 text-dark-blue mb-10">
        Our Creative Process
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div className="flex flex-col items-start w-fit">
          <h3 className="font-[Montserrat] text-dark-blue text-56 lg:text-64">
            An Idea
          </h3>
          <div className="h-2 w-full bg-reddish-orange" />
        </div>
        <p className=" font-[Montserrat] text-20 text-dark-blue lg:w-4/6">
          Every project begins with a spark—your idea. Whether big or small,
          it’s the foundation of your creative journey. At Tidal Film, we take
          the time to understand your organisation, your goals, and the story
          you want to tell. Collaboration is key, and we’re here to guide you
          through the process from the very start.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-10 lg:mt-20">
        <div className="md:w-2/3 w-full rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/about/creative/idea1.png"
            alt="Street artist drawing with chalks"
            width={800}
            height={400}
            className="object-cover w-full h-64 md:h-96"
            priority
          />
        </div>
        <div className="md:w-1/3 w-full flex items-end md:items-end">
          <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#e3e6ee] w-full">
            <Image
              src="/about/creative/idea2.png"
              alt="Nurse in hospital corridor"
              width={400}
              height={200}
              className="object-cover w-full h-64 md:h-64"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
