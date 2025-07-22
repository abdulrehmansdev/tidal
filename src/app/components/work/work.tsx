"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useWork } from "../../services/workService";
import Card from "../card";

const FILTERS = [
  "Show All",
  "Animation & Graphics",
  "Promotional Films",
  "Brand Films",
  "TV Advertisement",
  "Charity Films",
  "Drone Videography",
  "Social Media Content",
  "Corporate & Events",
  "Product & Service Videos",
  "Documentaries",
];

type WorkItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  type: string;
};

export default function WorkPortfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("Show All");
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();

  const { data, isLoading, isError } = useWork();

  if (isLoading) {
    return (
      <div className="bg-offwhite min-h-screen py-12 px-4 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto text-center text-2xl text-gray-500 py-20">
          Loading portfolio...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-offwhite min-h-screen py-12 px-4 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto text-center text-2xl text-reddish-orange py-20">
          Failed to load portfolio. Please try again later.
        </div>
      </div>
    );
  }

  const workData = (data || []) as WorkItem[];

  // Filter by tag and keyword
  const filteredWorks = (
    activeFilter === "Show All"
      ? workData
      : workData.filter((item: WorkItem) => item.tags.includes(activeFilter))
  ).filter((item: WorkItem) =>
    keyword.trim() === ""
      ? true
      : item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  // Custom layout: 2, 3, 2, 3
  const layout = [2, 3, 2, 3];
  let workIndex = 0;
  const rows: WorkItem[][] = [];
  for (let i = 0; i < layout.length; i++) {
    rows.push(filteredWorks.slice(workIndex, workIndex + layout[i]));
    workIndex += layout[i];
  }

  return (
    <div className="container mx-auto pt-10">
        {/* <div className="w-full flex justify-start"> */}
        <h1 className="text-56 lg:text-76 text-dark-blue ">
          Our Portfolio
        </h1>
        {/* </div> */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start text-dark-blue gap-4 justify-center flex-nowrap mb-20 mt-14">
            <p className="text-22 text-dark-blue md:mt-2 min-w-36">
              Filter by <span className="text-reddish-orange">---</span>
            </p>
            <div className="flex flex-wrap gap-4">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className={`btn-primary transition duration-200 cursor-pointer uppercase ${
                    activeFilter === filter
                      ? "bg-reddish-dark text-white border-reddish-dark"
                      : " "
                  }`}
                  aria-label={`Filter by ${filter}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Responsive 2-3-2-3 pattern, 1 per row on small screens */}
        <div className="flex flex-col gap-10 items-center w-full ">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`flex flex-col md:flex-row gap-8 w-full justify-center`}
            >
              {row.map((item) => (
                <div
                  key={item.id}
                  className={`group rounded-xl overflow-hidden cursor-pointer w-full md:flex-1`}
                  onClick={() => router.push(`/work/${item.id}`)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      router.push(`/work/${item.id}`);
                  }}
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
          ))}
        </div>
    </div>
  );
}
