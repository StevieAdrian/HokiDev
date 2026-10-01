'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { showcaseData, type ShowcaseKey } from '@/features/marketing/data';
import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';

function ShowcasePanel({ data }: { data: typeof showcaseData[ShowcaseKey] }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={data.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }} className="showcase-body">
        <div className="metric-grid">
          {data.metrics.map(([label, value]) => <div className="metric-box" key={label}><small>{label}</small><strong>{value}</strong></div>)}
        </div>
        <div className="demo-grid">
          <div className="demo-panel"><h4>Ringkasan aktivitas</h4><div className="demo-bars">{data.bars.map((height, index) => <span className="demo-bar" style={{ height: `${height}%` }} key={`${height}-${index}`} />)}</div></div>
          <div className="demo-panel"><h4>Aktivitas terbaru</h4><div className="demo-list">{data.rows.slice(0, 3).map(([label, value]) => <div className="demo-list-row" key={label}><span>{label}</span><span>{value}</span></div>)}</div></div>
        </div>
        <p className="showcase-footnote">Antarmuka demonstrasi — data contoh untuk menggambarkan kemampuan produk, bukan sistem klien yang sedang berjalan.</p>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProductShowcase() {
  const [active, setActive] = useState<ShowcaseKey>('Dashboard');
  const tabs = Object.keys(showcaseData) as ShowcaseKey[];
  return (
    <section className="showcase section-space" id="showcase">
      <div className="container-wide">
        <Reveal>
          <div className="section-heading">
            <div><SectionLabel>Di balik layar</SectionLabel><h2>Produk dengan tujuan yang jelas.</h2></div>
            <p>Bukan sekadar dashboard pajangan. Setiap layar berawal dari pertanyaan yang perlu dijawab bisnis Anda.</p>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <div className="showcase-shell">
            <div className="showcase-tabs" role="tablist" aria-label="Contoh produk">
              {tabs.map((tab) => <button className={active === tab ? 'active' : ''} key={tab} onClick={() => setActive(tab)} role="tab" aria-selected={active === tab} data-testid={`tab-showcase-${tab.toLowerCase().replaceAll(' ', '-')}`}>{tab}</button>)}
            </div>
            <div className="showcase-view">
              <div className="showcase-top"><div><small>{showcaseData[active].eyebrow}</small><h3>{showcaseData[active].title}</h3></div><span className="demo-label">HOKI / DEMO</span></div>
              <ShowcasePanel data={showcaseData[active]} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
