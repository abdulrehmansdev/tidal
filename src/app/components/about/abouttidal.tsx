import Image from "next/image";
import React from "react";

const AboutTidal = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col lg:flex-row w-full py-24 gap-10">
        <div className="lg:w-3/6 xl:w-2/5  flex flex-col xl:justify-between">
          <h3 className="text-56 lg:text-64 text-dark-blue pb-6 lg:py-0 lg:w-5/6">
            About Tidal Film
          </h3>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-5 ">
              <p className=" text-20 text-dark-blue">
                At Tidal Film, we're passionate about storytelling that
                connects. Based in sunny Southend-on-Sea, we're a friendly and
                approachable creative video production agency that specialises
                in crafting quality films with feeling. Whether it's a TV
                advert, a promotional video, or a heartfelt charity film, we
                pride ourselves on taking the stress out of production, so you
                can focus on sharing your vision.
              </p>

              <p className=" text-20 text-dark-blue">
                With a no-nonsense approach, we work tirelessly to shape and
                deliver stories that resonate with audiences and inspire action.
                Our team is energetic, creative, and dedicated to bringing your
                ideas to life, no matter how big or small. After all, when
                people feel something, they take action—and that's what great
                storytelling is all about.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              className="btn-primary cursor-pointer w-32"
              aria-label="Let’s Talk"
            >
              LET`S TALK
            </button>
          </div>
        </div>

        <div className="lg:w-3/6 xl:w-3/5">
          <div className="relative overflow-hidden rounded-10xl shadow-2xl">
            <video
              src="/about/camera.mp4"
              autoPlay
              loop
              muted
              playsInline
              width={650}
              height={430}
              className="w-full h-auto object-cover"
              style={{ borderRadius: "inherit" }}
              aria-label="Tidal Film crew working with professional camera equipment during a video production"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTidal;
