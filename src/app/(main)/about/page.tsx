import AboutTidal from "../../components/about/abouttidal";
import Creative from "../../components/about/creative";
import PostProduction from "../../components/about/post";
import Production from "../../components/about/production";
import Slideshow from "../../components/about/slideshow";
import TestimonialsSlider from "../../components/landing/slider";
import Touch from "../../components/landing/touch";
import Trusted from "../../components/landing/trusted";
import WorkSlider from "../../components/services/WorkSlider";

export default function Home() {
  return (
    <div>
      <AboutTidal />
      <Slideshow />
      <Creative />
      <Production />
      <PostProduction />
      <WorkSlider />
      <TestimonialsSlider />
      <Trusted />
      <Touch />
    </div>
  );
}
