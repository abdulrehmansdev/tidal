"use client";
import Image from "next/image";

const brands = [
  "/brands/action-for-children.png",
  "/brands/capstone.png",
  "/brands/essex-chambers.png",
  "/brands/food-farming.png",
  "/brands/havens.png",
  "/brands/ims.png",
  "/brands/kpmg.png",
  "/brands/louise-brown.png",
  "/brands/make-a-wish.png",
];

const BrandsSection = () => {
  return (
    <section className="bg-[#f6f6fd] px-6 md:px-20 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#225f71] text-center mb-12">
        Brands We’ve Worked With
      </h2>

      <div className="flex flex-col items-center gap-y-10 max-w-6xl mx-auto">
        {/* First row - 5 logos */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {brands.slice(0, 5).map((logo, index) => (
            <div key={index} className="w-28 sm:w-32 md:w-36">
              <Image
                src={logo}
                alt={`Brand logo ${index + 1}`}
                width={160}
                height={80}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Second row - 4 logos */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {brands.slice(5).map((logo, index) => (
            <div key={index + 5} className="w-28 sm:w-32 md:w-36">
              <Image
                src={logo}
                alt={`Brand logo ${index + 6}`}
                width={160}
                height={80}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
