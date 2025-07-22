"use client";
import Image from "next/image";
import { useWork } from "../../services/workService";

const WorkShowcase = () => {
  const { data: workData, isLoading, error } = useWork();

  if (isLoading) {
    return (
      <section className="bg-dark-blue px-6 py-16">
        <div className="max-w-5/6 mx-auto text-center">
          <div className="text-[#225f71]">Loading work items...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-dark-blue px-6 py-16">
        <div className="max-w-5/6 mx-auto text-center">
          <div className="text-[#ff4b5c]">
            {typeof error === "string"
              ? error
              : "An error occurred while loading work items. Please try again later."}
          </div>
        </div>
      </section>
    );
  }

  if (!workData) {
    return (
      <section className="bg-dark-blue px-6 py-16">
        <div className="max-w-5/6 mx-auto text-center">
          <div className="text-[#ff4b5c]">No work items found.</div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-dark-blue px-6  py-16">
      <div className="max-w-5/6 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-blue">
            Our Work
          </h2>
          <button
            className="bg-[#ff645a] hover:bg-[#ff4b3f] text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider cursor-pointer"
            aria-label="View More Work"
          >
            View More Work
          </button>
        </div>

        {/* Custom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Row 1 - 2 items spanning 3 cols each */}
          {workData.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="col-span-1 sm:col-span-1 lg:col-span-3 rounded-xl overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                layout="responsive"
                className="rounded-xl object-cover"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-[#33728a] mt-1">{item.category}</p>
              </div>
            </div>
          ))}

          {/* Row 2 - 3 items, each spans 2 cols */}
          {workData.slice(2).map((item) => (
            <div
              key={item.id}
              className="col-span-1 sm:col-span-1 lg:col-span-2 rounded-xl overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                layout="responsive"
                className="rounded-xl object-cover"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-[#33728a] mt-1">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
