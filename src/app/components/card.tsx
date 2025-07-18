import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const Card = ({
  title,
  category,
  spanColor,
  image,
}: {
  title: string;
  category: string;
  spanColor: string;
  image: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight);
    }
  }, [title, category]);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="rounded-xl object-cover w-full h-[200px] sm:h-[250px] lg:h-[350px] transition-all duration-300 group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        {/* Play icon with animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="bg-white/30 rounded-full p-4 shadow-lg hover:bg-white transition-colors duration-200">
              <Play className="w-8 h-8 text-dark-blue/60 fill-current" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-x-1 pl-1">
        <span
          className={`w-0.5 ${spanColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}
          style={{ height: divHeight ? `${divHeight}px` : undefined }}
          aria-hidden="true"
        />
        <div
          ref={divRef}
          className="group-hover:pl-1 transition-all duration-500"
        >
          <h3 className={`text-22 text-dark-blue`}>{title}</h3>
          <p className=" text-teal text-16">{category}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
