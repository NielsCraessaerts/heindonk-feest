'use client';

import Link from 'next/link';
import { sponsors } from '@/data/sponsors';
import SponsorsCategorySection from '@/components/custom/sponsors-page/sponsors-category-section';
import {
  categorieVolgorde,
  sortSponsorsByGrootteThenName,
} from '@/components/custom/sponsors-page/sponsor-config';

export default function SponsorsPage() {
  const sponsorsPerCategorie = categorieVolgorde
    .map((categorie) => {
      const items = sponsors
        .filter((s) => s.categorie === categorie)
        .slice()
        .sort(sortSponsorsByGrootteThenName);

      return { categorie, items };
    })
    .filter((groep) => groep.items.length > 0);

  return (
    <main className='relative min-h-screen text-white'>
      <div className='pointer-events-none fixed inset-0 -z-20 bg-[#2E5DAA]' />
      <div className='pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)]' />
      <div className='pointer-events-none fixed inset-0 -z-20 opacity-[0.28] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_42px,rgba(255,255,255,0)_42px,rgba(255,255,255,0)_96px)]' />
      <div className="[background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')] pointer-events-none fixed inset-0 -z-20 opacity-[0.12]" />

      <div className='relative z-10 mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <section className='rounded-[28px] bg-white/10 px-6 py-8 text-center sm:px-10'>
          <h1 className='text-xl font-extrabold uppercase leading-tight tracking-[0.08em] sm:text-4xl sm:tracking-[0.16em]'>
            Wij danken onze sponsors
          </h1>

          <Link
            href='/sponsorpakketten'
            className='mt-6 inline-flex rounded-full bg-[#F39B3A] px-7 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white transition hover:brightness-110'
          >
            Word sponsor
          </Link>
        </section>

        <section className='mt-6 space-y-6'>
          {sponsorsPerCategorie.map((groep) => (
            <SponsorsCategorySection
              key={groep.categorie}
              categorie={groep.categorie}
              items={groep.items}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
