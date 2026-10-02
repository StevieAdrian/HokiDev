import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';
import { Breadcrumbs } from '@/features/services/components/breadcrumbs';
import {
  rowNumber,
  ServiceRowLink,
} from '@/features/services/components/service-row-link';
import { WhatsAppCta } from '@/features/services/components/whatsapp-cta';
import { servicePages, servicePath } from '@/features/services/data';
import { servicesCrumbs } from '@/features/services/seo';

export function ServicesIndex() {
  return (
    <>
      <section className="svc-hero">
        <div className="container-wide">
          <Breadcrumbs items={servicesCrumbs} />
          <Reveal>
            <h1>
              Layanan Kami. <em>Satu partner untuk semua kebutuhan digital.</em>
            </h1>
            <p className="hero-intro">
              Dari website dan aplikasi sampai software bisnis custom,
              konsultasi teknologi, dan SEO. Pilih layanan yang Anda butuhkan,
              atau ceritakan masalahnya dan kami bantu tentukan solusinya.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide">
          <Reveal>
            <div className="section-heading">
              <div>
                <SectionLabel>Layanan</SectionLabel>
                <h2>Apa yang bisa kami bantu</h2>
              </div>
              <p>
                Pilih layanan untuk melihat cakupan, proses kerja, biaya, dan
                FAQ.
              </p>
            </div>
          </Reveal>
          <div className="service-list">
            {servicePages.map((page, index) => (
              <Reveal key={page.slug} delay={index * 0.03}>
                <ServiceRowLink
                  href={servicePath(page.slug)}
                  number={rowNumber(index)}
                  title={page.name}
                  description={page.summary}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section section-space">
        <div className="container-wide cta-layout">
          <Reveal>
            <SectionLabel>Belum yakin?</SectionLabel>
            <h2>
              Ceritakan masalahnya, <em>kami bantu cari solusinya.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cta-copy muted-copy">
              Tidak perlu tahu istilah teknisnya. Cukup jelaskan apa yang ingin
              Anda capai atau apa yang sedang menghambat bisnis Anda.
              <div className="cta-actions">
                <WhatsAppCta
                  message="Halo HokiDev, saya ingin berdiskusi tentang kebutuhan digital bisnis saya."
                  source="layanan-cta"
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
