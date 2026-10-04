import type { ServiceSlug } from '@/features/services/data';

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  relatedServices: ServiceSlug[];
  content: Block[];
  faqs?: [question: string, answer: string][];
};
