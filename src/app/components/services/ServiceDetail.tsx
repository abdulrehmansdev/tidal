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
            <h2 className="font-[montserrat] text-56 lg:text-76 mb-8 text-dark-blue">
              {service.title}
            </h2>
            <p className="md:w-9/10 font-[montserrat] space-y-4 text-dark-blue text-20">
              {service.briefText}
            </p>
            <button
              className="mt-2 btn-primary uppercase cursor-pointer"
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
