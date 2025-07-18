"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useWork } from "../../services/workService";

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
      <div className="bg-[#f5f7ff] min-h-screen py-12 px-4 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto text-center text-2xl text-gray-500 py-20">
          Loading portfolio...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-[#f5f7ff] min-h-screen py-12 px-4 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto text-center text-2xl text-red-500 py-20">
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
    <div className="bg-[#f5f7ff] min-h-screen py-12 px-6 md:px-20 flex flex-col items-center">
      <div className="w-full  mx-auto">
        {/* <div className="w-full flex justify-start"> */}
        <h1 className="text-4xl md:text-7xl font-bold text-[#1C4062] mb-8 text-left">
          Our Portfolio
        </h1>
        {/* </div> */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start text-[#1a2343] gap-4 justify-center flex-nowrap">
            <span className="font-semibold text-lg mr-4 whitespace-nowrap md:mt-2">
              Filter by <span className="text-[#FE5F55]">---</span>
            </span>
            {/* <input
              type="text"
              placeholder="Keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="px-4 py-2 rounded-full border border-[#dbeafe] focus:outline-none focus:ring-2 focus:ring-[#ff4d4f] text-base md:text-base bg-white text-[#1a2343] w-full md:w-64"
              style={{ maxWidth: 260 }}
            /> */}
            <div className="flex flex-wrap gap-3 mt-3 md:mt-0 md:ml-4">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className={`px-5 py-2 rounded-full border font-medium transition-colors duration-200 text-sm md:text-base cursor-pointer ${
                    activeFilter === filter
                      ? "bg-[#FE5F55] text-white border-[#FE5F55"
                      : "bg-white text-[#1a2343] border-[#1a2343] hover:bg-[#e0e7ff]"
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
        <div className="flex flex-col gap-8 items-center">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`flex gap-8 w-full justify-center ${
                row.length === 2 ? "" : "flex-wrap"
              }`}
            >
              {row.map((item, idx) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform hover:scale-[1.03] ${
                    row.length === 2
                      ? "flex-1 min-w-[340px] max-w-[600px] h-[420px]"
                      : "flex-1 min-w-[260px] max-w-[420px] h-[340px]"
                  }`}
                  style={
                    row.length === 2
                      ? { maxWidth: "660px" }
                      : { maxWidth: "420px" }
                  }
                  onClick={() => router.push(`/work/${item.id}`)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      router.push(`/work/${item.id}`);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full ${
                      row.length === 2 ? "h-64" : "h-48"
                    } object-cover object-center`}
                  />
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-[#1a2343] mb-1 truncate">
                        {item.title}
                      </h2>
                      <p className="text-sm text-[#6b7280]">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
