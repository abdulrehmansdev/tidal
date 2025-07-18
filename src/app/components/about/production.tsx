import Image from "next/image";

export default function Production() {
  return (
    <div className="container mx-auto mt-20">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="flex flex-col items-start w-fit">
            <h3 className="font-[Montserrat] text-dark-blue text-56 lg:text-64">
              Production
            </h3>
            <div className="h-2 w-full bg-reddish-orange" />
          </div>
          <p className=" font-[Montserrat] text-20 text-dark-blue lg:w-4/6">
            This is where your project takes shape. Filming is the most hands-on
            and exciting phase of production, where shared ideas and plans come
            to life. Using state-of-the-art equipment and our team’s expertise,
            we craft visuals that inspire and engage.
          </p>
        </div>
          <div
            className="w-full rounded-2xl overflow-hidden shadow-md mt-10 md:m-10 lg:mt-20"
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
  );
}
