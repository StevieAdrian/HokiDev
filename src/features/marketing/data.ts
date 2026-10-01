export const services = [
  ['01', 'Website & Aplikasi Web', 'Website company profile, portal, dashboard, aplikasi untuk pelanggan, dan sistem web internal.'],
  ['02', 'Aplikasi Mobile', 'Aplikasi mobile custom untuk pelanggan, karyawan, tim lapangan, dan operasional bisnis.'],
  ['03', 'Aplikasi Desktop', 'Sistem berbasis desktop untuk bisnis yang butuh software operasional khusus.'],
  ['04', 'POS & Sistem Transaksi', 'Sistem kasir, transaksi, pembayaran, penjualan, dan laporan yang dibuat custom.'],
  ['05', 'Sistem Inventori & Manajemen', 'Sistem untuk inventori, stok, produk, karyawan, operasional, dan manajemen bisnis.'],
  ['06', 'Software Bisnis Custom', 'Software yang dirancang untuk alur kerja unik yang tidak bisa ditangani tools generik.'],
  ['07', 'Integrasi API & Sistem', 'Menghubungkan sistem, layanan, database, API, dan platform pihak ketiga yang sudah Anda pakai.'],
  ['08', 'SEO & Optimasi Digital', 'SEO teknis, optimasi website, peningkatan performa, dan penguatan kehadiran digital.'],
];

export const solutionGroups = [
  ['Untuk pelanggan', ['Website Perusahaan', 'E-commerce', 'Platform Booking', 'Portal Pelanggan', 'Aplikasi Mobile']],
  ['Operasional internal', ['Sistem Manajemen', 'Portal Karyawan', 'Dashboard', 'Sistem Laporan', 'Otomasi Alur Kerja']],
  ['Operasional bisnis', ['POS / Kasir', 'Inventori', 'CRM', 'Manajemen Pesanan', 'Pencatatan Keuangan']],
  ['Infrastruktur teknis', ['REST API', 'Integrasi Pihak Ketiga', 'Sistem Database', 'Autentikasi', 'Deployment Cloud']],
];

export type ShowcaseKey = 'Web App' | 'Mobile App' | 'Dashboard' | 'POS' | 'Sistem Manajemen';
export const showcaseData: Record<ShowcaseKey, { eyebrow: string; title: string; metrics: [string, string][]; rows: [string, string][]; bars: number[] }> = {
  'Web App': { eyebrow: 'Portal pelanggan / contoh antarmuka', title: 'Pengalaman pelanggan yang lebih tenang', metrics: [['Permintaan terbuka', '28'], ['Selesai', '184'], ['Waktu respons', '2j 18m'], ['Kepuasan', '4,8 / 5']], rows: [['Permintaan layanan baru', 'Hari ini'], ['Perbarui data akun', 'Kemarin'], ['Unduh invoice', 'Sen']], bars: [40, 66, 48, 84, 61, 93] },
  'Mobile App': { eyebrow: 'Aplikasi lapangan / contoh antarmuka', title: 'Kerja yang ikut bergerak bersama Anda', metrics: [['Rute hari ini', '12'], ['Sudah check-in', '08'], ['Tugas terbuka', '17'], ['Status tim', 'Live']], rows: [['Cipete — rute pengiriman', '09:15'], ['Kemang — kunjungan lokasi', '10:40'], ['BSD — instalasi', '13:00']], bars: [72, 55, 81, 44, 68, 90] },
  'Dashboard': { eyebrow: 'Business intelligence / contoh antarmuka', title: 'Tahu apa yang perlu diperhatikan', metrics: [['Pendapatan', 'Rp 124,5 jt'], ['Transaksi', '2.481'], ['Pengguna aktif', '1.284'], ['Tugas tertunda', '37']], rows: [['Bulan ini', 'Rp 124,5 jt'], ['Bulan lalu', 'Rp 111,8 jt'], ['Proyeksi', 'Rp 138,2 jt']], bars: [44, 57, 50, 72, 67, 88] },
  'POS': { eyebrow: 'Point of sale / contoh antarmuka', title: 'Kasir tanpa hambatan', metrics: [['Penjualan hari ini', 'Rp 18,4 jt'], ['Transaksi', '248'], ['Rata-rata belanja', 'Rp 74 rb'], ['Stok menipis', '06']], rows: [['Keyboard Wireless', '42 unit'], ['Biji Kopi', '18 unit'], ['Kursi Kantor', '12 unit'], ['Kotak Kemasan', '85 unit']], bars: [35, 58, 73, 61, 84, 70] },
  'Sistem Manajemen': { eyebrow: 'Pusat operasional / contoh antarmuka', title: 'Seluruh operasional dalam satu pandangan', metrics: [['Proyek aktif', '16'], ['Anggota tim', '24'], ['Jatuh tempo minggu ini', '09'], ['Sesuai target', '92%']], rows: [['Siapkan laporan bulanan', 'Keuangan'], ['Tinjau transfer stok', 'Operasional'], ['Setujui pengajuan cuti', 'SDM']], bars: [62, 70, 46, 79, 88, 73] },
};

export const work: [string, string, string, string[]][] = [
  ['Platform Manajemen Bisnis', 'Operasional', 'Sistem manajemen internal custom untuk bisnis yang sedang bertumbuh.', ['React', 'TypeScript', 'PostgreSQL']],
  ['Aplikasi Layanan Mobile', 'Operasional lapangan', 'Aplikasi mobile yang menghubungkan pelanggan dengan tim layanan.', ['React Native', 'Node.js', 'Firebase']],
  ['Platform POS & Inventori', 'Ritel', 'Sistem manajemen transaksi dan pelacakan stok.', ['Web App', 'API', 'MySQL']],
  ['Website Perusahaan', 'Jasa profesional', 'Website perusahaan yang fokus pada kehadiran digital dan mendatangkan calon klien.', ['React', 'SEO', 'CMS']],
];
