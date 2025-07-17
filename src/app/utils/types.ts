export interface Work {
  id: number;
  title: string;
  category: string;
  image: string;
}
export interface Service {
  id: number;
  title: string;
  slug: string;
  image: string;
  briefText: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  logo: string;
  quoteIcon: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  detail1: string;
  detail2: string;
  tags?: string[];
}

export interface NewsDetailPageProps {
  readonly params: {
    readonly id: string;
  };
}

export interface ServiceDetailPageProps {
  readonly params: { readonly id: string };
}
