"use client";

import React from "react";
import { FilledButton } from "./button";

const OurServicesSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat px-6 lg:px-20 py-20"
      style={{ backgroundImage: "url('/wave.svg')" }} // Place your background image in /public
    >
      <div className=" mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="text-white md:w-2/4">
          <h3 className="text-idea">
            No Idea Too Big <br />
            Or Too Small.
          </h3>
          <p className="md:w-3/3 text-ideaGraph mb-8 md:pr-4">
            At Tidal Film, we offer a wide range of video production services
            designed to entertain, inform, and engage. Whether you’re looking to
            promote your business, raise awareness for a cause, or capture the
            essence of a memorable event, we’re here to help. Every project is
            tailored to your unique needs, blending strategy with creativity to
            deliver content that moves your audience.
          </p>
          <FilledButton
            text="View All Services"
            className="w-[220px]"
            ariaLabel="View All Services"
          />
        </div>

        {/* Right Card */}
        <div className="lg:min-w-[624px] lg:min-h-[500px] w-full md:w-auto bg-offWhite  text-primary p-6 md:p-12 rounded-xl shadow-lg flex flex-col  items-start">
          <h3 className="text-ourservice text-primary mb-10">
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 md:gap-7 text-xl font-semibold">
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
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded bg-[#ff645a] opacity-0 group-hover:opacity-100 group-hover:h-7 transition-all duration-500"
                  aria-hidden="true"
                />
                <p className="text-servicePoints pl-4 text-primary transition-colors duration-300">
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
