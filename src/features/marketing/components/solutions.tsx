import { solutionGroups } from '@/features/marketing/data';
import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';

export function Solutions() {
  return (
    <section className="solutions section-space" id="solutions">
      <div className="container-wide">
        <Reveal>
          <div className="section-heading">
            <div><SectionLabel>Ragam produk</SectionLabel><h2>Satu partner.<br /><span className="serif">Banyak solusi digital.</span></h2></div>
            <p>Produknya berbeda-beda, pendekatannya tetap sama: pahami konteksnya, sederhanakan kerumitannya, dan pastikan hasilnya mudah dirawat.</p>
          </div>
        </Reveal>
        <div className="solution-grid">
          {solutionGroups.map(([title, items], index) => (
            <Reveal key={title as string} delay={index * .06}>
              <div className="solution-col">
                <h3>{title as string}</h3>
                <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
