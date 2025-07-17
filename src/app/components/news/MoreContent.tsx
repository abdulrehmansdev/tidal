"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useNews } from "../../services/newsService";

const MoreContent = () => {
  const { data: newsData, isLoading, error } = useNews();
  const router = useRouter();

  return (
    <div className="bg-[#f7f8fa] py-12 px-2 md:px-8 lg:px-16">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#23456a]">
            More Content
          </h2>
          <button
            onClick={() => router.push("/news")}
            className="px-6 py-2 rounded-full border border-[#23456a] text-[#23456a] font-semibold text-sm tracking-wide hover:bg-[#23456a] hover:text-white transition cursor-pointer"
            aria-label="View All News"
          >
            VIEW ALL NEWS
          </button>
        </div>
        {isLoading ? (
          <div className="text-center py-12 text-lg text-[#23456a]">
            Loading...
          </div>
        ) : error ? (
          <div className="text-center py-12 text-lg text-red-600">
            {typeof error === "string"
              ? error
              : "An error occurred while loading news. Please try again later."}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(newsData ?? []).slice(0, 3).map((item) => (
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
                  <span className="absolute top-3 right-3 bg-[#ff4b5c] text-white text-xs font-semibold px-4 py-1 rounded-full z-10">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 items-start text-left">
                  <span className="text-xs text-[#23456a] mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-bold text-[#23456a] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#23456a] opacity-80 mb-2 flex-1 truncate">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreContent;
