import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostDetail } from '@/features/blog/components/post-detail';
import {
  blogPath,
  blogPosts,
  getBlogPost,
  postLastModified,
} from '@/features/blog/data';
import { postJsonLd } from '@/features/blog/seo';
import { JsonLd } from '@/features/services/components/json-ld';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  const base = pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: blogPath(post.slug),
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: postLastModified(post),
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<'/blog/[slug]'>) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={postJsonLd(post)} />
      <PostDetail post={post} />
    </>
  );
}
