const whatsappUrl = 'https://wa.me/?text=';

export function openWhatsApp(
  message = 'Halo HokiDev, saya ingin berdiskusi tentang proyek software untuk bisnis saya.',
) {
  window.open(
    `${whatsappUrl}${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  );
}
