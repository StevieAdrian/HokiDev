import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';

export function ProblemSection() {
  const problems = ['Proses masih manual', 'Kerja admin berulang', 'Data tercecer', 'Semua serba spreadsheet', 'Sulit memantau operasional', 'Software sudah usang', 'Sistem tidak saling terhubung', 'Belum ada otomasi'];
  return (
    <section className="problem section-space" id="problem">
      <div className="container-wide problem-grid">
        <Reveal>
          <SectionLabel>Masalah sebenarnya</SectionLabel>
          <h2>Software seharusnya menyelesaikan <em>masalah</em>, bukan menambah masalah baru.</h2>
        </Reveal>
        <Reveal delay={.1}>
          <p className="problem-copy">Kebanyakan bisnis tidak butuh software sekadar untuk punya software. Yang dibutuhkan adalah lebih sedikit oper-operan kerja, informasi yang jelas, dan alur kerja yang tidak bergantung pada satu spreadsheet &ldquo;sakti&rdquo;.</p>
          <div className="problem-list" style={{ marginTop: 34 }}>
            {problems.map((problem, index) => <div className="problem-item" key={problem}><span>0{index + 1}</span>{problem}</div>)}
          </div>
          <p className="problem-copy" style={{ marginTop: 30 }}>Di situlah HokiDev berperan. Kami pelajari alur kerjanya dulu, lalu membangun sesuai kebutuhan bisnis yang sebenarnya.</p>
        </Reveal>
      </div>
    </section>
  );
}
