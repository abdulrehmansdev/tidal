"use client";

import React from "react";
import { FilledButton, UnFilledButton } from "./button";

const FeelingHero = () => {
  return (
    <section
      className="w-full h-5/6 bg-cover bg-center bg-no-repeat text-white px-6 lg:px-20 py-30 mt-10"
      style={{
        backgroundImage: "url('/public2/wave.svg')"
      }}
    >
      <div className=" mx-auto grid md:grid-cols-5">
        <div className="md:col-span-2">
          <h1 className="flex justify-start text-2xl md:text-5xl lg:text-films ">
            Making Films <br /> With Feeling
          </h1>
        </div>

        <div className=" md:col-span-3 paragraph-base text-white space-y-6">
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

          <div className="flex gap-4 mt-12">
            <FilledButton
              text="Who We Are"
              className="w-[168px]"
              ariaLabel="Who We Are"
            />

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
