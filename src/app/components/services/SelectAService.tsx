"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useServices } from "../../services/tidalServicesApi";

const SelectAService = () => {
  const router = useRouter();
  const { data: services, isLoading, error } = useServices();

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat px-6 py-20"
      style={{ backgroundImage: "url('/wave.svg')" }}
    >
      <div className="flex justify-center items-center w-full">
        <div
          className="bg-offWhite p-8 md:p-12 rounded-xl shadow-lg flex flex-col justify-center items-center w-full max-w-3xl"
          style={{ minWidth: "320px" }}
        >
          <h3
            className="text-36 text-dark-blue mb-6 w-full text-left border-b-2 border-reddish-orange pb-2"
            style={{ borderBottomWidth: "2px" }}
          >
            Select a Service
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 text-base font-medium w-full">
            {isLoading && <div>Loading...</div>}
            {error && (
              <div className="text-reddish-orange">
                {typeof error === "string"
                  ? error
                  : "An error occurred while loading services. Please try again later."}
              </div>
            )}
            {!isLoading && !error && (!services || services.length === 0) && (
              <div className="text-reddish-orange">No services found.</div>
            )}
            {services &&
              services.map((service) => (
                <div
                  key={service.id}
                  className="relative group flex items-center cursor-pointer"
                  onClick={() => router.push(`/services/${service.id}`)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${service.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      router.push(`/services/${service.id}`);
                  }}
                >
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded bg-reddish-orange opacity-0 group-hover:opacity-100 group-hover:h-7 transition-all duration-500"
                    aria-hidden="true"
                  />
                  <span className="font-[Montserrat] pl-4 text-dark-blue text-22 transition-colors duration-300">
                    {service.title}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectAService;
