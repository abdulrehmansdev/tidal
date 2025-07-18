"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useWork } from "../../services/workService";
import Card from "../card";

const getVisibleCount = () => {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

const WorkSlider = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // set default to 1
  const { data: workData = [], isLoading, error } = useWork();

  useEffect(() => {
    const updateCount = () => setVisibleCount(getVisibleCount());
    updateCount(); // set correct value after mount
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

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
    <div className="bg-[#f7f8fa] px-6 md:px-20 ">
      <div className="w-full  mx-auto py-12 ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[Montserrat] text-3xl md:text-6xl font-semibold text-[#1C4062]">
            Our Work
          </h2>
          <div className="flex gap-6">
            <button
              onClick={handlePrev}
              disabled={start === 0}
              className="w-14 aspect-square flex items-center justify-center rounded-full border border-[#23456a] bg-transparent text-[#23456a] hover:bg-[#1e2e45] hover:text-white transition disabled:opacity-30 cursor-pointer"
              aria-label="Previous"
            >
              <Image
                src="/slider/left.svg"
                alt="Logo"
                width={16}
                height={12}
                // className="mt-2"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={start >= maxStart}
              className="w-14 aspect-square flex items-center justify-center rounded-full border border-[#23456a] bg-transparent text-[#23456a] hover:bg-[#1e2e45] hover:text-white transition disabled:opacity-30 cursor-pointer"
              aria-label="Next"
            >
              <Image
                src="/slider/right.svg"
                alt="Logo"
                width={16}
                height={12}
                // className="mt-2"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {workData.slice(start, start + visibleCount).map((item, idx) => (
            <a
              key={item.id}
              href={`/work/${item.id}`}
              className=" rounded-xl overflow-hidden group cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              {/* <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-56 transition-all duration-300 group-hover:brightness-90 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
              <div className="mt-2 px-4 pb-4">
                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-[#33728a] mt-1">{item.category}</p>
              </div> */}
              <Card
                image={item.image}
                title={item.title}
                category={item.category}
                spanColor="bg-reddish-orange"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
