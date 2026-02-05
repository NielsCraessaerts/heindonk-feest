'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function LiveOptredensSection() {
  const acts = [
    { name: 'DJ Sjekke', tone: 'peach', time: '20:00', imgSrc: '' },
    { name: 'De Jaargetijden', tone: 'white', time: '21:30', imgSrc: '' },
    { name: 'Eigen Kweek', tone: 'orange', time: '23:00', imgSrc: '' },
    { name: 'Bram & Lennert', tone: 'brown', time: '00:30', imgSrc: '' },
  ] as const;

  const toneClass: Record<(typeof acts)[number]['tone'], string> = {
    peach:
      'bg-[#F6C89B] text-[#8B3F12] border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]',
    white:
      'bg-white text-[#1F4E97] border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]',
    orange:
      'bg-[#F39B3A] text-white border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]',
    brown:
      'bg-[#7A3A24] text-white border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.6)]',
  };

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
                      'rounded-[20px] p-6',
                      'shadow-[0_26px_60px_-40px_rgba(0,0,0,0.55)]',
                      toneClass[a.tone],
                    ].join(' ')}
                  >
                    <div className='flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.34em]'>
                      <span>Live</span>
                      <span>{a.time}</span>
                    </div>
                    <h3 className='mt-6 text-2xl font-extrabold uppercase tracking-[0.18em]'>
                      {a.name}
                    </h3>
                    <p className='mt-2 text-[12px] font-semibold uppercase tracking-[0.24em]'>
                      Avondprogramma
                    </p>
                    <div className='mt-6 h-40 overflow-hidden rounded-[14px] bg-white/15'>
                      {a.imgSrc ? (
                        <div className='relative h-full w-full'>
                          <Image
                            src={a.imgSrc}
                            alt={a.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                      ) : (
                        <div className='flex h-full w-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80'>
                          Foto
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className='mt-8 grid gap-4 md:grid-cols-2'>
              <div className='rounded-[22px] bg-white/10 px-5 py-5 text-center'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.38em] text-white/85'>
                  Tickets
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                  Link naar WeTickets + QR code
                </p>
              </div>

              <div className='flex items-center justify-center rounded-[22px] bg-white/10 px-5 py-5'>
                <a
                  href='/sponsorpakketten'
                  className='bg-white/12 hover:bg-white/18 inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-white transition'
                >
                  VIP arrangement
                </a>
              </div>
            </div>
          </div>

          <div className='px-6 py-4 text-center'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/75'>
              Zaterdag • Live muziek • Tickets via WeTickets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
