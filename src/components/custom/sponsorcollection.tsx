'use client';

import Image from 'next/image';
import type { Sponsor, SponsorCategorie } from '@/data/sponsors';
import { sponsors } from '@/data/sponsors';

type LogoSize = 'gold' | 'zilver' | 'vip';
const vipCategorieen: readonly SponsorCategorie[] = [
  'Sponsor VIP Weekend',
  'Sponsor VIP Party Friday & Saturday',
  'Sponsor VIP Friday',
  'Sponsor VIP Saturday',
  'Sponsor VIP Sunday',
];

const cardClassBySize: Record<LogoSize, string> = {
  gold:
    'flex min-h-72 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-5 transition hover:bg-white/20 sm:p-6',
  zilver:
    'flex min-h-36 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 transition hover:bg-white/20 sm:p-4',
  vip:
    'flex min-h-36 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 transition hover:bg-white/20 sm:p-4',
};

const imageClassBySize: Record<LogoSize, string> = {
  gold: 'h-auto max-h-[300px] w-full object-contain',
  zilver: 'h-auto max-h-[190px] w-full object-contain',
  vip: 'h-auto max-h-[180px] w-full object-contain',
};

function SponsorCard({
  sponsor,
  priority,
  size,
  delayClass,
}: {
  sponsor: Sponsor;
  priority: boolean;
  size: LogoSize;
  delayClass?: string;
}) {
  const content = (
    <>
      <Image
        src={sponsor.logoSrc}
        alt={sponsor.name}
        width={640}
        height={320}
        priority={priority}
        className={imageClassBySize[size]}
      />
      <span className='sr-only'>{sponsor.name}</span>
    </>
  );

  if (sponsor.href) {
    return (
      <a
        href={sponsor.href}
        target='_blank'
        rel='noreferrer'
        className={`block-anim ${delayClass ?? ''} ${cardClassBySize[size]}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={`block-anim ${delayClass ?? ''} ${cardClassBySize[size]}`}>
      {content}
    </div>
  );
}

export default function SponsorCollection() {
  const goldSponsors = sponsors.filter(
    (sponsor) => sponsor.categorie === 'Hoofdsponsor Gold'
  );
  const zilverSponsors = sponsors.filter(
    (sponsor) => sponsor.categorie === 'Hoofdsponsor Zilver'
  );
  const vipSponsors = sponsors.filter((sponsor) =>
    vipCategorieen.includes(sponsor.categorie)
  );

  return (
    <section className='space-y-10'>
      {goldSponsors.length > 0 ? (
        <div>
          <div className='grid grid-cols-1 gap-4'>
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.name}
                sponsor={sponsor}
                priority={index < 2}
                size='gold'
                delayClass={index === 0 ? 'delay-2' : 'delay-3'}
              />
            ))}
          </div>
        </div>
      ) : null}

      {zilverSponsors.length > 0 ? (
        <div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {zilverSponsors.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.name}
                sponsor={sponsor}
                priority={index < 2}
                size='zilver'
                delayClass={
                  index === 0 ? 'delay-2' : index === 1 ? 'delay-3' : 'delay-4'
                }
              />
            ))}
          </div>
        </div>
      ) : null}

      {vipSponsors.length > 0 ? (
        <div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {vipSponsors.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.name}
                sponsor={sponsor}
                priority={false}
                size='vip'
                delayClass={
                  index === 0
                    ? 'delay-2'
                    : index === 1
                      ? 'delay-3'
                      : index === 2
                        ? 'delay-4'
                        : undefined
                }
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
