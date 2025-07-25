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
    <div className="container mx-auto ">
      <div className="flex flex-col gap-y-5">
      <h1 className="font-[Montserrat] text-56 lg:text-76 text-dark-blue ">
        {work.title}
      </h1>
      <p className="font-[Montserrat] text-22 lg:text-36 text-dark-blue">
        Creating A Powerful TV Ad For Their Campaign
        <br />
        ‘You Could Make A Difference’
      </p>
      </div>
      <div className="w-full  overflow-hidden my-10">
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
