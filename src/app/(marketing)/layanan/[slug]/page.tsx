import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/features/services/components/json-ld';
import { LocalServiceDetail } from '@/features/services/components/local-service-detail';
import { ServiceDetail } from '@/features/services/components/service-detail';
import {
  getServicePage,
  servicePages,
  servicePath,
} from '@/features/services/data';
import {
  getLocalServicePage,
  localServiceJsonLd,
  localServicePages,
  localServicePath,
} from '@/features/services/local-data';
import { serviceJsonLd } from '@/features/services/seo';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...servicePages.map(({ slug }) => ({ slug })),
    ...localServicePages.map(({ slug }) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: PageProps<'/layanan/[slug]'>): Promise<Metadata> {
  const { slug } = await params;

  const service = getServicePage(slug);
  if (service) {
    return pageMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: servicePath(service.slug),
    });
  }

  const local = getLocalServicePage(slug);
  if (local) {
    return pageMetadata({
      title: local.metaTitle,
      description: local.metaDescription,
      path: localServicePath(local.slug),
    });
  }

  return {};
}

export default async function ServicePage({
  params,
}: PageProps<'/layanan/[slug]'>) {
  const { slug } = await params;

  const service = getServicePage(slug);
  if (service) {
    return (
      <>
        <JsonLd data={serviceJsonLd(service)} />
        <ServiceDetail service={service} />
      </>
    );
  }

  const local = getLocalServicePage(slug);
  if (local) {
    return (
      <>
        <JsonLd data={localServiceJsonLd(local)} />
        <LocalServiceDetail service={local} />
      </>
    );
  }

  notFound();
}
