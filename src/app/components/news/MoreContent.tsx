"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useNews } from "../../services/newsService";

const MoreContent = () => {
  const { data: newsData, isLoading, error } = useNews();
  const router = useRouter();

  return (
    <div className="container mx-auto py-6 lg:py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-56 text-dark-blue">
            More Content
          </h2>
          <button
            onClick={() => router.push("/news")}
            className="btn-primary uppercase cursor-pointer"
            aria-label="View All News"
          >
            VIEW ALL NEWS
          </button>
        </div>
        {isLoading ? (
          <div className="text-center py-12 text-lg text-dark-blue">
            Loading...
          </div>
        ) : error ? (
          <div className="text-center py-12 text-lg text-reddish-orange">
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
                  <span className="absolute top-3 right-3 bg-reddish-orange text-white text-13 px-4 py-1 rounded-full z-10">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 items-start text-left text-dark-blue">
                  <span className="text-16 mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-22 mb-6 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-20 opacity-80 mb-2 flex-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default MoreContent;
