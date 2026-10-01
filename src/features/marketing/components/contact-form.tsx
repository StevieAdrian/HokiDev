'use client';

import { type FormEvent, useState } from 'react';
import { Check, Send } from 'lucide-react';

import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';
import { openWhatsApp } from '@/lib/whatsapp';

type FormState = { name: string; business: string; whatsapp: string; type: string; need: string; description: string };

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', business: '', whatsapp: '', type: '', need: 'Belum Tahu', description: '' });
  const [sent, setSent] = useState(false);
  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Plain newlines: openWhatsApp() URL-encodes the whole message itself.
    const message = `Halo HokiDev, saya ingin mendiskusikan proyek software.\n\nNama: ${form.name}\nBisnis: ${form.business}\nWhatsApp: ${form.whatsapp}\nJenis bisnis: ${form.type}\nKebutuhan: ${form.need}\nDeskripsi proyek: ${form.description}`;
    openWhatsApp(message);
    setSent(true);
  };
  return (
    <section className="section-space" id="contact">
      <div className="container-wide contact-layout">
        <Reveal><SectionLabel>Konsultasi proyek</SectionLabel><h2>Mari mulai dari langkah yang <span className="serif">tepat.</span></h2><p className="contact-note">Ceritakan versi kasarnya saja. Anda tidak perlu brief lengkap untuk memulai obrolan yang baik.</p></Reveal>
        <Reveal delay={.1}>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="field"><label htmlFor="name">Nama</label><input id="name" required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Nama Anda" data-testid="input-name" /></div>
              <div className="field"><label htmlFor="business">Nama bisnis</label><input id="business" required value={form.business} onChange={(event) => update('business', event.target.value)} placeholder="Nama bisnis atau organisasi" data-testid="input-business" /></div>
            </div>
            <div className="form-row">
              <div className="field"><label htmlFor="whatsapp">Nomor WhatsApp</label><input id="whatsapp" required value={form.whatsapp} onChange={(event) => update('whatsapp', event.target.value)} placeholder="+62 ..." data-testid="input-whatsapp" /></div>
              <div className="field"><label htmlFor="type">Jenis bisnis</label><input id="type" value={form.type} onChange={(event) => update('type', event.target.value)} placeholder="Ritel, jasa, startup..." data-testid="input-business-type" /></div>
            </div>
            <div className="field"><label htmlFor="need">Apa yang Anda butuhkan?</label><select id="need" value={form.need} onChange={(event) => update('need', event.target.value)} data-testid="select-need">{['Website', 'Aplikasi Web', 'Aplikasi Mobile', 'Aplikasi Desktop', 'POS / Kasir', 'Sistem Inventori', 'Software Custom', 'API / Integrasi', 'SEO', 'Belum Tahu'].map((option) => <option key={option}>{option}</option>)}</select></div>
            <div className="field"><label htmlFor="description">Deskripsi proyek</label><textarea id="description" required value={form.description} onChange={(event) => update('description', event.target.value)} placeholder="Apa yang memperlambat bisnis Anda, atau apa yang ingin Anda bangun?" data-testid="textarea-description" /></div>
            <div className="form-submit"><span className="form-hint">Saat dikirim, WhatsApp akan terbuka dengan detail di atas. Tanpa akun, tanpa perlu daftar.</span><button className="button-primary" type="submit" data-testid="button-submit-inquiry">Diskusikan Proyek Saya <Send size={14} /></button></div>
            {sent && <div className="form-success" role="status" data-testid="status-inquiry-sent"><Check size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Pesan Anda sudah siap di WhatsApp. Selanjutnya biar kami yang bantu.</div>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
