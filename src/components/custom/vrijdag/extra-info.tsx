'use client';

import Image from 'next/image';

export default function ExtraInfoVrijdag() {
  // Support DJ’s (kleiner, in 1 rij)
  const extraTimeDjs = ['DJ A.R.N.', 'Aghatixx', 'DJ Dino'];

  // 3 headliners (grote kaarten)
  const headliners = [
    { name: 'Jonas Van Opstal', photoSrc: '' },
    { name: 'DJ Pat B', photoSrc: '' },
    { name: 'Yves Deruyter', photoSrc: '' },
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-14 md:py-20'>
        {/* Header */}
        <div className='text-center'>
          <p className='text-[11px] font-semibold uppercase tracking-[0.38em] text-white/85'>
            Vrijdag
          </p>

          <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.22em] sm:text-5xl'>
            Extra Time
          </h2>

          <p className='font-lobster mt-2 text-4xl font-normal tracking-[0.06em] text-white/95 sm:text-5xl'>
            Party
          </p>

          {/* Sticker badge */}
          <div className='mx-auto mt-7 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-[999px] bg-white px-5 py-3 text-[#C56C3A] shadow-[0_26px_70px_-50px_rgba(0,0,0,0.65)]'>
            <span className='text-[11px] font-extrabold uppercase tracking-[0.32em]'>
              Start
            </span>
            <span className='font-lobster text-2xl font-extrabold tracking-[0.08em]'>
              20u00
            </span>
            <span className='hidden h-5 w-px bg-[#C56C3A]/25 sm:block' />
            <span className='text-[11px] font-semibold uppercase tracking-[0.28em]'>
              Op het terrein van VK Heindonk
            </span>
          </div>
        </div>

        {/* Main panel (jouw pagina-achtergrond blijft zichtbaar) */}
        <div className='border-white/16 mt-10 rounded-[28px] border bg-[#133B76]/80 shadow-[0_28px_80px_-58px_rgba(0,0,0,0.75)] backdrop-blur'>
          {/* Top bar */}
          <div className='border-white/12 flex flex-col gap-3 border-b px-6 py-5 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-[11px] font-semibold uppercase tracking-[0.38em] text-white/80'>
                Programma
              </p>
              <p className='mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-white/95'>
                Extra Time Party line-up
              </p>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-2 sm:justify-end'>
              <span className='border-white/18 rounded-full border bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/85'>
                Save the date
              </span>
              <span className='border-white/18 rounded-full border bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/85'>
                1-2-3 mei ’26
              </span>
            </div>
          </div>

          <div className='grid gap-6 px-6 py-6 lg:grid-cols-12'>
            {/* Left: context + korte uitleg */}
            <div className='lg:col-span-5'>
              <div className='border-white/14 bg-white/8 rounded-[22px] border px-5 py-5'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.38em] text-white/80'>
                  Tijdens het tornooi
                </p>

                <div className='border-white/12 bg-white/6 mt-4 rounded-[18px] border px-4 py-3'>
                  <p className='text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/95'>
                    Doorlopend sfeer &amp; muziek
                  </p>
                  <p className='mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75'>
                    In en rond de feesttent
                  </p>
                </div>

                {/* Tickets mini card */}
                <div className='border-white/12 bg-white/6 mt-5 rounded-[18px] border px-4 py-4 text-center'>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                    Tickets
                  </p>
                  <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                    Inschrijven via WeTickets
                  </p>
                  <p className='mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75'>
                    (Link/QR op de pagina)
                  </p>
                </div>

                {/* VIP button */}
                <div className='mt-4 flex items-center justify-center'>
                  <a
                    href='/sponsorpakketten'
                    className='bg-white/12 hover:bg-white/18 inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-white transition'
                  >
                    VIP arrangement
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Headliners (3 grote kaarten) + support DJ’s in één rij */}
            <div className='lg:col-span-7'>
              <div className='border-white/14 bg-white/8 rounded-[22px] border px-5 py-6'>
                <p className='text-center text-[11px] font-semibold uppercase tracking-[0.38em] text-white/80'>
                  Headliners
                </p>

                {/* BIG headliner cards */}
                <div className='mt-6 grid gap-5 md:grid-cols-3'>
                  {headliners.map((dj) => (
                    <div
                      key={dj.name}
                      className='border-white/18 hover:bg-white/14 group relative rounded-[26px] border bg-white/10 px-5 py-6 text-center shadow-[0_26px_70px_-52px_rgba(0,0,0,0.65)] transition'
                    >
                      {/* photo */}
                      <div className='relative mx-auto h-[110px] w-[110px] overflow-hidden rounded-full border border-white/30 bg-white/10 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.7)]'>
                        {dj.photoSrc ? (
                          <Image
                            src={dj.photoSrc}
                            alt={dj.name}
                            fill
                            className='object-cover'
                          />
                        ) : (
                          <div className='flex h-full w-full items-center justify-center text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70'>
                            Foto
                          </div>
                        )}
                      </div>

                      {/* name */}
                      <p className='mt-5 text-[13px] font-extrabold uppercase tracking-[0.28em] text-white'>
                        {dj.name}
                      </p>

                      {/* badge */}
                      <div className='mx-auto mt-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/85'>
                        Headliner
                      </div>
                    </div>
                  ))}
                </div>

                {/* SUPPORT DJ row (1 lijn) */}
                <div className='mt-8'>
                  <p className='text-center text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                    Extra DJ’s
                  </p>

                  <div className='mt-4 flex gap-3 overflow-x-auto pb-2 sm:justify-center'>
                    {extraTimeDjs.map((dj) => (
                      <div
                        key={dj}
                        className='whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.3em] text-white/90'
                      >
                        {dj}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom helper line */}
          <div className='border-t border-white/10 px-6 py-4 text-center'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/75'>
              Sport, spel &amp; muziek • Foodtrucks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
