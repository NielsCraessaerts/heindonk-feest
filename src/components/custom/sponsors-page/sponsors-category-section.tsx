import Image from 'next/image';
import type { Sponsor, SponsorCategorie } from '@/data/sponsors';
import SponsorCard from './sponsor-card';
import SponsorMarquee from './sponsor-marquee';
import { isLowTierCategorie, isTopCategorie } from './sponsor-config';

type SponsorsCategorySectionProps = {
  categorie: SponsorCategorie;
  items: Sponsor[];
};

export default function SponsorsCategorySection({
  categorie,
  items,
}: SponsorsCategorySectionProps) {
  if (isTopCategorie(categorie)) {
    return (
      <section className='rounded-[28px] border border-white/20 bg-white/10 p-4 sm:p-6'>
        <div className='flex items-center justify-between gap-3'>
          <h2 className='text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F8C27A]'>
            {categorie}
          </h2>
        </div>

        <div className='mt-4 grid gap-4 lg:grid-cols-2'>
          {items.map((sponsor) => (
            <article
              key={sponsor.name}
              className='rounded-[22px] border border-white/20 bg-white/10 p-5'
            >
              <div className='flex items-center justify-center rounded-[16px] px-5 py-6'>
                <Image
                  src={sponsor.logoSrc}
                  alt={sponsor.name}
                  width={520}
                  height={280}
                  className='h-28 w-auto object-contain sm:h-32'
                />
              </div>

              <div className='mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row'>
                <p className='text-center text-[11px] font-extrabold uppercase tracking-[0.16em] text-white sm:text-left'>
                  {sponsor.name}
                </p>
                {sponsor.href ? (
                  <a
                    href={sponsor.href}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex h-10 items-center justify-center rounded-full border border-white/35 bg-white/15 px-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-white/25'
                  >
                    Bezoek sponsor
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (isLowTierCategorie(categorie)) {
    return <SponsorMarquee title={categorie} items={items} />;
  }

  return (
    <section className='rounded-[24px] border border-white/20 bg-white/10 p-4 sm:p-5'>
      <h2 className='text-center text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F8C27A] sm:text-left'>
        {categorie}
      </h2>

      <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {items.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </section>
  );
}
