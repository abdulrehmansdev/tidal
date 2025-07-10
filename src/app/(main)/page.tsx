import React from "react";
import Hero from "../components/landing/hero";
import FeelingSection from "../components/landing/feeling";
import workGrid from "../components/landing/work";

// export const metadata = {
//     title: 'Emergency Dentists UK - 24/7 Urgent Dental Care',
// };

export default function Home() {
  return (
    <section className="">
      <Hero />
      <FeelingSection />
      <WorkGrid />
    </section>
  );
}
