'use client';

import { MessageCircle } from 'lucide-react';

import { openWhatsApp } from '@/lib/whatsapp';

export function WhatsAppButton() {
  return <button className="floating-whatsapp" onClick={() => openWhatsApp()} aria-label="Chat dengan HokiDev via WhatsApp" data-testid="button-floating-whatsapp"><MessageCircle size={17} /><span>WhatsApp HokiDev</span></button>;
}
