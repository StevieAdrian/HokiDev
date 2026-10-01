import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';

export function About() {
  const items = [
    ['Custom', 'Dibuat sesuai kebutuhan spesifik Anda, bukan memaksa bisnis Anda mengikuti software generik.'],
    ['Praktis', 'Fokus menyelesaikan masalah operasional nyata, bukan menambah kerumitan yang tidak perlu.'],
    ['Scalable', 'Strukturnya disiapkan agar sistem bisa berkembang seiring bisnis tumbuh dan kebutuhan berubah.'],
    ['Kolaboratif', 'Anda tetap terlibat selama pengembangan, dengan keputusan yang jelas dan progres yang terlihat.'],
    ['Mudah dirawat', 'Praktik pengembangan modern dan arsitektur yang matang membuat produk tetap berguna setelah rilis.'],
  ];
  return (
    <section className="section-space" id="about">
      <div className="container-wide">
        <Reveal><div className="section-heading"><div><SectionLabel>Kenapa HokiDev</SectionLabel><h2>Dibangun mengikuti<br /><span className="serif">alur kerja Anda.</span></h2></div><p>Cukup kecil untuk benar-benar mendengarkan. Cukup teknis untuk menangani bagian yang sulit dengan matang.</p></div></Reveal>
        <div className="why-grid">{items.map(([title, copy], index) => <Reveal key={title} delay={index * .04}><div className="why-item"><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
      </div>
    </section>
  );
}
