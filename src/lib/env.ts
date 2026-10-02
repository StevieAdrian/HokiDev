/**
 * Single place where environment variables enter the app.
 * Import from here instead of touching `process.env` elsewhere, so a missing
 * variable fails loudly at startup rather than silently at runtime.
 */

function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

/** Server-only values. Never import this into a Client Component. */
export const serverEnv = {
  nodeEnv: process.env.NODE_ENV,
} as const;

/** Values safe to expose to the browser. Must be prefixed with NEXT_PUBLIC_. */
export const publicEnv = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
} as const;

export { required };
