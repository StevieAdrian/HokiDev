'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { Logo } from '@/components/layout/logo';
import { ServicesMenu } from '@/components/layout/services-menu';
import { servicePages, servicePath } from '@/features/services/data';
import { openWhatsApp } from '@/lib/whatsapp';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Solusi', '/#solutions'],
    ['Karya', '/#work'],
    ['Tentang', '/#about'],
  ];
  return (
    <header className="topbar">
      <div className="container-wide topbar-inner">
        <Logo preload />
        <nav className="nav-links" aria-label="Navigasi utama">
          <ServicesMenu />
          {links.map(([label, href]) => (
            <Link className="nav-link" href={href} key={href} data-testid={`link-nav-${label.toLowerCase()}`}>{label}</Link>
          ))}
        </nav>
        <button
          className="button-primary topbar-cta"
          onClick={() => openWhatsApp(undefined, 'nav_desktop')}
          data-testid="button-nav-project"
        >
          Mulai Proyek <ArrowUpRight size={14} />
        </button>
        <button
          className="mobile-trigger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Navigasi mobile"
          >
            <div className="container-wide">
              <Link href="/layanan" onClick={() => setMenuOpen(false)} data-testid="link-mobile-layanan">Layanan Kami</Link>
              <ul className="mobile-sublinks" aria-label="Layanan">
                {servicePages.map((page) => (
                  <li key={page.slug}>
                    <Link href={servicePath(page.slug)} onClick={() => setMenuOpen(false)}>{page.name}</Link>
                  </li>
                ))}
              </ul>
              {links.map(([label, href]) => (
                <Link href={href} key={href} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-${label.toLowerCase()}`}>{label}</Link>
              ))}
              <button className="button-primary" onClick={() => { setMenuOpen(false); openWhatsApp(undefined, 'nav_mobile'); }} data-testid="button-mobile-project">
                Mulai Proyek <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
