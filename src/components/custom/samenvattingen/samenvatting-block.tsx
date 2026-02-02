'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const summaries = [
  {
    slug: '/vrijdag',
    title: 'Vrijdag',
    date: '1 mei 2026',
    lines: ["Voetbaltoernooi met tal van DJ's"],
    featureTop: 'Extra Time',
    featureScript: 'Party',
    supportTitle: 'Met',
    supportLines: ['DJ A.R.N.', 'Aghatixx', 'DJ Dino'],
    tags: [
      { text: 'Jonas van Opstal', className: 'bg-white text-[#2B58B2]' },
      { text: 'DJ Pat B', className: 'bg-[#F39B3A] text-white' },
      { text: 'Yves Deruyter', className: 'bg-[#8B3A1E] text-white' },
    ],
  },
  {
    slug: '/zaterdag',
    title: 'Zaterdag',
    date: '2 mei 2026',
    lines: ['Fanfarefeesten', 'Familiedag', 'WK Kubben'],
    featureTop: 'Live',
    featureScript: 'Optredens',
    tags: [
      { text: 'DJ Sjekke', className: 'bg-[#F6D3B3] text-[#C96C2B]' },
      { text: 'De Jaargetijden', className: 'bg-white text-[#2B58B2]' },
      { text: 'Eigen Kweek', className: 'bg-[#F39B3A] text-white' },
      { text: 'Bram & Lennert', className: 'bg-[#8B3A1E] text-white' },
    ],
  },
  {
    slug: '/zondag',
    title: 'Zondag',
    date: '3 mei 2026',
    lines: [
      'Brunch',
      "Galawedstrijd BV's - Oude Gloriën VK Heindonk",
      'Veiling wedstrijdshirts voor het goede doel',
    ],
    featureTop: 'Food',
    featureScript: 'Trucks',
    tags: [
      { text: 'Heel het', className: 'bg-[#F6D3B3] text-[#C96C2B]' },
      { text: 'Weekend', className: 'bg-[#F39B3A] text-white' },
    ],
  },
];

export default function SamenvattingBlock() {
  return (
    <section
      className='summary-anim relative overflow-hidden bg-[#2E5DAA] text-white'
      id='programma'
    >
      {/* Poster wash + stripes */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)]' />
      <div className='absolute inset-0 opacity-[0.28] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_42px,rgba(255,255,255,0)_42px,rgba(255,255,255,0)_96px)]' />
      <div className="[background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')] pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className='relative mx-auto w-full max-w-6xl px-6 py-12 md:py-16'>
        <div className='text-center text-sm uppercase tracking-[0.4em] text-white/80'>
          Programma
        </div>

        {/* Mobile: swiper */}
        <div className='mt-8 md:hidden'>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            grabCursor
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {summaries.map((summary) => (
              <SwiperSlide key={summary.slug} className='!h-auto'>
                <div
                  className='flex min-h-[640px] flex-col text-center'
                  data-anim
                >
                  <Link href={summary.slug} className='inline-block'>
                    <p className='text-3xl font-bold uppercase tracking-[0.18em]'>
                      {summary.title}
                    </p>
                    <p className='mt-2 text-xl uppercase tracking-[0.28em] text-white/90'>
                      {summary.date}
                    </p>
                  </Link>

                  <div className='mt-6 h-px w-full bg-white/40' />
                  <div className='mt-6 space-y-2 text-sm uppercase tracking-[0.3em] text-white/85'>
                    {summary.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <div className='mt-6 h-px w-full bg-white/40' />
                  <p className='mt-6 text-2xl font-bold uppercase tracking-[0.22em]'>
                    {summary.featureTop}
                  </p>
                  <p className='font-lobster mt-1 text-4xl font-normal normal-case tracking-[0.06em]'>
                    {summary.featureScript}
                  </p>

                  {summary.supportTitle ? (
                    <div className='mt-8'>
                      <p className='text-[13px] uppercase tracking-[0.28em] text-white/75'>
                        {summary.supportTitle}
                      </p>
                      <div className='mt-3 flex flex-col items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.28em] text-white/90'>
                        {summary.supportLines?.map((dj) => (
                          <span key={dj}>{dj}</span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className='mt-8 flex flex-col items-center gap-4'>
                    {summary.tags.map((tag) => (
                      <span
                        key={tag.text}
                        className={`inline-block -rotate-2 rounded-[10px] px-4 py-2 text-base font-bold uppercase tracking-[0.18em] ${tag.className}`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  <div className='pb-10 pt-10'>
                    <Link
                      href={summary.slug}
                      className='inline-block rounded-full border border-white/60 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:bg-white/10'
                    >
                      Meer info
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: 3 columns + aligned buttons */}
        <div className='summary-grid mt-8 hidden items-stretch gap-10 md:grid md:grid-cols-3'>
          {summaries.map((summary) => (
            <div key={summary.slug} className='text-center' data-anim>
              <Link href={summary.slug} className='inline-block'>
                <p className='text-3xl font-bold uppercase tracking-[0.18em]'>
                  {summary.title}
                </p>
                <p className='mt-2 text-xl uppercase tracking-[0.28em] text-white/90'>
                  {summary.date}
                </p>
              </Link>
              <div className='mt-6 h-px w-full bg-white/40' />
              <div className='mt-6 space-y-2 text-sm uppercase tracking-[0.3em] text-white/85'>
                {summary.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className='mt-6 h-px w-full bg-white/40' />
              <p className='mt-6 text-2xl font-bold uppercase tracking-[0.22em]'>
                {summary.featureTop}
              </p>
              <p className='font-lobster mt-1 text-4xl font-normal normal-case tracking-[0.06em]'>
                {summary.featureScript}
              </p>

              {summary.supportTitle ? (
                <div className='mt-8'>
                  <p className='text-[13px] uppercase tracking-[0.28em] text-white/75'>
                    {summary.supportTitle}
                  </p>
                  <div className='mt-3 flex flex-col items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.28em] text-white/90'>
                    {summary.supportLines?.map((dj) => (
                      <span key={dj}>{dj}</span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className='mt-8 flex flex-col items-center gap-4'>
                {summary.tags.map((tag) => (
                  <span
                    key={tag.text}
                    className={`inline-block -rotate-2 rounded-[10px] px-4 py-2 text-base font-bold uppercase tracking-[0.18em] ${tag.className}`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='hidden gap-10 pt-10 md:grid md:grid-cols-3'>
          {summaries.map((summary) => (
            <div key={`${summary.slug}-cta`} className='text-center' data-anim>
              <Link
                href={summary.slug}
                className='inline-block rounded-full border border-white/60 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:bg-white/10'
              >
                Meer info
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
