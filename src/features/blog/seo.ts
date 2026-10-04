import { blogPath, plainText, type BlogPost } from '@/features/blog/data';
import { siteConfig } from '@/config/site';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  organizationId,
  type Crumb,
} from '@/lib/seo';

export const blogCrumbs: Crumb[] = [
  { name: 'Beranda', href: '/' },
  { name: 'Blog', href: '/blog' },
];

export function postCrumbs(post: BlogPost): Crumb[] {
  return [...blogCrumbs, { name: post.title, href: blogPath(post.slug) }];
}

export function blogIndexJsonLd(posts: BlogPost[]) {
  const url = absoluteUrl('/blog');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        name: `Blog ${siteConfig.name}`,
        url,
        inLanguage: 'id-ID',
        publisher: { '@id': organizationId },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: absoluteUrl(blogPath(post.slug)),
          datePublished: post.publishedAt,
        })),
      },
      breadcrumbJsonLd(blogCrumbs),
    ],
  };
}

export function postJsonLd(post: BlogPost) {
  const url = absoluteUrl(blogPath(post.slug));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        keywords: post.keyword,
        url,
        mainEntityOfPage: url,
        inLanguage: 'id-ID',
        image: `${siteConfig.url}/opengraph-image`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: { '@id': organizationId },
        publisher: { '@id': organizationId },
      },
      breadcrumbJsonLd(postCrumbs(post)),
      ...(post.faqs?.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faqs.map(([question, answer]) => ({
                '@type': 'Question',
                name: question,
                acceptedAnswer: { '@type': 'Answer', text: plainText(answer) },
              })),
            },
          ]
        : []),
    ],
  };
}
