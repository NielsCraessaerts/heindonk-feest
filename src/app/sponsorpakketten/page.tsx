'use client';

import { useRef } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type SponsorPackage = {
  name: string;
  price: string;
  perks: string[];
};

const sponsorPackages: SponsorPackage[] = [
  {
    name: 'Hoofdsponsor You are GOLD',
    price: 'EUR 5.000',
    perks: [
      'VIP Party-tafel vrijdag: 12 toegangskaarten + 3 flessen champagne',
      'VIP Party-tafel zaterdag: 12 toegangskaarten + 3 flessen champagne',
      'Sponsortafel zondag: brunch voor 12 + 3 flessen champagne + 12 tickets galawedstrijd',
      'Bedrijfslogo/advertentie op (digitale) poster en flyer',
      'Bedrijfslogo op alle communicatie',
      '1 grote + 1 kleine banner op terrein en in feesttent (banners voorzien door organisatie)',
      'Bedrijfslogo op website',
      'Vermelding op breekmunten',
      'Dedicated social post met dankvermelding',
    ],
  },
  {
    name: 'Hoofdsponsor SILVER',
    price: 'EUR 2.500',
    perks: [
      'VIP Party-tafel vrijdag: 8 toegangskaarten + 2 flessen champagne',
      'VIP Party-tafel zaterdag: 8 toegangskaarten + 2 flessen champagne',
      'Sponsortafel zondag: brunch voor 8 + 2 flessen champagne + 8 tickets galawedstrijd',
      '1 grote banner op terrein + 1 kleine banner in feesttent (banners voorzien door organisatie)',
      'Bedrijfslogo op website',
      'Dedicated social post met dankvermelding',
    ],
  },
  {
    name: 'Sponsor VIP Weekend',
    price: 'EUR 1.000',
    perks: [
      'VIP Party-tafel vrijdag: 4 toegangskaarten + 1 fles champagne',
      'VIP Party-tafel zaterdag: 4 toegangskaarten + 1 fles champagne',
      'Sponsortafel zondag: brunch voor 4 + 1 fles champagne + 4 tickets galawedstrijd',
      'Bedrijfslogo op website',
      'Non-dedicated social post met dankvermelding',
    ],
  },
  {
    name: 'Sponsor VIP Party Friday & Saturday',
    price: 'EUR 500',
    perks: [
      'VIP Party-tafel vrijdag: 4 toegangskaarten + 1 fles champagne',
      'VIP Party-tafel zaterdag: 4 toegangskaarten + 1 fles champagne',
      'Bedrijfslogo op website',
      'Non-dedicated social post met dankvermelding',
    ],
  },
  {
    name: 'Sponsor VIP Friday',
    price: 'EUR 300',
    perks: [
      'VIP Party-tafel vrijdag: 4 toegangskaarten + 1 fles champagne',
      'Bedrijfslogo op website',
      'Non-dedicated social post met dankvermelding',
    ],
  },
  {
    name: 'Sponsor VIP Saturday',
    price: 'EUR 300',
    perks: [
      'VIP Party-tafel zaterdag: 4 toegangskaarten + 1 fles champagne',
      'Bedrijfslogo op website',
      'Non-dedicated social post met dankvermelding',
    ],
  },
  {
    name: 'Sponsor VIP Sunday',
    price: 'EUR 500',
    perks: [
      'Sponsortafel zondag: brunch voor 4 + 1 fles champagne + 4 tickets galawedstrijd',
      'Bedrijfslogo op website',
      'Non-dedicated social post met dankvermelding',
    ],
  },
];

export default function SponsorpakkettenPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <main className='relative min-h-screen text-white'>
      <div className='pointer-events-none fixed inset-0 -z-20 bg-[#2E5DAA]' />
      <div className='pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)]' />
      <div className='pointer-events-none fixed inset-0 -z-20 opacity-[0.28] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_42px,rgba(255,255,255,0)_42px,rgba(255,255,255,0)_96px)]' />
      <div className="[background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')] pointer-events-none fixed inset-0 -z-20 opacity-[0.12]" />

      <div className='relative z-10 mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <section className='block-anim delay-1 rounded-[28px] bg-white/10 px-6 py-8 text-center sm:px-10'>
          <h1 className='text-xl font-extrabold uppercase leading-tight tracking-[0.08em] sm:text-4xl sm:tracking-[0.16em]'>
            Sponsorpakketten
          </h1>
          <p className='mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80'>
            Kies het pakket dat bij uw bedrijf past
          </p>
        </section>

        <section className='block-anim delay-2 mt-6'>
          <div className='mb-4 flex items-center justify-end gap-3'>
            <div className='sponsor-swiper-pagination' />
            <button
              type='button'
              aria-label='Vorige sponsorpakket'
              onClick={() => swiperRef.current?.slidePrev()}
              className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20'
            >
              &#8592;
            </button>
            <button
              type='button'
              aria-label='Volgende sponsorpakket'
              onClick={() => swiperRef.current?.slideNext()}
              className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20'
            >
              &#8594;
            </button>
          </div>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.sponsor-swiper-pagination' }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2 },
            }}
            className='sponsor-swiper'
          >
            {sponsorPackages.map((pkg) => (
              <SwiperSlide key={pkg.name} className='!h-auto'>
                <article className='h-full rounded-[24px] border border-white/20 bg-white/10 p-6'>
                  <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between'>
                    <h2 className='min-w-0 text-lg font-extrabold uppercase tracking-[0.1em] text-white sm:text-xl sm:tracking-[0.12em]'>
                      {pkg.name}
                    </h2>
                    <span className='shrink-0 self-start rounded-full bg-[#F39B3A] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white'>
                      {pkg.price}
                    </span>
                  </div>

                  <ul className='mt-5 space-y-3'>
                    {pkg.perks.map((perk) => (
                      <li
                        key={perk}
                        className='rounded-[16px] border border-white/15 bg-white/5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90'
                      >
                        {perk}
                      </li>
                    ))}
                  </ul>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className='block-anim mt-6 rounded-[24px] px-6 py-6 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <a
              href='/files/Heindonk%20Feest!%20Sponsordossier%20v1.00.docx'
              className='inline-flex rounded-full border border-white/50 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white transition hover:bg-white/10'
            >
              Download sponsordossier
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
