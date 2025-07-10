import { useQuery } from "@tanstack/react-query";
import newsData from "../data/news.json";
import { NewsItem } from "../utils/types";

export const fetchNews = (): NewsItem[] => {
  return newsData.map((item) => ({
    ...item,
    detail1: item.detail1 ?? "",
    detail2: item.detail2 ?? "",
  }));
};

export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

export const useNewsItem = (id: number) => {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => fetchNews().find((item) => item.id === id),
  });
};
