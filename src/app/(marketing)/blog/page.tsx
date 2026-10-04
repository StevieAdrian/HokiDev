import type { Metadata } from 'next';

import { BlogIndex } from '@/features/blog/components/blog-index';
import { blogPosts } from '@/features/blog/data';
import { blogIndexJsonLd } from '@/features/blog/seo';
import { JsonLd } from '@/features/services/components/json-ld';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Blog: Panduan Pembuatan Software & Aplikasi untuk Bisnis | HokiDev',
  description:
    'Artikel dan panduan seputar pembuatan software, aplikasi, dan website untuk bisnis: biaya, cara memilih software house, dan keputusan teknologi.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={blogIndexJsonLd(blogPosts)} />
      <BlogIndex />
    </>
  );
}
