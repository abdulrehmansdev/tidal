import Image from "next/image";

export default function TrustedByBrands() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: "url('/wave.svg')" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Trusted By Brands, Made For People
        </h2>
        <p className="text-lg sm:text-xl text-white mb-8">
          We’ve worked with companies across the UK — but it’s the individuals
          behind the brands that matter most. Every video we create is a
          collaboration, crafted to connect with real people and spark real
          impact.
        </p>
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-full text-lg hover:bg-red-600 transition cursor-pointer"
          aria-label="View All Work"
        >
          VIEW ALL WORK
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src="/logos.svg"
          alt="Brands logos"
          width={800}
          height={200}
          className="w-full max-w-4xl"
        />
      </div>
    </section>
  );
}
