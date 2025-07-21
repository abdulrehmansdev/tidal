"use client";
import Image from "next/image";

export default function Concept() {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div className="flex flex-col items-start w-fit">
          <h3 className="font-[Montserrat] text-dark-blue text-56 lg:text-64 w-fit">
            <span className="relative inline-block lg:block w-fit">
              Concept 
              <span className="block  h-2 bg-reddish-orange w-full" />
            </span>{" "}
            <span className="inline-block lg:block w-fit">
               Production
              <span className="block h-2 bg-reddish-orange w-full" />
            </span>
          </h3>
          <p className="font-[Montserrat] text-dark-blue text-56 lg:text-64 w-fit">
          {" "} <span className="relative inline-block w-fit">
              & Delivery
              <span className="block h-2 bg-reddish-orange w-full" />
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-y-4 lg:w-4/6">
          <p className=" font-[Montserrat] text-20 text-dark-blue ">
            We worked closely with the team at Capstone who had the expertise
            and knowledge of what would resonate well with their target
            audience. Building on their initial title for the campaign ‘You
            could make a difference’, we wrote a script, made a storyboard and
            pinpointed exactly what they wanted for the 30-second ad.
          </p>
          <p className=" font-[Montserrat] text-20 text-dark-blue">
            Filming took place over two days. On the first day, .....
          </p>
          <p className=" font-[Montserrat] text-20 text-dark-blue">
            Throughout production, we worked with Clearcast to ensure the
            project was approved for correct broadcast standards and that the
            final edit was cleared quickly upon delivery.
          </p>
          <p className=" font-[Montserrat] text-20 text-dark-blue">
            As well as the 30 second 16×9 TV commercial, we delivered 1 minute
            versions in a variety of
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-16 flex justify-center w-full">
        <div
          className="w-full rounded-2xl overflow-hidden shadow-md"
          style={{ maxHeight: "70vh" }}
        >
          <Image
            src="/about/creative/production.png"
            alt="Production filming crew"
            width={1920}
            height={1080}
            className="w-full object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}
