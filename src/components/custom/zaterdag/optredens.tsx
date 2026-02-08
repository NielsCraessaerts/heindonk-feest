'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function LiveOptredensSection() {
  const acts = [
    {
      name: 'De Jaargetijden',
      time: '21:30',
      imgSrc: '/images/jaargetijden.png',
      intro: `Het betere levenslied:
van Metallica tot jantje smit
Born to be live, maar ook ... to be wild
Vader Abraham meets Destiny's Child
Geen taal is taboe noch stijl wordt gesmeden
Muziek in zijnen blote, oprecht en onversneden`,
    },
    {
      name: 'Eigen Kweek',
      time: '23:00',
      imgSrc: '',
      intro: 'Stevige set met energie en herkenbare feestnummers.',
    },
    {
      name: 'Bram & Lennert',
      time: '00:30',
      imgSrc: '',
      intro: 'Sluiten de avond af met een sterke live partyvibe.',
    },
  ] as const;

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const node = sliderRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>('[data-card]');
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 24;
    const delta = cardWidth + gap;
    node.scrollBy({
      left: direction === 'next' ? delta : -delta,
      behavior: 'smooth',
    });
  };

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] sm:text-5xl'>
              Live
            </h2>
            <p className='font-lobster mt-2 text-3xl font-normal tracking-[0.08em] text-white/95'>
              Optredens
            </p>

            <div className='mx-auto mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2'>
              <span className='text-[10px] font-extrabold uppercase tracking-[0.34em] text-white/90'>
                In de tent
              </span>
              <span className='h-4 w-px bg-white/25' />
              <span className='text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80'>
                Avondprogramma
              </span>
            </div>
          </div>

          <div className='relative max-w-6xl px-6 pb-6 sm:px-12'>
            <div className='w-full'>
              <div className='mb-4 flex items-center justify-between gap-3'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                  Line-up
                </p>
                <div className='flex items-center gap-2'>
                  <button
                    type='button'
                    onClick={() => scrollByCard('prev')}
                    aria-label='Vorige artiest'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25'
                  >
                    &#8592;
                  </button>
                  <button
                    type='button'
                    onClick={() => scrollByCard('next')}
                    aria-label='Volgende artiest'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25'
                  >
                    &#8594;
                  </button>
                </div>
              </div>

              <div className='mb-4 rounded-[16px] bg-white/10 px-5 py-4 text-center'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80'>
                  Doorlopend
                </p>
                <p className='mt-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  DJ Sjekke rijgt de hele avond aaneen tussen alle artiesten.
                </p>
              </div>

              <div
                ref={sliderRef}
                className='flex w-full snap-x snap-mandatory gap-y-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
              >
                {acts.map((a) => (
                  <article
                    key={a.name}
                    data-card
                    className={[
                      'snap-start',
                      'w-full shrink-0',
                      'rounded-[20px] border border-white/10 bg-[#F39B3A] p-6 text-white',
                      'shadow-[0_26px_60px_-40px_rgba(0,0,0,0.55)]',
                    ].join(' ')}
                  >
                    <div className='flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.34em]'>
                      <span>Live</span>
                      <span>{a.time}</span>
                    </div>
                    <h3 className='mt-4 text-2xl font-extrabold uppercase tracking-[0.18em]'>
                      {a.name}
                    </h3>

                    <div className='mt-5 grid gap-4 md:grid-cols-[200px_minmax(0,1fr)] md:items-center'>
                      <div className='h-44 overflow-hidden rounded-[14px] bg-white/15 md:h-full'>
                        {a.imgSrc ? (
                          <div className='relative h-full w-full'>
                            <Image
                              src={a.imgSrc}
                              alt={a.name}
                              fill
                              className='object-contain p-2'
                            />
                          </div>
                        ) : (
                          <div className='flex h-full w-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80'>
                            Foto
                          </div>
                        )}
                      </div>

                      <div className='flex h-full items-start justify-center text-center'>
                        <p className='whitespace-pre-line text-[14px] font-semibold leading-relaxed tracking-[0.02em] text-white/95'>
                          {a.intro}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className='mt-8 grid gap-4 lg:grid-cols-2'>
              <div className='border-white/12 rounded-[24px] border bg-[#F39B3A] px-6 py-6 text-center text-white shadow-[0_28px_90px_-70px_rgba(0,0,0,0.9)]'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/95'>
                  Tickets
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  WeTickets + QR code
                </p>
                <div className='mx-auto mt-4 h-20 w-20 overflow-hidden rounded-[18px] bg-white/20'>
                  <Image
                    src='/images/qr-code.png'
                    alt='QR code tickets'
                    width={80}
                    height={80}
                    className='h-20 w-20 object-contain'
                  />
                </div>
                <p className='mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/90'>
                  Scan voor tickets
                </p>
              </div>

              <div className='border-white/12 rounded-[24px] border bg-white/10 px-6 py-6 text-center'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/80'>
                  VIP arrangement
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Via sponsoring
                </p>

                <a
                  href='/sponsorpakketten'
                  className='mt-5 inline-flex h-12 items-center justify-center rounded-full bg-white/15 px-6 text-[11px] font-extrabold uppercase tracking-[0.32em] text-white transition hover:bg-white/25 active:scale-[0.99]'
                >
                  Bekijk VIP mogelijkheden
                </a>

                <p className='mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70'>
                  Support the cause &bull; Support the club
                </p>
              </div>
            </div>
          </div>

          <div className='px-6 py-4 text-center'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/75'>
              Sport, spel en muziek &bull; Foodtrucks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
