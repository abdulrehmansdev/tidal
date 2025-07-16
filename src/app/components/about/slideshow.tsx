"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTeam } from "../../services/teamService";

// Custom Arrow Icons
// const ChevronLeftIcon = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M15 19l-7-7 7-7"
//     />
//   </svg>
// );

// const ChevronRightIcon = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M9 5l7 7-7 7"
//     />
//   </svg>
// );

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  altImage: string;
}

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const { data: teamData = [], isLoading, error } = useTeam();

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(teamData.length / visibleCards);

  if (isLoading) {
    return (
      <section className="relative bg-slate-700 py-16 overflow-hidden flex items-center justify-center min-h-[300px]">
        <span className="text-white text-xl">Loading team...</span>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative bg-slate-700 py-16 overflow-hidden flex items-center justify-center min-h-[300px]">
        <span className="text-red-400 text-xl">Failed to load team data.</span>
      </section>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTeamMembers = () => {
    const startIndex = currentSlide * visibleCards;
    return teamData.slice(startIndex, startIndex + visibleCards);
  };

  return (
    <section className="relative bg-slate-700 py-16 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <Image
          src="/wave-bg.jpg"
          alt="Wave background"
          fill
          //   className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-slate-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10  mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-[Montserrat] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Meet The Team
          </h2>

          {/* Navigation Arrows */}
          {/* <div className="hidden md:flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              aria-label="Previous team members"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border-2 border-white/30 text-white hover:border-white/10 transition-all duration-300 cursor-pointer"
              aria-label="Next team members"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div> */}
          <div className="hidden md:flex flex gap-4">
            <button
              // ref={prevRef}
              onClick={prevSlide}
              className="w-15 h-15 border border-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#1e2e45] hover:text-white transition text-[#1e2e45] cursor-pointer"
              aria-label="Previous testimonial"
            >
              <span className="flex items-center justify-center h-full w-full text-3xl">
                <Image
                  src="/about/team/left.svg"
                  alt="Logo"
                  width={16}
                  height={12}
                  // className="mt-2"
                />
              </span>
            </button>
            <button
              // ref={nextRef}
              onClick={nextSlide}
              className="w-15 h-15 border border-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#1e2e45] hover:text-white transition text-[#1e2e45] cursor-pointer"
              aria-label="Next testimonial"
            >
              <span className="flex items-center justify-center h-full w-full text-3xl">
                <Image
                  src="/about/team/right.svg"
                  alt="Logo"
                  width={16}
                  height={12}
                  // className="mt-2"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Team Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getCurrentTeamMembers().map((member: TeamMember) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 sm:w-72 sm:h-72 group transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={
                          member.image.startsWith("/")
                            ? member.image
                            : `/${member.image}`
                        }
                        alt={`${member.name} - ${member.title}`}
                        className="object-cover w-full h-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/team/default-avatar.jpg";
                        }}
                        style={{ borderRadius: "50%" }}
                      />
                      <img
                        src={
                          member.altImage && member.altImage !== ""
                            ? member.altImage.startsWith("/")
                              ? member.altImage
                              : `/${member.altImage}`
                            : "/team/default-avatar.jpg"
                        }
                        alt={`${member.name} alternate`}
                        className="object-cover w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ borderRadius: "50%" }}
                        aria-hidden="true"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/team/default-avatar.jpg";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-3">
                  <h3 className="font-[Montserrat] text-2xl sm:text-2xl font-bold text-[#1C4062]">
                    {member.name}
                  </h3>
                  <h4 className="font-[Montserrat] text-[#287F8C] font-semibold text-lg sm:text-lg">
                    {member.title}
                  </h4>
                  <p className="leading-[50%] tracking-[-0.02em] font-[Montserrat] text-[#495867] text-base sm:text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          {/* <div className="flex md:hidden justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
              aria-label="Previous team members"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border-2 border-white/30 text-white hover:border-white/10 transition-all duration-300"
              aria-label="Next team members"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div> */}

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
