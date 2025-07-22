"use client";
import { useWork } from "../../services/workService";
import React from "react";
import Card from "../card";

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
          <button
            className="btn-secondary uppercase"
            aria-label="View All Work"
          >
            View More Work
          </button>
        </div>
      </div>

      {/* Custom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10">
        {/* Row 1 - 2 items spanning 3 cols each */}
        {topWorks.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="col-span-1 sm:col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
          >
            <Card
              image={item.image}
              title={item.title}
              category={item.category}
              spanColor="bg-reddish-orange"
            />
          </div>
        ))}

        {/* Row 2 - 3 items, each spans 2 cols */}
        {topWorks.slice(2).map((item) => (
          <div
            key={item.id}
            className="col-span-1 sm:col-span-1 lg:col-span-2 rounded-xl overflow-hidden group cursor-pointer"
          >
            <Card
              image={item.image}
              title={item.title}
              category={item.category}
              spanColor="bg-reddish-orange"
            />
          </div>
        ))}
      </div>
      {/* Mobile-only View More Work button */}
      <div className="flex md:hidden justify-center mt-8">
        <button
          className="btn-secondary uppercase max-w-xs"
          aria-label="View All Work"
        >
          View More Work
        </button>
      </div>
    </div>
  );
};

export default WorkShowcase;
