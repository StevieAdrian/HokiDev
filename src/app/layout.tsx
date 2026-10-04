import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ErrorBoundary } from '@/components/error-boundary';
import { Providers } from '@/components/providers';
import { RoutedErrorBoundary } from '@/components/routed-error-boundary';
import { siteConfig } from '@/config/site';
import { organizationId } from '@/lib/seo';
import { publicEnv } from '@/lib/env';

import '@/styles/globals.css';
import '@/styles/services.css';
import '@/styles/blog.css';
import '@/styles/site-nav.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  alternates: { canonical: '/' },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': organizationId,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: 'ID',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ErrorBoundary>
          <Providers>
            <RoutedErrorBoundary>{children}</RoutedErrorBoundary>
          </Providers>
        </ErrorBoundary>
      </body>
      {publicEnv.gaId ? <GoogleAnalytics gaId={publicEnv.gaId} /> : null}
    </html>
  );
}
