import Image from 'next/image';

import logo from '@/assets/brand/hokidev-logo.png';

/** `preload` only for the instance that is above the fold (the header). */
export function Logo({ preload = false }: { preload?: boolean }) {
  return (
    <a href="#top" className="wordmark" data-testid="link-logo" aria-label="Beranda HokiDev">
      <Image src={logo} alt="HokiDev" height={28} preload={preload} />
    </a>
  );
}
