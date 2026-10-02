import { Code2 } from 'lucide-react';

export function ProductCollage() {
  return (
    <div className="product-collage hero-visual" aria-label="Cuplikan antarmuka software custom">
      <div className="collage-frame collage-main">
        <div className="product-bar"><small>Hoki / Operasional</small><span className="accent">●</span></div>
        <div className="product-layout">
          <div className="product-side"><span /><span /><span /><span /><span /></div>
          <div>
            <div className="product-title">Ringkasan hari ini</div>
            <div className="mini-stats">
              <div className="mini-stat"><small>Pesanan</small><b>248</b></div>
              <div className="mini-stat"><small>Diproses</small><b>37</b></div>
              <div className="mini-stat"><small>Sesuai target</small><b>92%</b></div>
            </div>
            <div className="chart">
              <svg viewBox="0 0 420 120" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,97 C35,84 48,90 78,68 S120,83 151,59 S189,72 220,52 S264,65 295,38 S337,53 370,25 S395,30 420,16" fill="none" stroke="var(--c-indigo)" strokeWidth="2" />
                <path d="M0,97 C35,84 48,90 78,68 S120,83 151,59 S189,72 220,52 S264,65 295,38 S337,53 370,25 S395,30 420,16 V120 H0Z" fill="var(--c-indigo)" fillOpacity=".08" />
              </svg>
            </div>
            <small className="muted-copy mono">ALUR KERJA LIVE / 09:41:06</small>
          </div>
        </div>
      </div>
      <div className="collage-frame collage-note">
        <small>02 / STATUS API</small>
        <p>Semua sistem saling terhubung.<br />Tools Anda akhirnya saling bicara.</p>
        <Code2 size={18} />
      </div>
      <div className="collage-frame collage-mobile">
        <div className="mobile-ui">
          <header><b>lapangan / beranda</b><span className="accent">•••</span></header>
          <div className="mobile-image" />
          <div className="mobile-lines" /><div className="mobile-lines" style={{ width: '52%' }} />
        </div>
      </div>
      <div className="collage-frame collage-code">
        <span className="orange">const</span> business = <span className="orange">yourWorkflow</span>;<br />
        <span className="orange">return</span> build(business);<br />
        <span style={{ opacity: .52 }}>// praktis sejak awal</span>
      </div>
    </div>
  );
}
