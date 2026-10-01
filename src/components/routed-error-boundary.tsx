'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { ErrorBoundary } from '@/components/error-boundary';

/** Clears a caught error when the route changes, so navigation recovers the UI. */
export function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <ErrorBoundary resetKey={pathname}>{children}</ErrorBoundary>;
}
