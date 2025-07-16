import Image from "next/image";

export default function Creative() {
  return (
    <section className="bg-[#f6f7fc]  py-10 px-6 md:px-20">
      <div className="mx-auto">
        <h2 className="font-[Montserrat] text-4xl md:text-6xl font-bold text-[#2d3a4a] mt-4 mb-16">
          Our Creative Process
        </h2>
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h3 className="font-[Montserrat] text-3xl md:text-6xl font-bold text-[#2d3a4a] mb-2">
              An Idea
            </h3>
            <div className="h-2 w-full bg-[#ff6b6b] mb-4" />
          </div>
          <p className=" font-[Montserrat] leading-tight tracking-[-0.02em] md:w-2/3 text-[#2d3a4a] text-base md:text-xl font-normal leading-relaxed mb-8 md:mb-0">
            Every project begins with a spark—your idea. Whether big or small,
            it’s the foundation of your creative journey. At Tidal Film, we take
            the time to understand your organisation, your goals, and the story
            you want to tell. Collaboration is key, and we’re here to guide you
            through the process from the very start.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-20">
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
    </section>
  );
}
