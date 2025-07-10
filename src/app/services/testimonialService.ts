import { useQuery } from "@tanstack/react-query";
import testimonialsData from "../data/testimonials.json";
import { Testimonial } from "../utils/types";

export const fetchTestimonials = (): Testimonial[] => {
  return testimonialsData;
};

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};
