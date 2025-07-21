"use client";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { useNewsItem } from "../../services/newsService";
import { Linkedin, Mail } from "lucide-react";

type NewsArticleBodyProps = {
  id: number;
};

const NewsArticleBody: React.FC<NewsArticleBodyProps> = ({ id }) => {
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
    <div>
      <div className="max-w-4xl mx-auto px-2 py-6 lg:py-12 border-b-2 border-gray-400">
        <h2 className="font-[montserrat] text-36 text-darkest-blue mb-6 text-center md:text-left">
          {news.description}
        </h2>
        <p className="mb-4 font-[montserrat] text-22 text-dark-blue">
          {news.detail1}
        </p>
        <div className="w-full flex justify-center mb-8">
          <video controls poster={news.image} className="w-full max-w-2xl">
            <source src="/showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mb-4 font-[montserrat] text-22 text-dark-blue">
          {news.detail2}
        </p>        
      </div>
      {/* Social Share Section */}
      <div className="max-w-4xl mx-auto px-2 pt-10 pb-12 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-[montserrat] font-semibold text-lg text-dark-blue">
            Share this article
          </span>
          <span className="text-reddish-orange text-2xl">---</span>
          <a
            href="#"
            aria-label="Share on X"
            className="bg-sea-litest rounded-md p-1 flex items-center justify-center"
          >
            <BsTwitterX className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Share on Facebook"
            className="bg-sea-litest rounded-md p-1 flex items-center justify-center"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Share by Email"
            className="bg-sea-litest rounded-md p-1 flex items-center justify-center"
          >
            <Mail className="w-6 h-6" />            
          </a>
          <a
            href="#"
            aria-label="Share on LinkedIn"
            className="bg-sea-litest rounded-md p-1 flex items-center justify-center"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleBody;
