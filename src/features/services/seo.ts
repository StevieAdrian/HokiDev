import { servicePath, type ServicePage } from '@/features/services/data';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  organizationId,
  type Crumb,
} from '@/lib/seo';

export const servicesCrumbs: Crumb[] = [
  { name: 'Beranda', href: '/' },
  { name: 'Layanan', href: '/layanan' },
];

export function serviceCrumbs(service: ServicePage): Crumb[] {
  return [
    ...servicesCrumbs,
    { name: service.name, href: servicePath(service.slug) },
  ];
}

export function servicesIndexJsonLd() {
  return {
    '@context': 'https://schema.org',
    ...breadcrumbJsonLd(servicesCrumbs),
  };
}

export function serviceJsonLd(service: ServicePage) {
  const url = absoluteUrl(servicePath(service.slug));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.name,
        serviceType: service.keyword,
        description: service.metaDescription,
        url,
        areaServed: { '@type': 'Country', name: 'Indonesia' },
        provider: { '@id': organizationId },
      },
      breadcrumbJsonLd(serviceCrumbs(service)),
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };
}
