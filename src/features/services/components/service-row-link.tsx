import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function ServiceRowLink({
  href,
  number,
  title,
  description,
}: {
  href: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Link className="svc-row-link" href={href}>
      <div className="service-row">
        <span className="service-number">{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ChevronRight size={17} className="muted-copy" aria-hidden="true" />
      </div>
    </Link>
  );
}

export const rowNumber = (index: number) => String(index + 1).padStart(2, '0');
