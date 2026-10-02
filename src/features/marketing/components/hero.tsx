'use client';

import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { ProductCollage } from '@/features/marketing/components/product-collage';
import { Reveal } from '@/features/marketing/components/reveal';
import { openWhatsApp } from '@/lib/whatsapp';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container-wide hero-grid">
        <Reveal>
          <div className="eyebrow">Software house independen / Indonesia</div>
          <h1>Software yang <em>mengikuti</em> cara bisnis Anda.</h1>
          <p className="hero-intro">Dari website dan aplikasi mobile sampai sistem bisnis custom, HokiDev mengubah ide dan masalah operasional menjadi produk digital yang pas dengan cara kerja Anda sehari-hari.</p>
          <div className="hero-actions">
            <button className="button-primary" onClick={() => openWhatsApp(undefined, 'hero')} data-testid="button-hero-project">Mulai Proyek <ArrowUpRight size={15} /></button>
            <a className="button-secondary" href="#services" data-testid="link-hero-explore">Lihat Layanan Kami <ArrowDownRight size={15} /></a>
          </div>
          <div className="hero-meta">
            <div><strong>01 — Pahami</strong>operasionalnya dulu</div>
            <div><strong>02 — Bangun</strong>yang benar-benar berguna</div>
            <div><strong>03 — Tumbuh</strong>bersama bisnis Anda</div>
          </div>
        </Reveal>
        <Reveal delay={.13}><ProductCollage /></Reveal>
      </div>
    </section>
  );
}
