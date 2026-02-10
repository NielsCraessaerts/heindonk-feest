'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { CSSProperties } from 'react';
import { sponsors } from '@/data/sponsors';

export default function SponsorsStrip() {
  const pathname = usePathname();
  const showHomepageBackground = pathname === '/';
  const loopCopies = 4;
  const loopedSponsors = Array.from({ length: loopCopies }).flatMap(
    () => sponsors
  );
  const marqueeStyle = {
    ['--logo-marquee-shift' as string]: `-${100 / loopCopies}%`,
    ['--logo-marquee-duration' as string]: '26s',
  } as CSSProperties;

  return (
    <section className='relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden py-6 sm:py-8'>
      {showHomepageBackground ? (
        <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(46,93,170,0.95),rgba(46,93,170,0.45)_15%,rgba(46,93,170,0.45)_85%,rgba(46,93,170,0.95))]' />
      ) : null}
      <div className='relative'>
        <div
          className='logo-marquee-track flex w-max items-center gap-4 px-3 sm:gap-6 sm:px-4'
          style={marqueeStyle}
        >
          {loopedSponsors.map((sponsor, index) =>
            sponsor.href ? (
              <a
                key={`${sponsor.name}-${index}`}
                href={sponsor.href}
                target='_blank'
                rel='noreferrer'
                className='flex h-20 w-36 shrink-0 items-center justify-center rounded-[16px] border border-white/20 bg-white/10 px-3 transition hover:bg-white/20 sm:h-24 sm:w-44'
                title={sponsor.name}
              >
                <Image
                  src={sponsor.logoSrc}
                  alt={sponsor.name}
                  width={140}
                  height={72}
                  priority={index < sponsors.length}
                  className='h-14 w-auto object-contain sm:h-16'
                />
              </a>
            ) : (
              <div
                key={`${sponsor.name}-${index}`}
                className='flex h-20 w-36 shrink-0 items-center justify-center rounded-[16px] border border-white/20 bg-white/10 px-3 sm:h-24 sm:w-44'
                title={sponsor.name}
              >
                <Image
                  src={sponsor.logoSrc}
                  alt={sponsor.name}
                  width={140}
                  height={72}
                  priority={index < sponsors.length}
                  className='h-14 w-auto object-contain sm:h-16'
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
