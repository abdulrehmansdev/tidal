import { useQuery } from "@tanstack/react-query";
import teamData from "../data/team.json";

export const fetchTeam = () => {
  return teamData;
};

export const useTeam = () => {
  return useQuery({
    queryKey: ["team"],
    queryFn: fetchTeam,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};
