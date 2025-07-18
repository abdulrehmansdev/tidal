"use client";
import React from "react";

import { useNewsItem } from "../../services/newsService";

type NewsArticleBodyProps = {
  id: number;
};

const NewsArticleBody: React.FC<NewsArticleBodyProps> = ({ id }) => {
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
    <div className="bg-[#f7f8fa]">
      <div className="max-w-3xl mx-auto px-2 py-12 border-b-2 border-gray-400">
        <h2 className=" font-[montserrat]text-2xl md:text-4xl font-bold text-[#001F3B] mb-6 text-center md:text-left">
          {news.description}
        </h2>
        <p className="mb-4 font-[montserrat] font-semibold text-2xl text-base md:text-lg text-[#1C4062]">
          {news.detail1}
        </p>
        <div className="w-full flex justify-center mb-8">
          <video controls poster={news.image} className="w-full max-w-2xl">
            <source src="/showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mb-4 font-[montserrat] font-semibold text-2xl text-base md:text-lg text-[#1C4062]">
          {news.detail2}
        </p>
        {/* <p className="mb-4 text-base md:text-lg text-[#222]">
          Date: {news.date}
        </p>
        <p className="mb-4 text-base md:text-lg text-[#222]">
          Category: {news.category}
        </p>
        {news.tags && news.tags.length > 0 && (
          <p className="mb-4 text-base md:text-lg text-[#222]">
            Tags: {news.tags.join(", ")}
          </p> */}
        {/* )} */}
      </div>
      {/* Social Share Section */}
      <div className="max-w-3xl mx-auto px-2 pt-10 pb-12 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-[montserrat] font-semibold text-lg text-[#1C4062]">
            Share this article
          </span>
          <span className="text-[#FE5F55] text-2xl">---</span>
          <a
            href="#"
            aria-label="Share on X"
            className="bg-[#e6eae6] rounded-md p-1 flex items-center justify-center hover:bg-[#d1d5db] transition"
          >
            <img src="/social/x.svg" alt="X" className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Share on Facebook"
            className="bg-[#e6eae6] rounded-md p-1 flex items-center justify-center hover:bg-[#d1d5db] transition"
          >
            <img src="/social/insta.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Share by Email"
            className="bg-[#e6eae6] rounded-md p-1 flex items-center justify-center hover:bg-[#d1d5db] transition"
          >
            <img src="/file.svg" alt="Email" className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Share on LinkedIn"
            className="bg-[#1C4062] rounded-md p-1 flex items-center justify-center hover:bg-[#23456a] transition"
          >
            <img
              src="/social/linkedIn.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleBody;
