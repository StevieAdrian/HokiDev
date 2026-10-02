import type { Metadata } from 'next';

import { JsonLd } from '@/features/services/components/json-ld';
import { ServicesIndex } from '@/features/services/components/services-index';
import { servicesIndexJsonLd } from '@/features/services/seo';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Layanan Kami: Website, Aplikasi, Software & SEO | HokiDev',
  description:
    'Layanan HokiDev: jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan software custom, konsultasi teknologi, dan jasa SEO untuk bisnis di Indonesia.',
  path: '/layanan',
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={servicesIndexJsonLd()} />
      <ServicesIndex />
    </>
  );
}
