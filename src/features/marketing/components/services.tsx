import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

import { services } from '@/features/marketing/data';
import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';
import { servicePath, type ServiceSlug } from '@/features/services/data';

const serviceSlugs: Record<string, ServiceSlug> = {
  '01': 'jasa-pembuatan-website',
  '02': 'jasa-pembuatan-aplikasi',
  '03': 'jasa-pembuatan-software',
  '04': 'jasa-pembuatan-software',
  '05': 'jasa-pembuatan-software',
  '06': 'jasa-pembuatan-software',
  '07': 'jasa-pembuatan-software',
  '08': 'jasa-seo',
};

export function Services() {
  return (
    <section className="section-space" id="services">
      <div className="container-wide">
        <Reveal>
          <div className="section-heading">
            <div><SectionLabel>Layanan</SectionLabel><h2>Apa yang kami bangun</h2></div>
            <p>Satu partner untuk produk yang dipakai pelanggan, tools internal, dan semua penghubung di antaranya.</p>
          </div>
        </Reveal>
        <div className="service-list">
          {services.map(([number, title, description], index) => {
            const slug = serviceSlugs[number];
            return (
              <Reveal key={number} delay={index * .025}>
                <Link className="svc-row-link" href={slug ? servicePath(slug) : '/layanan'}>
                  <div className="service-row" data-testid={`service-row-${number}`}>
                    <span className="service-number">{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ChevronRight size={17} className="muted-copy" aria-hidden="true" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="svc-more">
          <Link className="button-secondary" href="/layanan">Lihat Semua Layanan <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
