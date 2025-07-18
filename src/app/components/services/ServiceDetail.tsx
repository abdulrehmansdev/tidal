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
    <div className="container mx-auto py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-[montserrat] text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-8 text-dark-blue leading-tight text-left">
              {service.title}
            </h2>
            <p className="md:w-9/10 font-[montserrat] space-y-4 text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed text-dark-blue">
              {service.briefText}
            </p>
            <button
              className="mt-2 w-fit px-6 py-2 border-2 border-dark-blue rounded-full text-dark-blue font-bold tracking-wide hover:bg-dark-blue hover:text-white transition-colors duration-200 text-base md:text-lg cursor-pointer"
              aria-label="Let's Talk"
            >
              LET'S TALK
            </button>
          </div>
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
      </div>
    </div>
  );
};

export default ServiceDetail;
