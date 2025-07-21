import TestimonialsSlider from "@/app/components/landing/slider";
import WorkSlider from "../../../components/services/WorkSlider";
import Brief from "../../../components/work/brief";
import PostProduction from "../../../components/work/brief-deprecated";
import Concept from "../../../components/work/concept";
import Production from "../../../components/work/concept";
import Outcomes from "../../../components/work/Outcomes";
import WorkDetail from "../../../components/work/WorkDetail";
import Trusted from "@/app/components/landing/trusted";
import Touch from "@/app/components/landing/touch";

interface WorkDetailPageProps {
  params: { id: string };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return (
    <div className="bg-offWhite min-h-screen py-12">
      <WorkDetail id={params?.id} />
      <Brief />
      <Concept />
      <Outcomes />
      <WorkSlider />
      <TestimonialsSlider />
      <Trusted />
      <Touch />
    </div>
  );
}
