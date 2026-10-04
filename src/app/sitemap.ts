import type { MetadataRoute } from 'next';

import { blogPath, blogPosts, postLastModified } from '@/features/blog/data';
import { servicePages, servicePath } from '@/features/services/data';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const latestPost = blogPosts.map(postLastModified).sort().at(-1);
  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/layanan'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...servicePages.map((page) => ({
      url: absoluteUrl(servicePath(page.slug)),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl('/blog'),
      lastModified: latestPost ? new Date(latestPost) : lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: absoluteUrl(blogPath(post.slug)),
      lastModified: new Date(postLastModified(post)),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
