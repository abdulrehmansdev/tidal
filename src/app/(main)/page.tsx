import React from "react";
import Hero from "../components/landing/hero";
import FeelingSection from "../components/landing/feeling";
import WorkGrid from "../components/landing/work";
import OurServicesSection from "../components/landing/service";
import TestimonialsSlider from "../components/landing/slider";
import Trusted from "../components/landing/trusted";

// export const metadata = {
//     title: 'Emergency Dentists UK - 24/7 Urgent Dental Care',
// };

export default function Home() {
  return (
    <section className="">
      <Hero />
      <FeelingSection />
      <WorkGrid />
      <OurServicesSection />
      <TestimonialsSlider />
      {/* <Trusted />
      <Touch /> */}
    </section>
  );
}
