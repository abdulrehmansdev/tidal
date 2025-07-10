import { useQuery } from "@tanstack/react-query";
import workData from "../data/work.json";
import { Work } from "../utils/types";

export const fetchWork = (): Work[] => {
  return workData;
};

export const useWork = () => {
  return useQuery({
    queryKey: ["work"],
    queryFn: fetchWork,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};
