import Creative from "../../components/about/creative";
import PostProduction from "../../components/about/post";
import Production from "../../components/about/production";
import FeelingHero from "../../components/landing/feeling";
import TestimonialsSlider from "../../components/landing/slider";
import Trusted from "../../components/landing/trusted";
import OurServices from "../../components/services/ourService";
import SelectAService from "../../components/services/SelectAService";
import Touch from "../../components/landing/touch";
import WorkSlider from "../../components/services/WorkSlider";

export default function ServicePage() {
  return (
    <>
      <OurServices />
      <SelectAService />
      <Creative />
      <Production />
      <PostProduction />
      <WorkSlider />
      <FeelingHero />
      <TestimonialsSlider />
      <Trusted />
      <Touch />
    </>
  );
}
