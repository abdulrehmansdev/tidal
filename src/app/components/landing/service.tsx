"use client";

import React from "react";
import { FilledButton } from "./button";

const OurServicesSection = () => {
  return (
    <section
      className="w-full h-5/6 bg-cover bg-center bg-no-repeat mt-10"
      style={{ backgroundImage: "url('/public2/wave.svg')" }}
    >
      <div className="container flex flex-col xl:flex-row justify-between xl:items-center w-full py-24 gap-y-14">
        {/* Left Content */}
        <div className="xl:w-2/4 flex flex-col gap-y-6">
            <h3 className="text-56 text-offWhite pb-6 lg:py-0 xl:w-4/6">
              No Idea Too Big 
              Or Too Small.
            </h3>
            <p className="text-20 text-offWhite xl:w-4/5">
              At Tidal Film, we offer a wide range of video production services
              designed to entertain, inform, and engage. Whether you’re looking
              to promote your business, raise awareness for a cause, or capture
              the essence of a memorable event, we’re here to help. Every
              project is tailored to your unique needs, blending strategy with
              creativity to deliver content that moves your audience.
            </p>

            <button
              className="btn-secondary cursor-pointer w-44 uppercase"
              aria-label="view all services"
            >
             View All Services
            </button>
        </div>

        {/* Right Card */}
        <div className="lg:min-w-[624px] bg-offWhite p-6 md:p-10 rounded-xl shadow-lg flex flex-col gap-y-10 items-start ">
          <h3 className="text-56 text-dark-blue">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-5 text-xl font-semibold">
            {[
              "Animation & Graphics",
              "Promotional Films",
              "Brand Films",
              "TV Advertisements",
              "Charity Films",
              "Drone Videography",
              "Social Media Content",
              "Corporate & Events",
              "Product & Service Videos",
              "Documentaries",
            ].map((service, idx) => (
              <div
                key={service}
                className="relative group flex items-center cursor-pointer"
              >
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded bg-reddish-orange opacity-0 group-hover:opacity-100 group-hover:h-7 transition-all duration-500"
                  aria-hidden="true"
                />
                <p className="text-22 text-darkest-blue pl-4 text-primary transition-colors duration-300">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
