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
    <div className="container mx-auto">
      <h1 className="font-[Montserrat] text-4xl md:text-7xl font-bold text-dark-blue mb-2">
        {work.title}
      </h1>
      <p className="font-[Montserrat] text-4xl text-dark-blue mb-6 font-medium">
        Creating A Powerful TV Ad For Their Campaign
        <br />
        ‘You Could Make A Difference’
      </p>
      <div className="w-full  overflow-hidden mb-8">
        <video
          src={work.video}
          controls
          className="w-full h-180 object-cover object-center bg-black"
        >
          Your browser does not support the video tag.
        </video>
      </div>      
    </div>
  );
}
