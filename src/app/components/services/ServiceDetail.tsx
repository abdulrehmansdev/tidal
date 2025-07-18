"use client";
import React from "react";
import { useService } from "../../services/tidalServicesApi";
import Image from "next/image";

interface ServiceDetailProps {
  id: number;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ id }) => {
  const { data: service, isLoading, error } = useService(id);

  if (isLoading) {
    return (
      <div className="py-12 text-center text-lg text-[#23456a]">Loading...</div>
    );
  }
  if (error) {
    return (
      <div className="py-12 text-center text-lg text-[#ff4b5c]">
        {typeof error === "string"
          ? error
          : "An error occurred while loading this service. Please try again later."}
      </div>
    );
  }
  if (!service) {
    return (
      <div className="py-12 text-center text-lg text-[#ff4b5c]">
        Service not found.
      </div>
    );
  }

  return (
    <div className="bg-[#f7f8fa] py-12 px-6 md:px-20">
      <div className=" mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-[montserrat] text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-8 text-[#23456a] leading-tight text-left">
              {service.title}
            </h2>
            <p className="md:w-9/10 font-[montserrat] space-y-4 text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed text-[#1C4062]">
              {service.briefText}
            </p>
            <button
              className="mt-2 w-fit px-6 py-2 border-2 border-[#23456a] rounded-full text-[#23456a] font-bold tracking-wide hover:bg-[#23456a] hover:text-white transition-colors duration-200 text-base md:text-lg cursor-pointer"
              aria-label="Let's Talk"
            >
              LET'S TALK
            </button>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-4xl shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
