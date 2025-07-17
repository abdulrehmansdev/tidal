"use client";

import React from "react";
import { FilledButton, UnFilledButton } from "./button";

const FeelingHero = () => {
  return (
    <section
      className="w-full h-5/6 bg-cover bg-center bg-no-repeat mt-10"
      style={{
        backgroundImage: "url('/wave.svg')",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row w-full py-24 gap-y-3">
        <div className="lg:w-2/5 ">
          <h3 className="text-56 lg:text-64 text-offWhite pb-6 lg:py-0 lg:w-5/6">
            Making Films With Feeling
          </h3>
        </div>

        <div className="lg:w-3/5 flex flex-col gap-y-4 text-20 text-offWhite">
          <p>
            At Tidal Film, we’re passionate about storytelling that connects.
            Based in sunny Southend-on-Sea, we’re a friendly and approachable
            creative video production agency that specialises in crafting
            quality films with feeling. Whether it’s a TV advert, a promotional
            video, or a heartfelt charity film, we pride ourselves on taking the
            stress out of production, so you can focus on sharing your vision.
          </p>
          <p>
            With a no-nonsense approach, we work tirelessly to shape and deliver
            stories that resonate with audiences and inspire action. Our team is
            energetic, creative, and dedicated to bringing your ideas to life,
            no matter how big or small. After all, when people feel something,
            they take action — and that’s what great storytelling is all about.
          </p>

          <div className="flex gap-4 mt-5">
            <button
              className="btn-secondary cursor-pointer w-44 uppercase"
              aria-label="who we are"
            >
              Who We Are
            </button>

            <UnFilledButton
              text="Let’s Talk"
              className="w-[145px]"
              ariaLabel="Let’s Talk"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeelingHero;
