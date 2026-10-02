import { trackEvent } from '@/lib/analytics';
import { siteConfig } from '@/config/site';

const whatsappUrl = `https://wa.me/${siteConfig.phone.replace('+', '')}?text=`;

export function openWhatsApp(
  message = 'Halo HokiDev, saya ingin berdiskusi tentang proyek software untuk bisnis saya.',
  source = 'unknown',
) {
  trackEvent('whatsapp_click', { source });
  window.open(
    `${whatsappUrl}${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  );
}
