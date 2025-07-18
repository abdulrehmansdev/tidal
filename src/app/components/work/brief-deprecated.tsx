"use client";
import Image from "next/image";
import { useWork } from "../../services/workService";
interface WorkDetailProps {
  id: string;
}

export default function PostProduction({ id }: WorkDetailProps) {
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
  if (!work)
    return (
      <div className="text-center py-20 text-2xl text-red-500">
        Work not found.
      </div>
    );
  return (
    <div className="bg-[#f7f8fa] min-h-screen py-8 px-4 md:px-12 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="md:w-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#22305a] leading-tight">
              <span>The-</span>
              <br className="md:hidden" />
              <span>Brief</span>
            </h1>
            <div className="w-20 h-1 bg-[#ff6b6b] mt-2 mb-6" />
          </div>
          <div className="md:w-2/3 md:pl-8 mt-2 md:mt-0">
            <p className="text-[#22305a] text-base md:text-lg leading-relaxed">
              {work.briefText}
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-6">
          {/* First row: 1st and 2nd images, 1st is larger */}
          <div className="flex gap-6">
            <div className="flex-1 rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
              <Image
                src={work.brief1}
                alt="Woman in field"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                priority
              />
            </div>
            <div className="flex md:items-end">
              <div className=" rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                <Image
                  src={work.brief2}
                  alt="Coffee cup"
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Second row: 3rd and 4th images, 4th is larger */}
          <div className="flex gap-6">
            <div className="  flex  md:items-start">
              <div className="rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                <Image
                  src={work.brief3}
                  alt="Surfer"
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
              <Image
                src={work.brief4}
                alt="City street"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
