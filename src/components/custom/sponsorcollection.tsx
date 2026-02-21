'use client';

import Image from 'next/image';
import type { Sponsor, SponsorCategorie } from '@/data/sponsors';
import { sponsors } from '@/data/sponsors';

type CategoryConfig = {
  title: SponsorCategorie;
  columns: 2 | 3 | 4 | 6;
};

type LogoSize = 'gold' | 'zilver' | 'vip' | 'standaard';

const categoryOrder: readonly CategoryConfig[] = [
  { title: 'Hoofdsponsor Gold', columns: 2 },
  { title: 'Hoofdsponsor Zilver', columns: 3 },
  { title: 'Sponsor VIP Weekend', columns: 4 },
  { title: 'Sponsor VIP Party Friday & Saturday', columns: 4 },
  { title: 'Sponsor VIP Friday', columns: 6 },
  { title: 'Sponsor VIP Saturday', columns: 6 },
  { title: 'Sponsor VIP Sunday', columns: 6 },
];

const gridClassByColumns: Record<CategoryConfig['columns'], string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6',
};

const logoSizeByColumns: Record<CategoryConfig['columns'], LogoSize> = {
  2: 'gold',
  3: 'zilver',
  4: 'vip',
  6: 'standaard',
};

const cardClassBySize: Record<LogoSize, string> = {
  gold:
    'flex min-h-72 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-10 transition hover:bg-white/20',
  zilver:
    'flex min-h-36 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-4 transition hover:bg-white/20',
  vip:
    'flex min-h-36 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-4 transition hover:bg-white/20',
  standaard:
    'flex min-h-36 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-4 transition hover:bg-white/20',
};

const imageClassBySize: Record<LogoSize, string> = {
  gold: 'h-44 w-full max-w-[760px] object-contain sm:h-48',
  zilver: 'h-20 w-full max-w-[260px] object-contain sm:h-24',
  vip: 'h-20 w-full max-w-[260px] object-contain sm:h-24',
  standaard: 'h-20 w-full max-w-[260px] object-contain sm:h-24',
};

function SponsorCard({
  sponsor,
  priority,
  size,
}: {
  sponsor: Sponsor;
  priority: boolean;
  size: LogoSize;
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
        className={cardClassBySize[size]}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cardClassBySize[size]}>
      {content}
    </div>
  );
}

export default function SponsorCollection() {
  return (
    <section className='space-y-10'>
      {categoryOrder.map((category, categoryIndex) => {
        const sponsorsInCategory = sponsors.filter(
          (sponsor) => sponsor.categorie === category.title
        );

        if (sponsorsInCategory.length === 0) {
          return null;
        }

        return (
          <div key={category.title}>
            <div className={`grid gap-4 ${gridClassByColumns[category.columns]}`}>
              {sponsorsInCategory.map((sponsor, sponsorIndex) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  priority={categoryIndex < 2 && sponsorIndex < 2}
                  size={logoSizeByColumns[category.columns]}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
