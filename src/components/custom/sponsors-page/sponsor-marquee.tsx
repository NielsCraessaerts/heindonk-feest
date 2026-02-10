import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Sponsor } from '@/data/sponsors';

type SponsorMarqueeProps = {
  title: string;
  items: Sponsor[];
};

export default function SponsorMarquee({ title, items }: SponsorMarqueeProps) {
  const loopItems = [...items, ...items];
  const duration = Math.max(18, items.length * 6);
  const marqueeStyle = {
    ['--marquee-duration' as string]: `${duration}s`,
  } as CSSProperties;

  return (
    <section className='rounded-[24px] border border-white/20 bg-white/10 p-4 sm:p-5'>
      <h2 className='text-center text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F8C27A] sm:text-left'>
        {title}
      </h2>

      <div className='relative mt-4 overflow-hidden rounded-[18px] border border-white/15 bg-white/5'>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#2E5DAA] to-transparent opacity-70' />
        <div className='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#2E5DAA] to-transparent opacity-70' />

        <div className='marquee flex items-center gap-6 py-4' style={marqueeStyle}>
          {loopItems.map((sponsor, idx) =>
            sponsor.href ? (
              <a
                key={`${sponsor.name}-${idx}`}
                href={sponsor.href}
                target='_blank'
                rel='noreferrer'
                className='group flex shrink-0 items-center gap-3 rounded-full px-4 py-2 transition hover:bg-white/15'
              >
                <div className='flex h-10 w-28 items-center justify-center'>
                  <Image
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    width={180}
                    height={80}
                    className='h-9 w-auto object-contain'
                  />
                </div>
                <span className='hidden text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/90 sm:inline'>
                  {sponsor.name}
                </span>
              </a>
            ) : (
              <div
                key={`${sponsor.name}-${idx}`}
                className='group flex shrink-0 items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2'
              >
                <div className='flex h-10 w-28 items-center justify-center'>
                  <Image
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    width={180}
                    height={80}
                    className='h-9 w-auto object-contain'
                  />
                </div>
                <span className='hidden text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/90 sm:inline'>
                  {sponsor.name}
                </span>
              </div>
            )
          )}
        </div>

        <style jsx>{`
          .marquee {
            width: max-content;
            will-change: transform;
            animation: scroll var(--marquee-duration, 26s) linear infinite;
          }
          .marquee:hover,
          .marquee:focus-within {
            animation-play-state: paused;
          }
          @keyframes scroll {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(-50%, 0, 0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee {
              animation: none;
              width: 100%;
              flex-wrap: wrap;
              justify-content: center;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
