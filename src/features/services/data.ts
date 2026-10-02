/**
 * Copy for the per-service landing pages under /layanan/[slug].
 *
 * Each entry targets one search intent. Keep every page's copy unique —
 * near-duplicate pages compete with each other in search results.
 */

/** Adding a service: extend this union, then add its entry and nav icon. */
export type ServiceSlug =
  | 'jasa-pembuatan-website'
  | 'jasa-pembuatan-aplikasi'
  | 'jasa-pembuatan-software'
  | 'konsultasi-teknologi'
  | 'jasa-seo';

export type ServicePage = {
  slug: ServiceSlug;
  /** Short label used in nav, breadcrumbs and cards. */
  name: string;
  /** Primary keyword this page is written for. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  intro: string;
  /** One-liner used on the /layanan overview list. */
  summary: string;
  overview: { heading: string; paragraphs: string[] };
  audiences: string[];
  deliverables: [title: string, description: string][];
  process: [title: string, description: string][];
  pricing: { paragraphs: string[]; factors: string[] };
  faqs: [question: string, answer: string][];
  related: ServiceSlug[];
  whatsappMessage: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'jasa-pembuatan-website',
    name: 'Pembuatan Website',
    keyword: 'jasa pembuatan website',
    metaTitle: 'Jasa Pembuatan Website Profesional untuk Bisnis | HokiDev',
    metaDescription:
      'Jasa pembuatan website company profile, landing page, e-commerce, dan aplikasi web custom. Cepat, SEO-friendly, mudah dikelola, dan dibangun sesuai kebutuhan bisnis Anda.',
    h1: 'Jasa pembuatan website yang',
    h1Accent: 'bekerja untuk bisnis Anda.',
    intro:
      'Website bukan sekadar brosur online. HokiDev membangun website yang cepat, mudah ditemukan di Google, dan dirancang untuk mengubah pengunjung menjadi calon klien, dari company profile sampai aplikasi web custom.',
    summary:
      'Company profile, landing page, e-commerce, portal, dan aplikasi web custom yang cepat dan SEO-friendly.',
    overview: {
      heading: 'Website yang dibangun dengan tujuan yang jelas',
      paragraphs: [
        'Banyak bisnis punya website, tapi tidak banyak yang benar-benar mendatangkan hasil. Penyebabnya biasanya sama: dibuat dari template generik, lambat dibuka di HP, tidak muncul di Google, dan tidak jelas apa yang harus dilakukan pengunjung setelah membacanya.',
        'Kami memulai setiap proyek website dengan memahami siapa pelanggan Anda, apa yang mereka cari, dan tindakan apa yang ingin Anda dorong, entah itu menghubungi via WhatsApp, mengisi formulir, atau membeli produk. Struktur halaman, copy, dan desain kemudian disusun untuk tujuan itu.',
        'Secara teknis, website dibangun dengan framework modern (seperti Next.js dan React) sehingga ringan, aman, dan mudah dikembangkan. Fondasi SEO teknis seperti struktur heading, metadata, sitemap, data terstruktur, dan performa Core Web Vitals sudah disiapkan sejak awal, bukan ditambal belakangan.',
      ],
    },
    audiences: [
      'Bisnis yang butuh website company profile yang kredibel',
      'UMKM yang ingin mulai mendapat calon pelanggan dari Google',
      'Brand yang butuh landing page untuk kampanye iklan',
      'Toko yang ingin berjualan online dengan sistem sendiri',
      'Perusahaan yang website lamanya lambat atau sulit diperbarui',
      'Startup yang butuh aplikasi web atau dashboard pelanggan',
    ],
    deliverables: [
      [
        'Desain custom',
        'Tampilan yang dibuat untuk brand Anda, bukan template pasaran, dan nyaman dibuka di HP maupun desktop.',
      ],
      [
        'Performa cepat',
        'Halaman dioptimasi agar cepat dimuat, karena pengunjung dan Google sama-sama tidak suka website yang lambat.',
      ],
      [
        'Fondasi SEO teknis',
        'Metadata, sitemap, struktur URL, data terstruktur, dan heading yang rapi agar halaman mudah diindeks.',
      ],
      [
        'Mudah dikelola',
        'Opsi CMS atau panel admin agar tim Anda bisa memperbarui konten tanpa harus menghubungi developer.',
      ],
      [
        'Integrasi yang dibutuhkan',
        'Tombol WhatsApp, formulir kontak, Google Analytics, pembayaran, atau sistem lain yang sudah Anda pakai.',
      ],
      [
        'Domain, hosting & SSL',
        'Kami bantu setup domain, hosting, dan sertifikat SSL sampai website siap diakses publik.',
      ],
    ],
    process: [
      [
        'Diskusi kebutuhan',
        'Memahami bisnis, target pengunjung, dan tujuan website.',
      ],
      [
        'Struktur & desain',
        'Menyusun peta halaman, alur, dan desain tampilan untuk disetujui.',
      ],
      [
        'Pengembangan',
        'Membangun website dengan progres yang bisa Anda pantau.',
      ],
      [
        'Uji & rilis',
        'Uji di berbagai perangkat, setup domain, lalu website go-live.',
      ],
      [
        'Pendampingan',
        'Dukungan setelah rilis untuk perbaikan dan pengembangan lanjutan.',
      ],
    ],
    pricing: {
      paragraphs: [
        'Biaya jasa pembuatan website sangat bergantung pada cakupan pekerjaan. Landing page satu halaman tentu berbeda dengan website e-commerce yang terhubung ke sistem pembayaran dan stok.',
        'Setelah sesi diskusi singkat, kami akan memberikan estimasi biaya dan waktu pengerjaan yang transparan, dengan rincian fitur yang termasuk di dalamnya.',
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
        'Berapa lama waktu pembuatan website?',
        'Website company profile atau landing page umumnya selesai dalam 2–4 minggu. Website dengan fitur custom seperti e-commerce atau portal pelanggan biasanya membutuhkan waktu lebih lama, tergantung cakupannya. Timeline pasti kami sampaikan setelah kebutuhan jelas.',
      ],
      [
        'Apakah website yang dibuat sudah SEO-friendly?',
        'Ya. Fondasi SEO teknis seperti performa, struktur heading, metadata, sitemap, dan data terstruktur sudah disiapkan sejak awal. Untuk mengejar ranking keyword tertentu secara aktif, kami juga menyediakan layanan SEO terpisah.',
      ],
      [
        'Apakah saya bisa mengubah isi website sendiri?',
        'Bisa. Jika Anda butuh memperbarui konten secara rutin, kami siapkan CMS atau panel admin sehingga teks, gambar, dan artikel bisa diubah tanpa menyentuh kode.',
      ],
      [
        'Apakah termasuk domain dan hosting?',
        'Kami bisa membantu pembelian dan setup domain serta hosting. Domain dan hosting tetap atas nama bisnis Anda, sehingga kepemilikannya sepenuhnya di tangan Anda.',
      ],
      [
        'Bagaimana jika website lama saya ingin diperbarui?',
        'Kami bisa melakukan redesign atau membangun ulang website lama, termasuk memindahkan konten dan menjaga URL penting agar posisi di Google tidak hilang.',
      ],
    ],
    related: ['jasa-seo', 'jasa-pembuatan-aplikasi', 'konsultasi-teknologi'],
    whatsappMessage:
      'Halo HokiDev, saya ingin berdiskusi tentang pembuatan website untuk bisnis saya.',
  },
  {
    slug: 'jasa-pembuatan-aplikasi',
    name: 'Pembuatan Aplikasi',
    keyword: 'jasa pembuatan aplikasi',
    metaTitle: 'Jasa Pembuatan Aplikasi Android, iOS & Web Custom | HokiDev',
    metaDescription:
      'Jasa pembuatan aplikasi mobile Android & iOS serta aplikasi web custom untuk pelanggan, karyawan, dan operasional bisnis. Dari ide sampai rilis di Play Store dan App Store.',
    h1: 'Jasa pembuatan aplikasi dari ide',
    h1Accent: 'sampai di tangan pengguna.',
    intro:
      'HokiDev membangun aplikasi mobile Android, iOS, dan aplikasi web yang dipakai pelanggan maupun tim internal Anda. Kami bantu dari merumuskan fitur, desain, pengembangan, sampai rilis di Play Store dan App Store.',
    summary:
      'Aplikasi mobile Android & iOS dan aplikasi web untuk pelanggan, karyawan, dan tim lapangan.',
    overview: {
      heading: 'Aplikasi yang dipakai, bukan sekadar diunduh',
      paragraphs: [
        'Aplikasi yang sukses bukan yang fiturnya paling banyak, tapi yang menyelesaikan satu masalah dengan sangat baik. Karena itu kami membantu Anda menentukan versi pertama (MVP) yang paling bernilai, merilisnya lebih cepat, lalu mengembangkannya berdasarkan penggunaan nyata.',
        'Kami membangun aplikasi lintas platform dengan teknologi seperti React Native, sehingga satu basis kode bisa berjalan di Android dan iOS. Ini membuat biaya pengembangan dan perawatan lebih efisien tanpa mengorbankan pengalaman pengguna.',
        'Di balik aplikasi, kami juga menyiapkan backend, API, database, dan panel admin yang dibutuhkan, sehingga Anda mendapat satu sistem utuh, bukan hanya tampilan di layar.',
      ],
    },
    audiences: [
      'Bisnis yang ingin punya aplikasi untuk pelanggan',
      'Perusahaan dengan tim lapangan, kurir, atau sales',
      'Startup yang ingin memvalidasi ide lewat MVP',
      'Layanan booking, membership, atau loyalty program',
      'Operasional internal yang masih mengandalkan chat dan spreadsheet',
      'Bisnis yang ingin mengubah aplikasi web menjadi aplikasi mobile',
    ],
    deliverables: [
      [
        'Android & iOS',
        'Aplikasi lintas platform dari satu basis kode, siap dirilis di Google Play Store dan Apple App Store.',
      ],
      [
        'Aplikasi web',
        'Aplikasi berbasis browser untuk dashboard, portal pelanggan, atau sistem internal tanpa perlu instalasi.',
      ],
      [
        'Desain UI/UX',
        'Alur dan tampilan yang dirancang agar mudah dipahami pengguna sejak pertama kali dibuka.',
      ],
      [
        'Backend & API',
        'Server, database, autentikasi, dan API yang aman sebagai fondasi aplikasi.',
      ],
      [
        'Panel admin',
        'Dashboard untuk mengelola pengguna, konten, transaksi, dan data dari aplikasi.',
      ],
      [
        'Rilis & pemeliharaan',
        'Pendampingan proses publikasi ke store, pemantauan, dan update setelah rilis.',
      ],
    ],
    process: [
      ['Discovery', 'Memetakan pengguna, masalah utama, dan fitur prioritas.'],
      [
        'Prototype',
        'Desain alur dan tampilan yang bisa dicoba sebelum dibangun.',
      ],
      [
        'Pengembangan bertahap',
        'Dibangun per sprint dengan demo progres berkala.',
      ],
      ['Pengujian', 'Uji fungsional dan uji di berbagai perangkat.'],
      [
        'Rilis & iterasi',
        'Publikasi ke store dan pengembangan berdasarkan feedback.',
      ],
    ],
    pricing: {
      paragraphs: [
        'Biaya pembuatan aplikasi ditentukan oleh jumlah fitur, kompleksitas, dan platform yang dituju. Memulai dari MVP adalah cara paling efisien untuk mengendalikan biaya sambil memvalidasi ide.',
        'Kami akan membantu memecah kebutuhan Anda menjadi fase-fase pengembangan, lengkap dengan estimasi biaya dan waktu untuk masing-masing fase.',
      ],
      factors: [
        'Platform: Android, iOS, web, atau semuanya',
        'Jumlah fitur dan peran pengguna',
        'Kebutuhan backend, database, dan panel admin',
        'Integrasi pembayaran, peta, notifikasi, atau API pihak ketiga',
        'Kebutuhan mode offline atau sinkronisasi data',
        'Dukungan dan pemeliharaan setelah rilis',
      ],
    },
    faqs: [
      [
        'Berapa lama waktu pembuatan aplikasi?',
        'MVP dengan fitur inti umumnya bisa dirilis dalam 2–4 bulan. Aplikasi dengan banyak peran pengguna dan integrasi akan membutuhkan waktu lebih lama. Kami selalu menyarankan rilis bertahap agar aplikasi cepat dipakai.',
      ],
      [
        'Apakah aplikasi bisa berjalan di Android dan iOS sekaligus?',
        'Bisa. Kami menggunakan teknologi lintas platform sehingga satu basis kode dapat dirilis untuk Android dan iOS, lebih efisien dari sisi biaya dan perawatan.',
      ],
      [
        'Apakah source code menjadi milik saya?',
        'Ya. Setelah proyek selesai dan pembayaran lunas, source code dan akses ke seluruh akun terkait (store, server, database) diserahkan kepada Anda.',
      ],
      [
        'Apakah HokiDev membantu proses upload ke Play Store dan App Store?',
        'Ya, kami mendampingi proses publikasi termasuk persiapan listing, build, dan proses review dari Google maupun Apple.',
      ],
      [
        'Saya baru punya ide, apakah bisa dibantu?',
        'Tentu. Banyak proyek dimulai hanya dari ide. Kami bantu merumuskan masalah, fitur prioritas, dan alur aplikasi sebelum masuk ke tahap pengembangan.',
      ],
    ],
    related: [
      'jasa-pembuatan-software',
      'jasa-pembuatan-website',
      'konsultasi-teknologi',
    ],
    whatsappMessage:
      'Halo HokiDev, saya ingin berdiskusi tentang pembuatan aplikasi untuk bisnis saya.',
  },
  {
    slug: 'jasa-pembuatan-software',
    name: 'Software Custom',
    keyword: 'jasa pembuatan software',
    metaTitle: 'Jasa Pembuatan Software Custom: POS, Inventori & ERP | HokiDev',
    metaDescription:
      'Jasa pembuatan software custom untuk bisnis: sistem kasir (POS), inventori, manajemen operasional, CRM, aplikasi desktop, dan integrasi API sesuai alur kerja Anda.',
    h1: 'Software custom yang mengikuti',
    h1Accent: 'cara kerja bisnis Anda.',
    intro:
      'Software siap pakai sering memaksa bisnis mengubah cara kerjanya. HokiDev membangun software custom seperti sistem kasir, inventori, manajemen operasional, dan integrasi antar sistem yang dirancang mengikuti alur kerja Anda.',
    summary:
      'Sistem POS, inventori, manajemen operasional, CRM, aplikasi desktop, dan integrasi API.',
    overview: {
      heading: 'Ketika spreadsheet dan software generik sudah tidak cukup',
      paragraphs: [
        'Hampir setiap bisnis yang bertumbuh mengalami fase yang sama: data tersebar di banyak spreadsheet, laporan disusun manual setiap akhir bulan, dan tim menghabiskan waktu untuk pekerjaan yang seharusnya bisa otomatis. Software generik membantu sebagian, tapi jarang pas dengan proses yang sudah berjalan.',
        'Software custom dibangun dari alur kerja Anda yang sebenarnya. Kami mempelajari bagaimana tim bekerja sehari-hari, di mana hambatannya, dan data apa yang perlu dilihat pemilik bisnis, lalu merancang sistem yang menghilangkan pekerjaan berulang tersebut.',
        'Sistem bisa berbasis web, desktop, atau keduanya, dan dapat terhubung dengan aplikasi yang sudah Anda pakai, seperti marketplace, payment gateway, software akuntansi, atau API pihak ketiga lainnya.',
      ],
    },
    audiences: [
      'Toko, restoran, dan ritel yang butuh sistem kasir (POS) sendiri',
      'Bisnis dengan stok di banyak gudang atau cabang',
      'Perusahaan yang laporannya masih disusun manual',
      'Distributor dan bisnis dengan alur pesanan yang kompleks',
      'Tim yang perlu menghubungkan beberapa sistem berbeda',
      'Bisnis yang sudah "mentok" dengan software siap pakai',
    ],
    deliverables: [
      [
        'POS & sistem transaksi',
        'Sistem kasir, penjualan, pembayaran, dan laporan transaksi yang sesuai dengan cara Anda berjualan.',
      ],
      [
        'Inventori & gudang',
        'Pelacakan stok, mutasi antar gudang atau cabang, pembelian, dan peringatan stok menipis.',
      ],
      [
        'Sistem manajemen',
        'Manajemen pesanan, proyek, karyawan, pelanggan (CRM), dan operasional dalam satu sistem.',
      ],
      [
        'Dashboard & laporan',
        'Laporan otomatis dan dashboard real-time sehingga keputusan bisa diambil dari data, bukan tebakan.',
      ],
      [
        'Aplikasi desktop',
        'Software berbasis desktop untuk kebutuhan operasional yang harus berjalan di perangkat khusus.',
      ],
      [
        'Integrasi API & sistem',
        'Menghubungkan software Anda dengan marketplace, payment gateway, akuntansi, atau sistem lain.',
      ],
    ],
    process: [
      [
        'Analisis alur kerja',
        'Memetakan proses bisnis, data, dan hambatan yang ada.',
      ],
      [
        'Rancangan sistem',
        'Menyusun modul, peran pengguna, dan desain tampilan.',
      ],
      [
        'Pengembangan per modul',
        'Modul prioritas dibangun dan dipakai lebih dulu.',
      ],
      [
        'Migrasi & pelatihan',
        'Memindahkan data lama dan melatih tim pengguna.',
      ],
      [
        'Dukungan berkelanjutan',
        'Pemeliharaan dan penambahan fitur seiring bisnis tumbuh.',
      ],
    ],
    pricing: {
      paragraphs: [
        'Biaya pembuatan software custom bergantung pada jumlah modul dan kompleksitas alur kerja yang perlu didukung. Kami biasanya menyarankan pendekatan bertahap: mulai dari modul yang paling berdampak, lalu dikembangkan sesuai kebutuhan.',
        'Dengan begitu investasi Anda lebih terukur, dan tim sudah bisa merasakan manfaat sistem sejak fase pertama.',
      ],
      factors: [
        'Jumlah modul dan peran pengguna',
        'Platform: web, desktop, mobile, atau kombinasi',
        'Migrasi data dari sistem atau spreadsheet lama',
        'Integrasi dengan perangkat keras seperti printer struk atau barcode scanner',
        'Integrasi dengan sistem atau API pihak ketiga',
        'Kebutuhan multi-cabang atau multi-gudang',
      ],
    },
    faqs: [
      [
        'Apa bedanya software custom dengan software siap pakai?',
        'Software siap pakai dibuat untuk kebutuhan umum, sehingga bisnis sering harus menyesuaikan prosesnya. Software custom dibangun khusus mengikuti alur kerja Anda, bisa dikembangkan sesuai kebutuhan, dan tidak terikat biaya langganan per pengguna.',
      ],
      [
        'Apakah data dari spreadsheet lama bisa dipindahkan?',
        'Bisa. Migrasi data dari Excel, Google Sheets, atau sistem lama termasuk bagian yang kami rencanakan sejak awal, agar sistem baru langsung bisa dipakai dengan data yang ada.',
      ],
      [
        'Apakah sistem bisa dipakai di banyak cabang?',
        'Ya. Sistem dapat dirancang untuk multi-cabang atau multi-gudang, dengan hak akses berbeda untuk setiap peran dan laporan gabungan untuk pemilik bisnis.',
      ],
      [
        'Apakah bisa terhubung dengan printer kasir atau barcode scanner?',
        'Bisa. Sistem POS dapat diintegrasikan dengan printer struk, barcode scanner, laci kasir, dan perangkat pendukung lainnya.',
      ],
      [
        'Bagaimana jika nanti butuh fitur tambahan?',
        'Software dibangun dengan arsitektur yang mudah dikembangkan. Fitur baru bisa ditambahkan secara bertahap seiring kebutuhan bisnis Anda berubah.',
      ],
    ],
    related: [
      'jasa-pembuatan-aplikasi',
      'konsultasi-teknologi',
      'jasa-pembuatan-website',
    ],
    whatsappMessage:
      'Halo HokiDev, saya ingin berdiskusi tentang pembuatan software custom untuk bisnis saya.',
  },
  {
    slug: 'konsultasi-teknologi',
    name: 'Konsultasi Teknologi',
    keyword: 'konsultasi teknologi',
    metaTitle: 'Konsultasi Teknologi & IT untuk Bisnis | HokiDev',
    metaDescription:
      'Konsultasi teknologi (tech consulting) untuk bisnis: memilih solusi digital yang tepat, merancang arsitektur sistem, audit aplikasi, dan roadmap digitalisasi sebelum investasi besar.',
    h1: 'Konsultasi teknologi sebelum Anda',
    h1Accent: 'mengambil keputusan besar.',
    intro:
      'Bingung harus mulai dari mana? Perlu aplikasi, website, atau cukup tools yang sudah ada? Lewat sesi konsultasi tech, HokiDev membantu Anda memilih solusi yang tepat, menghindari biaya yang tidak perlu, dan menyusun langkah digitalisasi yang realistis.',
    summary:
      'Tech consulting untuk memilih solusi digital, merancang arsitektur, audit sistem, dan menyusun roadmap.',
    overview: {
      heading: 'Partner teknis untuk bisnis tanpa tim IT',
      paragraphs: [
        'Banyak pemilik bisnis tahu ada masalah yang bisa diselesaikan dengan teknologi, tapi tidak yakin solusi apa yang paling tepat. Akibatnya, keputusan sering diambil berdasarkan penawaran vendor, bukan kebutuhan sebenarnya, dan berujung pada sistem yang mahal tapi jarang dipakai.',
        'Konsultasi teknologi di HokiDev berfokus pada masalah bisnis terlebih dahulu, baru teknologinya. Kami membantu memetakan proses, mengidentifikasi bagian yang paling layak didigitalisasi, dan membandingkan opsi seperti software siap pakai, low-code, atau pengembangan custom, termasuk perkiraan biaya dan risikonya.',
        'Konsultasi juga cocok jika Anda sudah punya sistem atau tim developer, tapi butuh second opinion: audit kode, review arsitektur, evaluasi performa dan keamanan, atau bantuan menyusun spesifikasi sebelum membuka tender ke vendor.',
      ],
    },
    audiences: [
      'Pemilik bisnis yang ingin mulai digitalisasi tapi belum tahu caranya',
      'Perusahaan yang akan memilih vendor software',
      'Startup non-teknis yang butuh partner CTO sementara',
      'Bisnis dengan sistem lama yang lambat atau sering bermasalah',
      'Tim yang butuh second opinion atas arsitektur atau kode',
      'Bisnis yang ingin menyusun roadmap teknologi jangka panjang',
    ],
    deliverables: [
      [
        'Pemetaan kebutuhan',
        'Memahami proses bisnis dan menentukan masalah mana yang paling layak diselesaikan dengan teknologi.',
      ],
      [
        'Rekomendasi solusi',
        'Perbandingan opsi siap pakai vs custom, lengkap dengan perkiraan biaya, waktu, dan risiko.',
      ],
      [
        'Arsitektur sistem',
        'Rancangan teknis: struktur aplikasi, database, infrastruktur cloud, dan integrasi.',
      ],
      [
        'Audit aplikasi',
        'Review kode, performa, keamanan, dan skalabilitas sistem yang sudah berjalan.',
      ],
      [
        'Spesifikasi proyek',
        'Dokumen kebutuhan yang jelas, bisa dipakai untuk tim internal atau untuk membandingkan vendor.',
      ],
      [
        'Roadmap digital',
        'Rencana bertahap digitalisasi bisnis yang realistis dengan prioritas yang jelas.',
      ],
    ],
    process: [
      ['Sesi awal', 'Diskusi tentang bisnis, masalah, dan tujuan Anda.'],
      [
        'Investigasi',
        'Mempelajari proses, sistem yang ada, dan data pendukung.',
      ],
      ['Analisis opsi', 'Membandingkan solusi beserta biaya dan risikonya.'],
      [
        'Rekomendasi',
        'Presentasi temuan dan rekomendasi yang bisa ditindaklanjuti.',
      ],
      [
        'Tindak lanjut',
        'Pendampingan eksekusi, dengan tim Anda atau bersama kami.',
      ],
    ],
    pricing: {
      paragraphs: [
        'Konsultasi bisa berupa sesi diskusi singkat untuk menjawab pertanyaan spesifik, atau engagement yang lebih dalam seperti audit sistem dan penyusunan roadmap.',
        'Sesi diskusi awal untuk memahami kebutuhan Anda bisa dimulai langsung via WhatsApp. Dari situ kami sampaikan format konsultasi yang paling sesuai beserta biayanya.',
      ],
      factors: [
        'Ruang lingkup: sesi tanya jawab, audit, atau roadmap lengkap',
        'Kompleksitas proses bisnis dan sistem yang ada',
        'Kebutuhan dokumen spesifikasi atau arsitektur tertulis',
        'Durasi pendampingan setelah rekomendasi',
      ],
    },
    faqs: [
      [
        'Apa yang dimaksud dengan konsultasi teknologi?',
        'Konsultasi teknologi (tech consulting) adalah layanan untuk membantu bisnis mengambil keputusan terkait teknologi, seperti memilih software, merancang sistem, mengevaluasi vendor, atau menyusun rencana digitalisasi, berdasarkan kebutuhan bisnis yang sebenarnya.',
      ],
      [
        'Apakah setelah konsultasi saya wajib membuat proyek di HokiDev?',
        'Tidak. Hasil konsultasi adalah milik Anda dan bisa dieksekusi oleh tim internal maupun vendor lain. Jika Anda ingin kami yang mengerjakan, tentu kami siap membantu.',
      ],
      [
        'Saya tidak punya latar belakang teknis, apakah bisa?',
        'Justru konsultasi paling bermanfaat untuk pemilik bisnis non-teknis. Kami menjelaskan opsi dan risiko dalam bahasa bisnis, bukan istilah teknis yang membingungkan.',
      ],
      [
        'Apakah bisa audit aplikasi yang dibuat vendor lain?',
        'Bisa. Kami dapat meninjau kode, arsitektur, keamanan, dan performa aplikasi yang sudah ada, lalu memberikan laporan temuan beserta rekomendasi perbaikannya.',
      ],
      [
        'Apakah konsultasi bisa dilakukan secara online?',
        'Ya. Konsultasi dapat dilakukan secara online melalui video call, sehingga bisa melayani bisnis di seluruh Indonesia.',
      ],
    ],
    related: [
      'jasa-pembuatan-software',
      'jasa-pembuatan-aplikasi',
      'jasa-pembuatan-website',
    ],
    whatsappMessage:
      'Halo HokiDev, saya ingin konsultasi teknologi untuk bisnis saya.',
  },
  {
    slug: 'jasa-seo',
    name: 'Jasa SEO',
    keyword: 'jasa SEO',
    metaTitle: 'Jasa SEO Teknis & Optimasi Website | HokiDev',
    metaDescription:
      'Jasa SEO untuk meningkatkan visibilitas website di Google: audit SEO teknis, optimasi kecepatan, Core Web Vitals, struktur konten, dan riset keyword. Dikerjakan oleh developer.',
    h1: 'Jasa SEO yang dimulai dari',
    h1Accent: 'fondasi teknis website.',
    intro:
      'Konten bagus tidak akan ranking jika website lambat, sulit diindeks, atau strukturnya berantakan. HokiDev menangani SEO dari sisi teknis dan konten, dikerjakan langsung oleh developer yang memahami cara kerja website Anda.',
    summary:
      'Audit SEO teknis, optimasi kecepatan & Core Web Vitals, struktur konten, dan riset keyword.',
    overview: {
      heading: 'SEO yang menyentuh akar masalahnya',
      paragraphs: [
        'Banyak layanan SEO hanya berfokus pada artikel dan backlink. Padahal, sering kali penyebab website tidak muncul di Google ada di sisi teknis: halaman lambat dimuat di HP, tidak terindeks dengan benar, URL duplikat, metadata kosong, atau struktur halaman yang membingungkan mesin pencari.',
        'Sebagai software house, kami bisa masuk langsung ke kode website untuk memperbaiki masalah tersebut, bukan hanya memberikan daftar rekomendasi. Mulai dari optimasi performa dan Core Web Vitals, perbaikan struktur URL dan internal link, hingga penambahan data terstruktur.',
        'Setelah fondasinya kuat, kami membantu menyusun strategi konten berdasarkan riset keyword: halaman apa yang perlu dibuat, keyword apa yang realistis dikejar, dan bagaimana setiap halaman saling mendukung.',
      ],
    },
    audiences: [
      'Website bisnis yang belum muncul di halaman pertama Google',
      'Website yang trafiknya turun setelah redesign atau migrasi',
      'Website yang lambat dan skor PageSpeed-nya rendah',
      'Toko online dengan banyak halaman produk',
      'Bisnis lokal yang ingin ditemukan pelanggan di sekitarnya',
      'Bisnis yang baru meluncurkan website dan ingin mulai dengan benar',
    ],
    deliverables: [
      [
        'Audit SEO teknis',
        'Pemeriksaan menyeluruh: indexing, crawl error, duplikasi, metadata, struktur URL, dan sitemap.',
      ],
      [
        'Optimasi kecepatan',
        'Perbaikan performa dan Core Web Vitals langsung di level kode, bukan sekadar plugin.',
      ],
      [
        'Riset keyword',
        'Menemukan keyword yang dicari calon pelanggan dan realistis untuk dikejar.',
      ],
      [
        'Struktur konten',
        'Rencana halaman dan internal link agar setiap halaman punya peran yang jelas.',
      ],
      [
        'Data terstruktur',
        'Implementasi schema markup agar Google lebih memahami isi website Anda.',
      ],
      [
        'Monitoring & laporan',
        'Setup Google Search Console dan Analytics, serta laporan perkembangan berkala.',
      ],
    ],
    process: [
      [
        'Audit awal',
        'Menilai kondisi teknis, konten, dan posisi website saat ini.',
      ],
      [
        'Riset & strategi',
        'Menentukan keyword target dan prioritas perbaikan.',
      ],
      ['Perbaikan teknis', 'Memperbaiki masalah teknis langsung di website.'],
      [
        'Optimasi konten',
        'Menyusun dan mengoptimasi halaman sesuai keyword target.',
      ],
      [
        'Pantau & evaluasi',
        'Memantau indexing, ranking, dan trafik secara berkala.',
      ],
    ],
    pricing: {
      paragraphs: [
        'Layanan SEO bisa berupa audit dan perbaikan sekali jalan, atau pendampingan bulanan untuk strategi konten dan monitoring. Biaya bergantung pada ukuran website dan tingkat persaingan keyword yang ingin dikejar.',
        'SEO adalah investasi jangka menengah. Hasil biasanya mulai terlihat dalam hitungan bulan, dan kami akan selalu jujur soal ekspektasi yang realistis untuk website Anda.',
      ],
      factors: [
        'Jumlah halaman dan kondisi teknis website',
        'Tingkat persaingan keyword target',
        'Kebutuhan penulisan atau perbaikan konten',
        'Akses ke kode website untuk perbaikan teknis',
        'Durasi pendampingan dan monitoring',
      ],
    },
    faqs: [
      [
        'Berapa lama hasil SEO terlihat?',
        'Perbaikan teknis bisa berdampak dalam beberapa minggu setelah halaman diindeks ulang. Untuk ranking keyword yang kompetitif, umumnya dibutuhkan beberapa bulan secara konsisten. Kami tidak menjanjikan ranking instan.',
      ],
      [
        'Apakah HokiDev menjamin ranking #1 di Google?',
        'Tidak ada pihak yang bisa menjamin ranking tertentu karena algoritma Google sepenuhnya dikendalikan Google. Yang kami jamin adalah pekerjaan yang transparan, terukur, dan mengikuti panduan resmi Google.',
      ],
      [
        'Apa itu SEO teknis?',
        'SEO teknis adalah optimasi sisi teknis website agar mudah di-crawl dan diindeks mesin pencari, seperti kecepatan halaman, struktur URL, sitemap, canonical, data terstruktur, dan kompatibilitas mobile.',
      ],
      [
        'Apakah website yang dibuat vendor lain bisa dioptimasi?',
        'Bisa. Kami dapat bekerja dengan berbagai platform website. Untuk perbaikan teknis yang lebih dalam, kami membutuhkan akses ke kode atau panel admin website.',
      ],
      [
        'Apakah layanan SEO termasuk pembuatan artikel?',
        'Kami menyusun strategi konten dan struktur halaman. Penulisan artikel dapat ditambahkan sesuai kebutuhan, atau dikerjakan tim Anda dengan panduan dari kami.',
      ],
    ],
    related: [
      'jasa-pembuatan-website',
      'konsultasi-teknologi',
      'jasa-pembuatan-software',
    ],
    whatsappMessage:
      'Halo HokiDev, saya ingin berdiskusi tentang layanan SEO untuk website saya.',
  },
];

/** Accepts any string because route params are untyped. */
export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}

export function getRelatedServices(service: ServicePage): ServicePage[] {
  return service.related.flatMap((slug) => getServicePage(slug) ?? []);
}

export const servicePath = (slug: ServiceSlug) => `/layanan/${slug}`;
