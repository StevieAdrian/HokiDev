import { work } from '@/features/marketing/data';
import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';

export function Work() {
  return (
    <section className="work section-space" id="work">
      <div className="container-wide">
        <Reveal><div className="section-heading"><div><SectionLabel>Arah yang kami tawarkan</SectionLabel><h2>Contoh karya</h2></div><p>Proyek konsep yang menunjukkan jenis produk yang bisa kami bangun. Tanpa klien, angka, atau klaim studi kasus yang dikarang.</p></div></Reveal>
        <div className="work-grid">{work.map(([title, industry, description, tags], index) => <Reveal key={title} delay={index * .05}><article className="work-card" data-testid={`card-work-${index}`}><div className="work-top"><span className="eyebrow">{industry}</span><span className="concept">Proyek konsep</span></div><div><h3>{title}</h3><p style={{ marginTop: 12 }}>{description}</p></div><div className="tags">{(tags as string[]).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article></Reveal>)}</div>
      </div>
    </section>
  );
}
