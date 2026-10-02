import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/features/services/components/json-ld';
import { ServiceDetail } from '@/features/services/components/service-detail';
import {
  getServicePage,
  servicePages,
  servicePath,
} from '@/features/services/data';
import { serviceJsonLd } from '@/features/services/seo';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/layanan/[slug]'>): Promise<Metadata> {
  const service = getServicePage((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: servicePath(service.slug),
  });
}

export default async function ServicePage({
  params,
}: PageProps<'/layanan/[slug]'>) {
  const service = getServicePage((await params).slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <ServiceDetail service={service} />
    </>
  );
}
