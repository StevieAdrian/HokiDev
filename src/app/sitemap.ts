import type { MetadataRoute } from 'next';

import { servicePages, servicePath } from '@/features/services/data';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
  ];
}
