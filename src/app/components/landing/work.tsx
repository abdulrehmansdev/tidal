"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { useWork } from "../../services/workService";
import React, { useRef, useEffect, useState } from "react";

// Subcomponent for meta info with dynamic span height
const WorkItemMeta = ({ title, category, spanColor, textSize }: { title: string; category: string; spanColor: string; textSize: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight);
    }
  }, [title, category]);

  return (
    <div className="mt-2 flex items-center gap-x-1 pl-1">
      <span
        className={`w-0.5 ${spanColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}
        style={{ height: divHeight ? `${divHeight}px` : undefined }}
        aria-hidden="true"
      />
      <div ref={divRef} className="group-hover:pl-1 transition-all duration-500">
        <h3 className={`text-22 text-dark-blue`}>{title}</h3>
        <p className={`${textSize} text-teal font-normal leading-tight tracking-tight`}>{category}</p>
      </div>
    </div>
  );
};

const WorkShowcase = () => {
  const { data: workData, isLoading, error } = useWork();

  if (isLoading) {
    return (
      <section className="bg-offWhite px-6 py-16">
        <div className="max-w-5/6 mx-auto text-center">
          <div className="text-teal">Loading work items...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-offWhite px-6 py-16">
        <div className="max-w-5/6 mx-auto text-center">
          <div className="text-reddish-orange">
            {typeof error === "string"
              ? error
              : "An error occurred while loading work items. Please try again later."}
          </div>
        </div>
      </section>
    );
  }

  if (!workData) {
    return (
      <section className="bg-offWhite px-6 py-16">
        <div className="max-w-5/6 mx-auto text-center">
          <div className="text-reddish-orange">No work items found.</div>
        </div>
      </section>
    );
  }

  // Only use the top 5 works
  const topWorks = workData.slice(0, 5);

  return (
    <div className="container mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h2 className="text-56 text-dark-blue">Our Work</h2>
        <div className="hidden md:flex h-full items-end">
          <button className="btn-secondary uppercase" aria-label="View All Work">
            View More Work
          </button>
        </div>
      </div>

      {/* Custom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {/* Row 1 - 2 items spanning 3 cols each */}
        {topWorks.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="col-span-1 sm:col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-xl object-cover w-full h-[200px] sm:h-[250px] lg:h-auto transition-all duration-300 group-hover:scale-105"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              {/* Play icon with animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="bg-white/30 rounded-full p-4 shadow-lg hover:bg-white transition-colors duration-200">
                    <Play className="w-8 h-8 text-dark-blue/60 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            <WorkItemMeta
              title={item.title}
              category={item.category}
              spanColor="bg-[#ff645a]"
              textSize="text-lg"
            />
          </div>
        ))}

        {/* Row 2 - 3 items, each spans 2 cols */}
        {topWorks.slice(2).map((item) => (
          <div
            key={item.id}
            className="col-span-1 sm:col-span-1 lg:col-span-2 rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-xl object-cover w-full h-[200px] sm:h-[250px] lg:h-auto transition-all duration-300 group-hover:scale-105"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              {/* Play icon with animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="bg-white/30 rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-200">
                    <Play className="w-6 h-6 text-dark-blue/70 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            <WorkItemMeta
              title={item.title}
              category={item.category}
              spanColor="bg-reddish-orange"
              textSize="text-base"
            />
          </div>
        ))}
      </div>
      {/* Mobile-only View More Work button */}
      <div className="flex md:hidden justify-center mt-8">
        <button className="btn-secondary uppercase max-w-xs" aria-label="View All Work">
          View More Work
        </button>
      </div>
    </div>
  );
};

export default WorkShowcase;
