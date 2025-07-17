import TestimonialsSlider from "../../components/landing/slider";
import Touch from "../../components/landing/touch";
import Trusted from "../../components/landing/trusted";
import WorkPortfolio from "../../components/work/work";

export default function Home() {
  return (
    <>
      <WorkPortfolio />
      <TestimonialsSlider />
      <Trusted />
      <Touch />
    </>
  );
}
