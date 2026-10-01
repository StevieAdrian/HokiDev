'use client';

import { Logo } from '@/components/layout/logo';
import { siteConfig } from '@/config/site';
import { openWhatsApp } from '@/lib/whatsapp';

export function SiteFooter() {
  const navigation = [['Layanan', '#services'], ['Solusi', '#solutions'], ['Karya', '#work'], ['Tentang', '#about'], ['Kontak', '#contact']];
  const servicesFooter = ['Pengembangan Web', 'Pengembangan Mobile', 'Pengembangan Desktop', 'POS / Kasir', 'Software Custom', 'Integrasi API', 'SEO'];
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-brand"><Logo /><p>Software yang dibangun mengikuti bisnis Anda.</p></div>
          <div><h3>Navigasi</h3>{navigation.map(([label, href]) => <a href={href} key={href} data-testid={`link-footer-${label.toLowerCase()}`}>{label}</a>)}</div>
          <div><h3>Yang kami bangun</h3>{servicesFooter.map((item) => <button key={item} onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>{item}</button>)}</div>
          <div><h3>Kontak</h3><button onClick={() => openWhatsApp()} data-testid="button-footer-whatsapp">WhatsApp</button><button onClick={() => window.location.href = `mailto:${siteConfig.email}`} data-testid="button-footer-email">Email</button><a href="#contact" data-testid="link-footer-inquiry">Konsultasi proyek</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 HokiDev. Hak cipta dilindungi.</span><span>Software house independen / dibuat dengan sepenuh hati</span></div>
      </div>
    </footer>
  );
}
