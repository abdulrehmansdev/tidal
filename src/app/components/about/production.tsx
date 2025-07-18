import Image from "next/image";

export default function Production() {
  return (
    <div className="container mx-auto mt-20">
      <div className="w-full  mx-auto">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h3 className="font-[Montserrat] text-3xl md:text-6xl font-bold text-[#2d3a4a] mb-2">
              Production
            </h3>
            <div className="h-2 w-full bg-[#ff6b6b] mb-4" />
          </div>
          <p className=" font-[Montserrat] leading-tight tracking-[-0.02em] md:w-2/3 text-[#2d3a4a] text-base md:text-xl font-normal leading-relaxed mb-8 md:mb-0">
            This is where your project takes shape. Filming is the most hands-on
            and exciting phase of production, where shared ideas and plans come
            to life. Using state-of-the-art equipment and our team’s expertise,
            we craft visuals that inspire and engage.
          </p>
        </div>

        {/* <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full">
          <div className="flex-1 min-w-[260px] lg:max-w-[420px] lg:mr-8">
            <h1 className="font-[Montserrat] text-4xl md:text-6xl font-bold text-[#22305a] mb-2">
              Production
            </h1>
            <div className="w-full h-2 bg-[#ff6b6b] mb-6" />
          </div>
          <div className="flex-1 lg:mt-0 mt-2">
            <p className="text-[#22305a] text-base md:text-lg leading-relaxed ">
              This is where your project takes shape. Filming is the most
              hands-on and exciting phase of production, where shared ideas and
              plans come to life. Using state-of-the-art equipment and our
              team’s expertise, we craft visuals that inspire and engage.
            </p>
          </div>
        </div> */}
        <div className="mt-15 flex justify-center w-full">
          <div
            className="w-full rounded-2xl overflow-hidden shadow-md"
            style={{ maxHeight: "70vh" }}
          >
            <Image
              src="/about/creative/production.png"
              alt="Production filming crew"
              width={1920}
              height={1080}
              className="w-full h-[50vw] max-h-[70vh] object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
