export const siteConfig = {
  name: 'HokiDev',
  title: 'HokiDev — Jasa Pembuatan Website, Aplikasi & Software Bisnis',
  description:
    'HokiDev adalah software house di Indonesia yang membangun website, aplikasi mobile, sistem POS, dan software bisnis custom sesuai alur kerja bisnis Anda.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'id_ID',
} as const;

export const mainNav: ReadonlyArray<{ title: string; href: string }> = [
  { title: 'Layanan', href: '#services' },
  { title: 'Solusi', href: '#solutions' },
  { title: 'Karya', href: '#work' },
  { title: 'Tentang', href: '#about' },
];
