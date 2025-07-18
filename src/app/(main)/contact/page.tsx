"use client";
import React from "react";
import WorkSlider from "../../components/services/WorkSlider";
import Trusted from "../../components/landing/trusted";
import TestimonialsSlider from "../../components/landing/slider";
import StartStory from "../../components/contact/startStory";
import GetInTouch from "../../components/contact/GetInTouch";

export default function ContactPage() {
  return (
    <>
      <StartStory />
      <GetInTouch />
      <TestimonialsSlider />
      <Trusted />
      <WorkSlider />
    </>
  );
}
