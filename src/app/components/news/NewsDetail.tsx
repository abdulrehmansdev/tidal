"use client";
import React from "react";
import Image from "next/image";
import { useNewsItem } from "../../services/newsService";

export type NewsDetailProps = {
  id: number;
};

const NewsDetail: React.FC<NewsDetailProps> = ({ id }) => {
  const { data: news, isLoading, error } = useNewsItem(id);

  if (isLoading) {
    return (
      <div className="py-12 text-center text-lg text-[#23456a]">Loading...</div>
    );
  }
  if (error) {
    return (
      <div className="py-12 text-center text-lg text-[#ff4b5c]">
        {typeof error === "string"
          ? error
          : "An error occurred while loading this news item. Please try again later."}
      </div>
    );
  }
  if (!news) {
    return (
      <div className="py-12 text-center text-lg text-[#ff4b5c]">
        News not found.
      </div>
    );
  }

  return (
    <section className="bg-[#f7f8fa] py-8 px-2 md:px-8 lg:px-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 md:w-9/10">
          <span className="font-[montserrat] inline-block bg-[#ff4b5c] text-white text-xs font-semibold px-4 py-1 rounded-full mb-2">
            {news.category}
          </span>
          <h1 className="font-[montserrat] text-5xl md:text-7xl font-extrabold text-[#1C4062] leading-tight mb-4">
            {news.title}
          </h1>
          <div className="font-[montserrat] text-[#1C4062] text-xl mb-2">
            {news.date}
            {(news.tags ?? []).length > 0 && (
              <>
                {" | "}
                {(news.tags ?? []).map((tag, i, arr) => (
                  <React.Fragment key={tag}>
                    <a
                      href="#"
                      className="text-[#1C4062] underline hover:text-[#ff4b5c] transition-colors duration-150"
                    >
                      {tag}
                    </a>
                    {i < arr.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={news.image}
              alt="Tidal Film crew working with professional camera equipment during a video production"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
