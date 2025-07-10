import { useQuery } from "@tanstack/react-query";
import servicesData from "../data/services.json";
import { Service } from "../utils/types";

export const fetchServices = (): Service[] => {
  return servicesData;
};

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};

export const useService = (id: number) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => fetchServices().find((service) => service.id === id),
  });
};
