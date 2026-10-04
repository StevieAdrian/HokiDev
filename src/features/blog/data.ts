import { biayaPembuatanSoftware } from '@/features/blog/posts/biaya-pembuatan-software';
import { caraMemilihSoftwareHouse } from '@/features/blog/posts/cara-memilih-software-house';
import { softwareCustomVsSiapPakai } from '@/features/blog/posts/software-custom-vs-software-siap-pakai';
import type { Block, BlogPost } from '@/features/blog/types';
import type { ServiceSlug } from '@/features/services/data';

export type { Block, BlogPost } from '@/features/blog/types';

const posts: BlogPost[] = [
  biayaPembuatanSoftware,
  softwareCustomVsSiapPakai,
  caraMemilihSoftwareHouse,
];

export const postLastModified = (post: BlogPost) =>
  post.updatedAt ?? post.publishedAt;

export const blogPosts: BlogPost[] = [...posts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export const blogPath = (slug: string) => `/blog/${slug}`;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsForService(slug: ServiceSlug): BlogPost[] {
  return blogPosts.filter((post) => post.relatedServices.includes(slug));
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  const others = blogPosts.filter((other) => other.slug !== post.slug);
  const shared = others.filter((other) =>
    other.relatedServices.some((slug) => post.relatedServices.includes(slug)),
  );
  return [...shared, ...others.filter((o) => !shared.includes(o))].slice(
    0,
    limit,
  );
}

export const plainText = (text: string) =>
  text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');

export const headingId = (text: string) =>
  plainText(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

function blockText(block: Block): string {
  return 'items' in block ? block.items.join(' ') : block.text;
}

export function readingMinutes(post: BlogPost): number {
  const words = post.content
    .map((block) => plainText(blockText(block)))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso));
}
