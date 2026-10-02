import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';

export function ProblemSection() {
  const problems = ['Proses masih manual', 'Kerja admin berulang', 'Data tercecer', 'Semua serba spreadsheet', 'Sulit memantau operasional', 'Software sudah usang', 'Sistem tidak saling terhubung', 'Belum ada otomasi'];
  return (
    <section className="problem section-space" id="problem">
      <div className="container-wide problem-grid">
        <Reveal>
          <SectionLabel>Masalah sebenarnya</SectionLabel>
          <h2>Solusi yang di-<br></br>racang untuk <em>menyelesaikan masalah</em> operasional Anda.</h2>
        </Reveal>
        <Reveal delay={.1}>
          <p className="problem-copy">Untuk pemilik bisnis yang timnya mulai kewalahan: data tersebar di banyak file, pekerjaan berpindah dari satu orang ke orang lain, dan semuanya bergantung pada satu spreadsheet &ldquo;sakti&rdquo;. Kami merapikannya menjadi sistem yang terstruktur dan mudah dikelola.</p>
          <div className="problem-list" style={{ marginTop: 34 }}>
            {problems.map((problem, index) => <div className="problem-item" key={problem}><span>0{index + 1}</span>{problem}</div>)}
          </div>
          <p className="problem-copy" style={{ marginTop: 30 }}>Di sini HokiDev berperan. Kami pelajari alur kerjanya dulu, lalu membangun sesuai kebutuhan bisnis yang sebenarnya.</p>
        </Reveal>
      </div>
    </section>
  );
}
