'use client';

import Link from 'next/link';

import { Logo } from '@/components/layout/logo';
import { siteConfig } from '@/config/site';
import { servicePages, servicePath } from '@/features/services/data';
import { openWhatsApp } from '@/lib/whatsapp';

export function SiteFooter() {
  const navigation = [['Layanan', '/layanan'], ['Solusi', '/#solutions'], ['Karya', '/#work'], ['Tentang', '/#about'], ['Kontak', '/#contact']];
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-brand"><Logo /><p>Software yang dibangun mengikuti bisnis Anda.</p></div>
          <div><h3>Navigasi</h3>{navigation.map(([label, href]) => <Link href={href} key={href} data-testid={`link-footer-${label.toLowerCase()}`}>{label}</Link>)}</div>
          <div><h3>Layanan</h3>{servicePages.map((page) => <Link href={servicePath(page.slug)} key={page.slug}>{page.name}</Link>)}</div>
          <div><h3>Kontak</h3><button onClick={() => openWhatsApp(undefined, 'footer')} data-testid="button-footer-whatsapp">WhatsApp</button><button onClick={() => window.location.href = `mailto:${siteConfig.email}`} data-testid="button-footer-email">Email</button><Link href="/#contact" data-testid="link-footer-inquiry">Konsultasi proyek</Link></div>
        </div>
        <div className="footer-bottom"><span>© 2026 HokiDev. Hak cipta dilindungi.</span><span>Software house independen / dibuat dengan sepenuh hati</span></div>
      </div>
    </footer>
  );
}
