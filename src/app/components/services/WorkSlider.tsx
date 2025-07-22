"use client";
import React, { useState } from "react";
import { useWork } from "../../services/workService";
import Card from "../card";
import { ArrowLeft, ArrowRight } from "lucide-react"; // or ChevronRight, etc.

type WorkSliderProps = {
  visibleCount?: number;
};

const WorkSlider = ({ visibleCount = 2 }: WorkSliderProps) => {
  const [start, setStart] = useState(0);
  const { data: workData = [], isLoading, error } = useWork();

  const maxStart = Math.max(0, workData.length - visibleCount);
  const handlePrev = () => setStart((s) => Math.max(0, s - visibleCount));
  const handleNext = () =>
    setStart((s) => Math.min(maxStart, s + visibleCount));

  if (isLoading) {
    return (
      <div className="bg-[#f7f8fa] flex items-center justify-center min-h-[300px]">
        <span className="text-[#225f71] text-xl">Loading work...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f7f8fa] flex items-center justify-center min-h-[300px]">
        <span className="text-red-500 text-xl">Failed to load work data.</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 lg:py-12">
      <div className="">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-[Montserrat] text-3xl md:text-6xl font-semibold text-dark-blue">
            Our Work
          </h2>
          <div className="flex gap-6">
            <button
              onClick={handlePrev}
              disabled={start === 0}
              className="group w-14 aspect-square flex items-center justify-center rounded-full border border-dark-blue hover:border-none bg-transparent text-dark-blue hover:bg-reddish-orange hover:text-white transition disabled:opacity-30 cursor-pointer"
              aria-label="Previous"
            >
              <ArrowLeft className="w-6 h-6 transition group-hover:text-white text-dark-blue" />

            </button>
            <button
              onClick={handleNext}
              disabled={start >= maxStart}
              className="group w-14 aspect-square flex items-center justify-center rounded-full border border-dark-blue hover:border-none bg-transparent text-dark-blue hover:bg-reddish-orange hover:text-white transition disabled:opacity-30 cursor-pointer"
              aria-label="Next"
            >
              <ArrowRight className="w-6 h-6 transition group-hover:text-white text-dark-blue" />
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-${visibleCount} gap-6 w-full`}
        >
          {workData.slice(start, start + visibleCount).map((item, idx) => (
            <a
              key={item.id}
              href={`/work/${item.id}`}
              className="rounded-xl overflow-hidden group cursor-pointer flex justify-center"
              style={{ textDecoration: "none" }}
            >              
              <div className={`w-full ${visibleCount === 3 ? 'h-[420px]' : 'h-[340px]'} flex flex-col overflow-hidden`}>
                <Card
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  spanColor="bg-reddish-orange"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;