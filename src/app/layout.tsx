import type { Metadata, Viewport } from 'next';

import { ErrorBoundary } from '@/components/error-boundary';
import { Providers } from '@/components/providers';
import { RoutedErrorBoundary } from '@/components/routed-error-boundary';
import { siteConfig } from '@/config/site';

import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
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
        <ErrorBoundary>
          <Providers>
            <RoutedErrorBoundary>{children}</RoutedErrorBoundary>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
