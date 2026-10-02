'use client';

import { ArrowUpRight } from 'lucide-react';

import { openWhatsApp } from '@/lib/whatsapp';

export function WhatsAppCta({
  message,
  source,
  label = 'Diskusi via WhatsApp',
}: {
  message: string;
  source: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      className="button-primary"
      onClick={() => openWhatsApp(message, source)}
      data-testid={`button-${source}`}
    >
      {label} <ArrowUpRight size={15} aria-hidden="true" />
    </button>
  );
}
