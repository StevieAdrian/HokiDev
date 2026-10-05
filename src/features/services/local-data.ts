import type { ServiceSlug } from '@/features/services/data';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  organizationId,
} from '@/lib/seo';

export type LocalServicePage = {
  slug: string;
  city: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  intro: string;
  overview: { heading: string; paragraphs: string[] };
  audiences: string[];
  deliverables: [title: string, description: string][];
  process: [title: string, description: string][];
  pricing: { paragraphs: string[]; factors: string[] };
  faqs: [question: string, answer: string][];
  related: ServiceSlug[];
  whatsappMessage: string;
};

export const localServicePages: LocalServicePage[] = [
  {
    slug: 'jasa-pembuatan-website-bekasi',
    city: 'Bekasi',
    keyword: 'jasa pembuatan website Bekasi',
    metaTitle: 'Jasa Pembuatan Website Bekasi untuk Bisnis & UMKM | HokiDev',
    metaDescription:
      'Jasa pembuatan website profesional di Bekasi: company profile, landing page, dan toko online. Cepat, SEO-friendly, dan mudah dikelola. Diskusi gratis via WhatsApp.',
    h1: 'Jasa pembuatan website di Bekasi',
    h1Accent: 'untuk bisnis yang ingin bertumbuh.',
    intro:
      'HokiDev membantu bisnis dan UMKM di Bekasi punya website yang bukan sekadar ada, tapi benar-benar mendatangkan calon pelanggan. Dari company profile sampai toko online, kami bangun website yang cepat, mudah ditemukan di Google, dan nyaman dibuka di HP.',
    overview: {
      heading: 'Website untuk pasar Bekasi yang terus tumbuh',
      paragraphs: [
        'Bekasi adalah salah satu kota dengan pertumbuhan bisnis tercepat di Jabodetabek, mulai dari kawasan industri, ruko, kuliner, hingga jasa rumahan. Semakin banyak calon pelanggan yang mencari produk dan layanan lewat Google sebelum memutuskan membeli, dan bisnis yang tidak muncul di sana kehilangan peluang itu setiap hari.',
        'Kami membantu bisnis di Bekasi hadir di pencarian dengan website yang dirancang untuk tujuan jelas: memudahkan calon pelanggan menemukan Anda, memahami layanan Anda, lalu menghubungi lewat WhatsApp atau formulir. Bukan sekadar tampilan bagus, tapi website yang bekerja.',
        'Secara teknis, website dibangun dengan framework modern sehingga ringan, aman, dan SEO-friendly sejak awal. Kami juga bisa menyesuaikan konten agar relevan dengan pencarian lokal "di Bekasi", sehingga lebih mudah ditemukan pelanggan di sekitar Anda.',
      ],
    },
    audiences: [
      'UMKM dan toko di Bekasi yang ingin mulai dapat pelanggan dari Google',
      'Bisnis kuliner, bengkel, dan jasa rumahan di sekitar Bekasi',
      'Perusahaan di kawasan industri Bekasi yang butuh company profile kredibel',
      'Brand yang butuh landing page untuk iklan di area Bekasi & sekitarnya',
      'Toko yang ingin berjualan online dengan sistem sendiri',
      'Bisnis dengan website lama yang lambat atau sulit diperbarui',
    ],
    deliverables: [
      [
        'Desain custom',
        'Tampilan yang dibuat untuk brand Anda, bukan template pasaran, dan nyaman dibuka di HP maupun desktop.',
      ],
      [
        'Performa cepat',
        'Halaman dioptimasi agar cepat dimuat, karena pengunjung dan Google sama-sama tidak suka website lambat.',
      ],
      [
        'SEO lokal Bekasi',
        'Struktur, metadata, dan konten disiapkan agar website lebih mudah ditemukan untuk pencarian di area Bekasi.',
      ],
      [
        'Mudah dikelola',
        'Opsi CMS atau panel admin agar tim Anda bisa memperbarui konten tanpa harus menghubungi developer.',
      ],
      [
        'Integrasi WhatsApp & form',
        'Tombol WhatsApp, formulir kontak, Google Maps, dan Analytics agar calon pelanggan mudah menghubungi Anda.',
      ],
      [
        'Domain, hosting & SSL',
        'Kami bantu setup domain, hosting, dan sertifikat SSL sampai website siap diakses publik.',
      ],
    ],
    process: [
      [
        'Diskusi kebutuhan',
        'Memahami bisnis, target pelanggan di Bekasi, dan tujuan website.',
      ],
      [
        'Struktur & desain',
        'Menyusun peta halaman, alur, dan desain tampilan untuk disetujui.',
      ],
      ['Pengembangan', 'Membangun website dengan progres yang bisa Anda pantau.'],
      ['Uji & rilis', 'Uji di berbagai perangkat, setup domain, lalu go-live.'],
      [
        'Pendampingan',
        'Dukungan setelah rilis untuk perbaikan dan pengembangan lanjutan.',
      ],
    ],
    pricing: {
      paragraphs: [
        'Biaya pembuatan website di Bekasi bergantung pada cakupan pekerjaan. Landing page satu halaman tentu berbeda dengan website e-commerce yang terhubung ke sistem pembayaran dan stok.',
        'Setelah sesi diskusi singkat, kami memberikan estimasi biaya dan waktu pengerjaan yang transparan, lengkap dengan rincian fitur yang termasuk di dalamnya. Tidak ada biaya tersembunyi.',
      ],
      factors: [
        'Jumlah dan jenis halaman',
        'Desain custom atau berbasis sistem desain yang sudah ada',
        'Kebutuhan CMS atau panel admin',
        'Fitur khusus seperti login, pembayaran, atau booking',
        'Integrasi dengan sistem pihak ketiga',
        'Kebutuhan penulisan konten dan aset visual',
      ],
    },
    faqs: [
      [
        'Apakah HokiDev melayani pembuatan website di Bekasi?',
        'Ya. Kami melayani bisnis di seluruh Bekasi dan sekitarnya, meliputi Bekasi Kota, Bekasi Timur, Bekasi Barat, Bekasi Selatan, Bekasi Utara, Cikarang, dan area Jabodetabek lainnya. Proses bisa dilakukan online sepenuhnya, atau bertemu langsung jika diperlukan.',
      ],
      [
        'Berapa lama waktu pembuatan website?',
        'Website company profile atau landing page umumnya selesai dalam 2–4 minggu. Website dengan fitur custom seperti e-commerce membutuhkan waktu lebih lama, tergantung cakupannya. Timeline pasti kami sampaikan setelah kebutuhan jelas.',
      ],
      [
        'Apakah website-nya bisa muncul di Google untuk pencarian di Bekasi?',
        'Fondasi SEO teknis kami siapkan sejak awal, termasuk relevansi konten untuk pencarian lokal. Untuk mengejar ranking keyword tertentu secara aktif, kami juga menyediakan layanan SEO terpisah. Perlu diingat, hasil SEO organik butuh waktu beberapa minggu hingga bulan.',
      ],
      [
        'Apakah bisa bertemu langsung di Bekasi?',
        'Bisa. Sebagian besar proses efisien dilakukan online, tapi untuk kebutuhan tertentu kami terbuka untuk pertemuan di area Bekasi dan sekitarnya.',
      ],
      [
        'Apakah termasuk domain dan hosting?',
        'Kami bantu pembelian dan setup domain serta hosting. Keduanya tetap atas nama bisnis Anda, sehingga kepemilikannya sepenuhnya di tangan Anda.',
      ],
    ],
    related: ['jasa-seo', 'jasa-pembuatan-aplikasi', 'jasa-pembuatan-software'],
    whatsappMessage:
      'Halo HokiDev, saya di Bekasi dan ingin berdiskusi tentang pembuatan website untuk bisnis saya.',
  },
];

export function getLocalServicePage(
  slug: string,
): LocalServicePage | undefined {
  return localServicePages.find((page) => page.slug === slug);
}

export const localServicePath = (slug: string) => `/layanan/${slug}`;

export function localServiceJsonLd(service: LocalServicePage) {
  const url = absoluteUrl(localServicePath(service.slug));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.keyword,
        serviceType: 'Jasa pembuatan website',
        description: service.metaDescription,
        url,
        areaServed: { '@type': 'City', name: service.city },
        provider: { '@id': organizationId },
      },
      {
        '@context': 'https://schema.org',
        ...breadcrumbJsonLd([
          { name: 'Beranda', href: '/' },
          { name: 'Layanan', href: '/layanan' },
          { name: service.city, href: localServicePath(service.slug) },
        ]),
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };
}
