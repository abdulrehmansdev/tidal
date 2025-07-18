"use client";
import { useWork } from "../../services/workService";

interface WorkDetailProps {
  id: string;
}

export default function WorkDetail({ id }: WorkDetailProps) {
  const { data, isLoading, isError } = useWork();

  if (isLoading) {
    return (
      <div className="text-center py-20 text-2xl text-gray-500">
        Loading work details...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-2xl text-red-500">
        Failed to load work details. Please try again later.
      </div>
    );
  }

  const work = (data as any[]).find((w) => String(w.id) === id);
  if (!work) {
    return (
      <div className="text-center py-20 text-2xl text-red-500">
        Work not found.
      </div>
    );
  }

  return (
    <div className="w-full px-6 md:px-20 mx-auto">
      <h1 className="font-[Montserrat] text-4xl md:text-7xl font-bold text-[#1C4062] mb-2">
        {work.title}
      </h1>
      <p className="font-[Montserrat] text-4xl text-[#1C4062] mb-6 font-medium">
        Creating A Powerful TV Ad For Their Campaign
        <br />
        ‘You Could Make A Difference’
      </p>
      <div className="w-full  overflow-hidden mb-8">
        <video
          src={work.video}
          //   poster={work.image}
          controls
          className="w-full h-180 object-cover object-center bg-black"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="flex flex-wrap gap-2 mb-4">
        {work.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#f5f7ff] text-[#1a2343] rounded-full border border-[#dbeafe] text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-base text-[#1a2343] mb-2">
        <strong>Type:</strong> {work.type}
      </div>
      <div className="text-base text-[#6b7280]">
        <strong>Category:</strong> {work.category}
      </div> */}
    </div>
  );
}
