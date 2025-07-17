import Image from "next/image";
import React from "react";

const GetInTouch = () => {
  return (
    <section className="w-full min-h-[70vh] relative flex flex-col md:flex-row items-stretch justify-center py-22 px-6 md:px-20">
      <Image
        src="/wave.svg" // Place your background image in public/trusted-bg.png
        alt="Background"
        fill
        className="object-cover object-top z-0 opacity-70"
        priority
      />
      {/* Left: Contact Info & Book a Meeting */}
      <div className="font-[montserrat] flex-1 flex flex-col justify-start text-white z-10 ">
        <div className="max-w-md">
          <p className="mb-8 text-lg leading-relaxed">
            Fill out the form to the right and we will get back to you soon.
            Alternatively, send us a direct email or give us a call using the
            details below.
          </p>
          <div className="mb-4">
            <span className="block text-base mb-1">Phone</span>
            <span className="text-2xl font-semibold tracking-wide">
              01702 597 070
            </span>
          </div>
          <div className="mb-8">
            <span className="block text-base mb-1">Email</span>
            <span className="text-xl font-bold tracking-wide">
              info@tidal-film.co.uk
            </span>
          </div>
          <button
            className="mt-2 px-8 py-3 bg-[#FE5F55] hover:bg-[#ff2e3a] text-white font-bold rounded-full text-base shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Book a meeting"
          >
            BOOK A MEETING
          </button>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="flex-1 flex justify-end items-center z-20">
        <form className="w-full max-w-xl bg-[#f7f8fa] rounded-xl shadow-2xl p-8 md:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-[#218199] mb-2">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-[#0b223a]">
                Name
              </label>
              <input
                type="text"
                placeholder="That's you!"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#218199] bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#0b223a]">
                Email
              </label>
              <input
                type="email"
                placeholder="So we can reply"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#218199] bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#0b223a]">
                Company
              </label>
              <input
                type="text"
                placeholder="Where you work or own"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#218199] bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#0b223a]">
                Phone
              </label>
              <input
                type="text"
                placeholder="Brrrrrrriinngggg"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#218199] bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#0b223a]">
              Message
            </label>
            <textarea
              placeholder="How can we help?"
              rows={4}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#218199] bg-white resize-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              className="accent-[#218199] w-5 h-5"
            />
            <label htmlFor="privacy" className="text-[#0b223a] text-sm">
              I accept the{" "}
              <a href="#" className="underline text-[#218199]">
                privacy policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-2 px-8 py-3 bg-[#FE5F55] hover:bg-[#ff2e3a] text-white font-bold rounded-full text-base shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Send message"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
