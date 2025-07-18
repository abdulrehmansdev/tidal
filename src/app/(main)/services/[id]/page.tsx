import FeelingHero from "../../../components/landing/feeling";
import TestimonialsSlider from "../../../components/landing/slider";
import Touch from "../../../components/landing/touch";
import Trusted from "../../../components/landing/trusted";
import FAQ from "../../../components/services/FAQ";
import ServiceDetail from "../../../components/services/ServiceDetail";
import WorkSlider from "../../../components/services/WorkSlider";
import Brief from "../../../components/work/brief";
import Concept from "../../../components/work/concept";
import Outcomes from "../../../components/work/Outcomes";
import { ServiceDetailPageProps } from "../../../utils/types";

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { id } = params;
  return (
    <>
      <ServiceDetail id={parseInt(id)} />
      <WorkSlider />
      <Brief />
      <Concept />
      <Outcomes />

      <FeelingHero />
      <TestimonialsSlider />
      <Trusted />
      <FAQ />
      <Touch />
    </>
  );
}
