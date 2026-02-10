'use client';

import Image from 'next/image';
import { useRef } from 'react';
import TicketsInfoBlock from '../tickets';

export default function LiveOptredensSection() {
  const acts = [
    {
      name: 'De Jaargetijden',
      time: '20:00',
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
      time: '22:20',
      imgSrc: '/images/eigenkweek.png',
      intro: `Eigenkweek is het resultaat van een uitgekiend kweekprogramma want het bestaat uitsluitend uit leden van de familie Vangrunderbeek.
      De groep werd wereldberoemd in Zemst en omstreken dankzij een legendarisch optreden in café De Kroeg in september 2019 en sindsdien zijn ze niet meer te stoppen.`,
    },
    {
      name: 'Bram & Lennert',
      time: '00:00',
      imgSrc: '/images/Bram-Lennert.png',
      intro: `Wat ooit begon als twee vrienden met een gitaar in Ninove, groeide uit tot een muzikaal duo dat niet meer weg te denken is van de Vlaamse podia.
      Eens wereldberoemd in Ninove en omstreken — ondertussen een gevestigde naam met een ijzersterke live-reputatie.`,
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
                    suppressHydrationWarning
                    onClick={() => scrollByCard('prev')}
                    aria-label='Vorige artiest'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25'
                  >
                    &#8592;
                  </button>
                  <button
                    type='button'
                    suppressHydrationWarning
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
                  DJ Sjekke rijgt de hele avond aaneen.
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
                      'relative overflow-hidden',
                      'rounded-[28px] border border-white/10',
                      'bg-[#F39B3A]',
                      'shadow-[0_26px_60px_-40px_rgba(0,0,0,0.55)]',
                      'mx-3 sm:mx-4',
                    ].join(' ')}
                  >
                    <div className='pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]' />
                    <div className='pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10' />

                    <div className='absolute right-6 top-5 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white/90'>
                      {a.time}
                    </div>

                    <div className='grid gap-7 px-7 py-9 sm:px-9 md:grid-cols-[270px_minmax(0,1fr)] md:items-center'>
                      <div className='relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-white/10'>
                        {a.imgSrc ? (
                          <Image
                            src={a.imgSrc}
                            alt={a.name}
                            fill
                            className='object-contain p-2'
                          />
                        ) : (
                          <div className='flex h-full w-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80'>
                            Foto
                          </div>
                        )}
                      </div>

                      <div className='flex flex-col items-center text-center'>
                        <h3 className='text-2xl font-extrabold uppercase leading-tight tracking-[0.08em] text-white sm:text-3xl sm:tracking-[0.16em]'>
                          {a.name}
                        </h3>

                        <div className='mx-auto mt-5 max-w-[54ch]'>
                          <p className='whitespace-pre-line text-[14px] font-semibold leading-relaxed tracking-[0.02em] text-white/95'>
                            {a.intro}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <TicketsInfoBlock ticketPrice='EUR 25' />
          </div>
        </div>
      </div>
    </section>
  );
}
