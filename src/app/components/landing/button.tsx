"use client";
import Image from "next/image";

type FilledButtonProps = {
  text: string;
  className?: string;
  ariaLabel?: string;
};

export const FilledButton = ({ text, className, ariaLabel }: FilledButtonProps) => {
  return (
    <button
      className={` font-semibold !font-jost h-[44px] text-sm leading-[24px] tracking-[0.1em] bg-[#FE5F55] hover:bg-[#d84037] hover:text-white hover:border-[#d84037] transition-all duration-500 text-white px-6 py-3 rounded-full uppercase cursor-pointer${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
};

export const UnFilledButton = ({ text, className, ariaLabel }: FilledButtonProps) => {
  return (
    <button
      className={`h-[44px] border !font-jost border-white px-5 py-2.5 rounded-full text-sm  uppercase cursor-pointer leading-[24px] tracking-[0.1em] bg-transparent text-white  hover:bg-[#d84037] hover:text-white hover:border-[#d84037] font-semibold transition-all duration-100${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
};