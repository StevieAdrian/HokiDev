'use client';

import { ArrowUpRight, MessageCircle } from 'lucide-react';

import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';
import { openWhatsApp } from '@/lib/whatsapp';

export function CTA() {
  return (
    <section className="dark-section section-space">
      <div className="container-wide cta-layout">
        <Reveal><SectionLabel>Mulai dari masalahnya</SectionLabel><h2>Punya masalah yang <em>layak diselesaikan?</em></h2></Reveal>
        <Reveal delay={.1}><div className="cta-copy muted-copy">Ceritakan apa yang ingin Anda bangun, atau apa yang sedang memperlambat bisnis Anda. Kami bantu cari solusi digital yang tepat.<div className="cta-actions"><button className="button-primary" onClick={() => openWhatsApp(undefined, 'cta_talk')} data-testid="button-cta-talk">Ngobrol dengan HokiDev <ArrowUpRight size={15} /></button><button className="button-secondary" onClick={() => openWhatsApp(undefined, 'cta_whatsapp')} data-testid="button-cta-whatsapp"><MessageCircle size={15} /> Chat via WhatsApp</button></div></div></Reveal>
      </div>
    </section>
  );
}
