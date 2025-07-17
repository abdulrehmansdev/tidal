"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTestimonials } from "../../services/testimonialService";
import Image from "next/image";

const TestimonialsSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const { data: testimonials, isLoading, error } = useTestimonials();

  if (isLoading) {
    return (
      <section className="bg-offWhite py-20 overflow-hidden">
        <div className="mx-auto px-4 text-center">
          <div className="text-dark-blue">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  if (error || !testimonials) {
    return (
      <section className="bg-offWhite py-20 overflow-hidden">
        <div className="mx-auto px-4 text-center">
          <div className="text-dark-blue">Failed to load testimonials</div>
        </div>
      </section>
    );
  }

  // Responsive Swiper settings
  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3.2;
      if (window.innerWidth >= 768) return 2.2;
    }
    return 1.2;
  };

  // Duplicate testimonials for perfect loop if needed
  let displayTestimonials = testimonials;
  const slidesPerView = getSlidesPerView();
  const minSlides = Math.ceil(slidesPerView * 2 + 1); // enough for loop and center
  if (testimonials.length > 0 && testimonials.length < minSlides) {
    const times = Math.ceil(minSlides / testimonials.length);
    displayTestimonials = Array(times)
      .fill(testimonials)
      .flat()
      .slice(0, minSlides);
  }

  // Find the center index for initialSlide
  const initialSlide = Math.floor(displayTestimonials.length / 2);

  return (
    <div className="overflow-hidden py-24">
      {/* Header and Arrows */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-7 ">
        <h2 className="text-center lg:text-left  text-56 text-dark-blue">
          What Our Customers Say
        </h2>
        <div className="flex gap-4 ">
          <button
            ref={prevRef}
            className="w-14 h-14 border border-darkest-blue group rounded-full flex items-center justify-center hover:border-reddish-orange hover:bg-reddish-orange cursor-pointer transition duration-500"
            aria-label="Previous testimonial"
          >
            <span className="flex items-center justify-center h-full w-full">
              <Image
                src="/slider/left.svg"
                alt="Left Arrow"
                width={16}
                height={12}
                className="inline group-hover:hidden"
              />
              <Image
                src="/slider/lefts.svg"
                alt="Left Arrow Hover"
                width={16}
                height={12}
                className="hidden group-hover:inline"
              />
            </span>
          </button>

          <button
            ref={nextRef}
            className="w-14 h-14 border border-darkest-blue group rounded-full flex items-center justify-center hover:border-reddish-orange hover:bg-reddish-orange cursor-pointer transition duration-300"
            aria-label="Next testimonial"
          >
            <span className="flex items-center justify-center h-full w-full">
              <Image
                src="/slider/right.svg"
                alt="Right Arrow"
                width={16}
                height={12}
                className="inline group-hover:hidden"
              />
              <Image
                src="/slider/rights.svg"
                alt="Right Arrow Hover"
                width={16}
                height={12}
                className="hidden group-hover:inline"
              />
            </span>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          // Assign navigation elements after refs are ready
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1.2}
        loop={true}
        initialSlide={initialSlide}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
            spaceBetween: 40,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 50,
            centeredSlides: true,
          },
        }}
        className="!overflow-visible"
      >
        {displayTestimonials.map((item, idx) => (
          <SwiperSlide key={item.id + "-" + idx} className="pt-12">
            <div className="bg-teal text-offwhite rounded-xl font-medium text-2xl p-12 min-h-[280px] flex flex-col gap-y-5 justify-between">
              {/* Quote Icon */}
              <div>
                <Image
                  src={item.quoteIcon}
                  alt="Quote"
                  width={30}
                  height={30}
                  className="mb-4"
                />

                {/* Quote Text */}
                <p className="text-2xl text-sea-litest italic !font-medium">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-auto">
                <p className="text-16  text-teal-lite">
                  {item.author} / {item.role}
                </p>
                <Image
                  src={item.logo}
                  alt="Logo"
                  width={100}
                  height={30}
                  className="mt-2"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
