"use client";
import Image from "next/image";

export default function Concept() {
  return (
    <div className="bg-[#f7f8fa] min-h-screen py-8 px-6 md:px-20 flex flex-col items-center">
      <div className="w-full  mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full">
          <div className="flex-1 min-w-[260px] lg:max-w-[420px] lg:mr-8">
            <h1 className="font-[Montserrat] leading-tight text-4xl md:text-6xl font-bold text-[#1C4062] mb-2 leading-tight">
              <span className="block border-b-6 border-[#ff6b6b] pb-1 mb-2 inline-block w-fit">
                Concept,
              </span>
              <br />
              <span className="block border-b-6 border-[#ff6b6b] pb-1 mb-2 inline-block w-fit">
                Production
              </span>
              <br />
              <span className="block border-b-6 border-[#ff6b6b] pb-1 mb-2 inline-block w-fit">
                & Delivery
              </span>
            </h1>
          </div>
          <div className="flex-1 lg:mt-0 mt-2">
            <p className=" font-[Montserrat]  text-[#22305a] leading-tight text-base md:text-lg ">
              We worked closely with the team at Capstone who had the expertise
              and knowledge of what would resonate well with their target
              audience. Building on their initial title for the campaign ‘You
              could make a difference’, we wrote a script, made a storyboard and
              pinpointed exactly what they wanted for the 30-second ad.
              <br />
              <br />
              Filming took place over two days. On the first day, .....
              <br />
              <br />
              Throughout production, we worked with Clearcast to ensure the
              project was approved for correct broadcast standards and that the
              final edit was cleared quickly upon delivery.
              <br />
              <br />
              As well as the 30 second 16×9 TV commercial, we delivered 1 minute
              versions in a variety of
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center w-full">
          <div
            className="w-full rounded-2xl overflow-hidden shadow-md"
            style={{ maxHeight: "70vh" }}
          >
            <Image
              // src={work.concept}
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
