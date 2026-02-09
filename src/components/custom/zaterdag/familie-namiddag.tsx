'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FamilienamiddagSection() {
  const activities = [
    'Groot springkasteel / run',
    'Levend voetbalspel',
    'Voetbaldarts',
    'Grime',
    'Gratis inkom',
  ];
  const photos = [
    '/images/familienamiddag/darts.png',
    '/images/familienamiddag/tafelvoetbal.png',
    '/images/familienamiddag/voetbalrun.png',
    '/images/familienamiddag/tafelvoetbal2.png',
  ] as const;
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [photos.length]);

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <h2 className='mt-4 break-words text-xl font-extrabold uppercase leading-tight tracking-[0.06em] sm:text-3xl sm:tracking-[0.1em] md:text-4xl lg:text-5xl lg:tracking-[0.16em]'>
              Familienamiddag
            </h2>
            <div className='mx-auto mt-4 h-px w-28 bg-white/40' />
            <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/85'>
              Voor groot &amp; klein
            </p>
            <p className='font-lobster mt-2 text-3xl font-normal tracking-[0.08em] text-white/90'>
              Speel &amp; geniet
            </p>
          </div>

          <div className='relative px-6 pb-6 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
              <div className='space-y-3'>
                {activities.map((a) => (
                  <div
                    key={a}
                    className='rounded-[18px] bg-white/5 px-5 py-4 text-center'
                  >
                    <p className='text-[11px] font-extrabold uppercase tracking-[0.26em] text-white'>
                      {a}
                    </p>
                  </div>
                ))}
              </div>

              <div className='rounded-[18px] bg-white/10 p-3 sm:p-4 lg:h-full'>
                <div className='relative h-full min-h-[280px] overflow-hidden rounded-[14px]'>
                  {photos.map((photo, index) => (
                    <Image
                      key={photo}
                      src={photo}
                      alt='Foto van de familienamiddag'
                      fill
                      className={[
                        'object-cover transition-opacity duration-1000',
                        index === activePhoto ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                      sizes='(min-width: 1024px) 32vw, 100vw'
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-4 rounded-[18px] bg-[#F39B3A] px-5 py-6 text-center text-white'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/85'>
                Tip
              </p>
              <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                Kom op tijd - doorlopend activiteiten tijdens de namiddag
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
