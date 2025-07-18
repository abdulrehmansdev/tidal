"use client";
import React, { useState } from "react";
import Image from "next/image";
import Touch from "../../components/landing/touch";
import { useRouter } from "next/navigation";
import { useNews } from "../../services/newsService";
import { NewsItem } from "../../utils/types";

const categories = [
  "Show All",
  "Promotional",
  "Animation",
  "Voluntary and Education",
  "Event",
  "Behind-the-Scenes",
];

export default function NewsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Show All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { data: newsData, isLoading, error } = useNews();

  const filteredNews: NewsItem[] =
    activeCategory === "Show All"
      ? newsData ?? []
      : (newsData ?? []).filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
        <div className="container mx-auto mt-20">
          <h1 className="font-[montserrat] text-76 text-dark-blue">
            Our Latest News
          </h1>
          <div className="flex flex-wrap gap-2 items-center my-10">
            <span className="text-dark-blue font-medium mr-2">
              Filter by <span className="text-reddish-orange">---</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-full border font-[montserrat] text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-reddish-dark text-white border-reddish-dark"
                    : "bg-white text-dark-blue border-dark-blue hover:bg-reddish-dark hover:text-white hover:border-reddish-dark"
                }`}
                aria-label={`Filter news by ${cat}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="text-center py-12 text-lg text-dark-blue">
              Loading...
            </div>
          ) : error ? (
            <div className="text-center py-12 text-lg text-red-600">
              {typeof error === "string"
                ? error
                : "An error occurred while loading news. Please try again later."}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {paginatedNews.map((item) => (
                  <div
                    key={item.id}
                    className="overflow-hidden flex flex-col cursor-pointer"
                    onClick={() => router.push(`/news/${item.id}`)}
                  >
                    <div className="relative group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <span className="absolute top-2 right-2 bg-reddish-orange text-offwhite text-xs font-normal text-offWhite px-2 py-1 rounded-full z-10 leading-tight">
                        {item.category}ss
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1 items-start text-left">
                      <span className="text-16 text-dark-blue mb-2">
                        {item.date}
                      </span>
                      <h3 className="text-22 font-bold text-dark-blue mb-2 ">
                        {item.title}
                      </h3>
                      <p className="text-20 text-darker-blue ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-start gap-2 bg-transparent mt-10 justify-start">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx + 1}
                      onClick={() => handlePageChange(idx + 1)}
                      className={`w-10 h-10 rounded-lg border border-dark-blue flex items-center justify-center text-dark-blue font-semibold text-base transition-all duration-200 ${
                        currentPage === idx + 1
                          ? "bg-[#e6eae6] text-dark-blue border-[#e6eae6]"
                          : "bg-white hover:bg-dark-blue hover:text-white"
                      }`}
                      aria-label={`Go to page ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-base transition-all duration-200 ${
                      currentPage === totalPages
                        ? "bg-dark-blue/30 cursor-not-allowed"
                        : "bg-dark-blue hover:bg-[#1a2343]"
                    }`}
                    aria-label="Next page"
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
    
      <Touch />
    </>
  );
}
