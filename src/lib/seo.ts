import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const organizationId = `${siteConfig.url}/#organization`;

export const absoluteUrl = (path: string) =>
  path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;

const shareImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: siteConfig.title,
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [shareImage.url],
    },
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  };
}
