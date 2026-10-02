import { ArrowDownRight } from 'lucide-react';

import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';
import { Breadcrumbs } from '@/features/services/components/breadcrumbs';
import {
  rowNumber,
  ServiceRowLink,
} from '@/features/services/components/service-row-link';
import { WhatsAppCta } from '@/features/services/components/whatsapp-cta';
import {
  getRelatedServices,
  servicePath,
  type ServicePage,
} from '@/features/services/data';
import { serviceCrumbs } from '@/features/services/seo';

export function ServiceDetail({ service }: { service: ServicePage }) {
  const related = getRelatedServices(service);

  return (
    <>
      <section className="svc-hero">
        <div className="container-wide">
          <Breadcrumbs items={serviceCrumbs(service)} />
          <Reveal>
            <h1>
              {service.h1} <em>{service.h1Accent}</em>
            </h1>
            <p className="hero-intro">{service.intro}</p>
            <div className="hero-actions">
              <WhatsAppCta
                message={service.whatsappMessage}
                source={`${service.slug}-hero`}
              />
              <a className="button-secondary" href="#faq">
                Pertanyaan Umum <ArrowDownRight size={15} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide svc-split">
          <Reveal>
            <SectionLabel>Gambaran layanan</SectionLabel>
            <h2>{service.overview.heading}</h2>
          </Reveal>
          <Reveal delay={0.08} className="svc-prose">
            {service.overview.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="problem section-space">
        <div className="container-wide problem-grid">
          <Reveal>
            <SectionLabel>Cocok untuk</SectionLabel>
            <h2>
              Siapa yang <em>paling terbantu?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="problem-list" role="list">
              {service.audiences.map((audience, index) => (
                <li className="problem-item" key={audience}>
                  <span>{rowNumber(index)}</span>
                  {audience}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide">
          <Reveal>
            <div className="section-heading">
              <div>
                <SectionLabel>Yang Anda dapatkan</SectionLabel>
                <h2>Cakupan layanan</h2>
              </div>
              <p>{service.summary}</p>
            </div>
          </Reveal>
          <div className="why-grid">
            {service.deliverables.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <div className="why-item">
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions section-space">
        <div className="container-wide">
          <Reveal>
            <div className="section-heading">
              <div>
                <SectionLabel>Proses kerja</SectionLabel>
                <h2>Bagaimana kami bekerja</h2>
              </div>
              <p>
                Setiap tahap transparan. Anda selalu tahu apa yang sedang
                dikerjakan dan apa langkah berikutnya.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ol className="service-list svc-steps" role="list">
              {service.process.map(([title, copy], index) => (
                <li className="service-row" key={title}>
                  <span className="service-number">{rowNumber(index)}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide svc-split">
          <Reveal>
            <SectionLabel>Biaya</SectionLabel>
            <h2>Berapa biaya {service.keyword}?</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="svc-prose">
              {service.pricing.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <ul
              className="svc-checklist"
              aria-label="Faktor yang memengaruhi biaya"
            >
              {service.pricing.factors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="solutions section-space" id="faq">
        <div className="container-wide svc-split">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2>Pertanyaan yang sering diajukan</h2>
          </Reveal>
          {/* Native <details> keeps every answer in the HTML for crawlers. */}
          <div className="svc-faq">
            {service.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide">
          <Reveal>
            <div className="section-heading">
              <div>
                <SectionLabel>Layanan terkait</SectionLabel>
                <h2>Juga bisa kami bantu</h2>
              </div>
            </div>
          </Reveal>
          <div className="service-list">
            {related.map((page, index) => (
              <ServiceRowLink
                key={page.slug}
                href={servicePath(page.slug)}
                number={rowNumber(index)}
                title={page.name}
                description={page.summary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section section-space">
        <div className="container-wide cta-layout">
          <Reveal>
            <SectionLabel>Mulai dari diskusi</SectionLabel>
            <h2>
              Siap membahas <em>proyek Anda?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cta-copy muted-copy">
              Ceritakan kebutuhan Anda. Kami bantu petakan solusinya, lengkap
              dengan estimasi biaya dan waktu pengerjaan.
              <div className="cta-actions">
                <WhatsAppCta
                  message={service.whatsappMessage}
                  source={`${service.slug}-cta`}
                  label="Ngobrol dengan HokiDev"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
