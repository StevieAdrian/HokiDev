'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  ChevronDown,
  Globe,
  Lightbulb,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

import {
  servicePages,
  servicePath,
  type ServiceSlug,
} from '@/features/services/data';

const icons: Record<ServiceSlug, LucideIcon> = {
  'jasa-pembuatan-website': Globe,
  'jasa-pembuatan-aplikasi': Smartphone,
  'jasa-pembuatan-software': Boxes,
  'konsultasi-teknologi': Lightbulb,
  'jasa-seo': TrendingUp,
};

const CLOSE_DELAY_MS = 150;

export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  useEffect(() => cancelClose, []);

  return (
    <div
      ref={rootRef}
      className="nav-dropdown"
      data-open={open}
      onPointerEnter={(event) => {
        if (event.pointerType !== 'mouse') return;
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') scheduleClose();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <div className="nav-dropdown-trigger">
        <Link className="nav-link" href="/layanan" data-testid="link-nav-layanan" onClick={() => setOpen(false)}>
          Layanan Kami
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="nav-dropdown-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Tutup menu layanan' : 'Buka menu layanan'}
          onClick={() => setOpen((value) => !value)}
          data-testid="button-nav-layanan"
        >
          <ChevronDown size={14} aria-hidden="true" />
        </button>
      </div>

      <div id={panelId} className="nav-dropdown-panel">
        <div className="container-wide">
          <ul className="nav-dropdown-grid">
            {servicePages.map((page) => {
              const Icon = icons[page.slug];
              return (
                <li key={page.slug}>
                  <Link
                    className="nav-dropdown-item"
                    href={servicePath(page.slug)}
                    onClick={() => setOpen(false)}
                    data-testid={`link-nav-service-${page.slug}`}
                  >
                    <span className="nav-dropdown-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <span>
                      <strong>{page.name}</strong>
                      <span>{page.summary}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-dropdown-footer">
            <span>Belum yakin butuh yang mana? Ceritakan masalahnya, kami bantu arahkan.</span>
            <Link href="/layanan" onClick={() => setOpen(false)}>
              Lihat semua layanan <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
