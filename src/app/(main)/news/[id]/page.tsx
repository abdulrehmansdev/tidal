import Touch from "../../../components/landing/touch";
import NewsArticleBody from "../../../components/news/NewsArticleBody";
import NewsDetail from "../../../components/news/NewsDetail";
import MoreContent from "../../../components/news/MoreContent";
import { NewsDetailPageProps } from "../../../utils/types";

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = params;
  return (
    <>
      <NewsDetail id={parseInt(id)} />
      <NewsArticleBody id={parseInt(id)} />
      <Touch />
      <MoreContent />
    </>
  );
}
