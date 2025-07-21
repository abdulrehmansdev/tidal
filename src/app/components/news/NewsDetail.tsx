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
      <div className="py-12 text-center text-lg text-dark-blue">Loading...</div>
    );
  }
  if (error) {
    return (
      <div className="py-12 text-center text-lg text-reddish-orange">
        {typeof error === "string"
          ? error
          : "An error occurred while loading this news item. Please try again later."}
      </div>
    );
  }
  if (!news) {
    return (
      <div className="py-12 text-center text-lg text-reddish-orange">
        News not found.
      </div>
    );
  }

  return (
    <section className="container mx-auto flex flex-col lg:flex-row w-full py-8 lg:py-16 gap-8">
      <div className="space-y-4 lg:w-3/6 xl:w-2/5">
        <span className="font-[montserrat] inline-block bg-reddish-orange text-white text-13 px-4 py-2 rounded-full">
          {news.category}
        </span>
        <h1 className="font-[montserrat] text-64 lg:text-76 text-dark-blue mb-4">
          {news.title}
        </h1>
        <div className="font-[montserrat] text-xl mb-2">
          {news.date}
          {(news.tags ?? []).length > 0 && (
            <>
              {" | "}
              {(news.tags ?? []).map((tag, i, arr) => (
                <React.Fragment key={tag}>
                  <a
                    href="#"
                    className="text-dark-blue underline"
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
      <div className="lg:w-3/6 xl:w-3/5">
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
    </section>
  );
};

export default NewsDetail;