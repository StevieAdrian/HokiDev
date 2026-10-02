import Link from 'next/link';

import type { Crumb } from '@/lib/seo';

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="svc-breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
