"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What kind of brands do you work with?",
    answer: (
      <>
        <p>
          At Tidal Film, we have the privilege of partnering with a wide variety
          of brands across industries, from established organisations to growing
          businesses looking to elevate their storytelling. Our clients include
          SMEs, charities, and national brands who trust us to craft compelling
          visual content that engages and inspires.
        </p>
        <br />
        <p>
          We specialise in working with brands that value creativity and
          meaningful connections with their audiences. Whether you're launching
          a new campaign, showcasing your impact as a charity, or building a
          stronger brand presence, we align with forward-thinking organisations
          that share our passion for storytelling and making a difference.
        </p>
      </>
    ),
  },
  {
    question: "What is your average project price?",
    answer: (
      <p>
        Our project pricing varies depending on the scope and requirements.
        Contact us for a tailored quote.
      </p>
    ),
  },
  {
    question: "What is included with your Services?",
    answer: (
      <p>
        We offer end-to-end video production, including concept, filming,
        editing, and delivery.
      </p>
    ),
  },
  {
    question: "Where are you located and do I need to be local?",
    answer: (
      <p>
        We are based in Southend-on-Sea but work with clients across the UK and
        beyond.
      </p>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#f7f8fa] py-16 px-2 px-6 md:px-20 flex">
      <div className="w-full  mx-auto flex flex-col md:flex-row gap-8 mb-8">
        {/* Left: Heading */}
        <div className="flex-1 min-w-[320px] flex items-start">
          <h2 className="font-[montserrat] text-3xl md:text-6xl font-extrabold text-[#23456a] leading-tight">
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>
        {/* Right: Accordion */}
        <div className="font-[montserrat] flex-1 max-w-3xl w-full">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="border-b border-gray-300 py-4">
              <button
                className="w-full flex justify-between items-center text-left text-[#23456a] font-semibold text-lg md:text-xl focus:outline-none cursor-pointer"
                aria-label={`Toggle FAQ: ${faq.question}`}
                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              >
                <span>{faq.question}</span>
                {openIndex === idx ? (
                  <img
                    src="/services/minus.svg"
                    alt="Collapse"
                    className="ml-4 w-6 h-6 transition-transform duration-200"
                  />
                ) : (
                  <img
                    src="/services/plus.svg"
                    alt="Expand"
                    className="ml-4 w-6 h-6 transition-transform duration-200"
                  />
                )}
              </button>
              {openIndex === idx && (
                <div className="mt-4 text-[#23456a] text-base md:text-lg animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
