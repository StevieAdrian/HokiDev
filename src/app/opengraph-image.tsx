import { ImageResponse } from 'next/og';

import { siteConfig } from '@/config/site';

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const background = 'hsl(214, 60%, 22%)';
  const foreground = 'hsl(90, 25%, 98%)';
  const primary = 'hsl(245, 85%, 64%)';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background,
          color: foreground,
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: primary,
              marginRight: 16,
            }}
          />
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Jasa Pembuatan Website, Aplikasi &amp; Software Bisnis
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 32,
            color: 'hsl(90, 25%, 85%)',
            maxWidth: 880,
          }}
        >
          Software house di Indonesia untuk website, aplikasi mobile, POS, dan
          software bisnis custom.
        </div>
      </div>
    ),
    { ...size },
  );
}
