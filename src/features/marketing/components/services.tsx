import { ChevronRight } from 'lucide-react';

import { services } from '@/features/marketing/data';
import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';

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
          {services.map(([number, title, description], index) => (
            <Reveal key={number} delay={index * .025}>
              <div className="service-row" data-testid={`service-row-${number}`}>
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ChevronRight size={17} className="muted-copy" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
