import { type ReactNode } from 'react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-label eyebrow">{children}</div>;
}
