'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ZondagGalawedstrijd() {
  const charities = [
    { name: 'Het Rode Kruis', website: 'rodekruis.be' },
    { name: 'Kom op tegen Kanker', website: 'komoptegenkanker.be' },
    { name: 'Boven de Wolken', website: 'bovendewolken.be' },
  ];
  const truckPhotos = ['/images/truck1.jpeg', '/images/truck2.jpeg'];
  const facts = [
    'De kleuren van VK Heindonk komen van de eerste sponsor Moortgat. Oranje en blauw zijn dus al 70 jaar oud.',
    'Moortgat liet de cafetaria van VK Heindonk bouwen.',
    'De retro-truitjes waarmee de ploegen spelen zijn kopieen van de eerste uitrusting van VK Heindonk.',
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const photoTimer = window.setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % truckPhotos.length);
    }, 4500);

    const factTimer = window.setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => {
      window.clearInterval(photoTimer);
      window.clearInterval(factTimer);
    };
  }, [truckPhotos.length, facts.length]);

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[34px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/80'>
              Main Event
            </p>

            <h1 className='mt-4 text-3xl font-extrabold uppercase leading-tight tracking-[0.10em] sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-[0.16em]'>
              Galawedstrijd
            </h1>

            <div className='mx-auto mt-4 h-px w-36 bg-white/30' />
            {/* Scoreline / fight card */}
            <div className='border-white/12 bg-white/8 mx-auto mt-8 max-w-4xl rounded-[26px] border px-5 py-6 shadow-[0_40px_110px_-70px_rgba(0,0,0,0.9)]'>
              <div className='grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]'>
                <div className='text-center md:text-right'>
                  <p className='text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                    VK Heindonk
                  </p>
                  <p className='mt-1 text-[22px] font-extrabold uppercase tracking-[0.14em] text-white sm:text-[26px]'>
                    Legends
                  </p>
                </div>

                <div className='flex justify-center'>
                  <div className='rounded-full bg-[#F39B3A] px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.28em] text-white'>
                    VS
                  </div>
                </div>

                <div className='text-center md:text-left'>
                  <p className='text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                    Bekende
                  </p>
                  <p className='mt-1 text-[22px] font-extrabold uppercase tracking-[0.14em] text-white sm:text-[26px]'>
                    Vlamingen
                  </p>
                </div>
              </div>

              <div className='mt-5 flex flex-wrap items-center justify-center gap-2'>
                <span className='rounded-full bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.32em] text-white'>
                  Showmatch
                </span>
                <span className='rounded-full bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.32em] text-white/90'>
                  Feesttent & terrein VK Heindonk
                </span>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className='relative px-6 pb-10 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-3'>
              {/* fanfare */}
              <div className='hover:bg-white/12 group rounded-[22px] border border-white/10 bg-white/10 px-6 py-6 transition'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Opgeluisterd door
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  KF Iever Maakt Vooruitgang
                </p>
                <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75'>
                  Muzikale omkadering voor een echte erewedstrijd
                </p>

                <div className='mt-5 h-px w-full bg-white/20' />

                <p className='mt-5 text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Foodtruck
                </p>
                <a
                  href='https://vroempatat.be'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Bezoek de website van Vroempatat'
                  className='mt-3 inline-flex cursor-pointer rounded-[16px] border border-white/45 bg-white/15 px-4 py-3 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-[0_16px_30px_-18px_rgba(0,0,0,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                >
                  <Image
                    src='/images/logos/vroempatat.png'
                    alt='Vroempatat logo'
                    width={180}
                    height={64}
                    className='h-12 w-auto object-contain'
                  />
                </a>
              </div>

              {/* auction */}
              <div className='group relative overflow-hidden rounded-[22px] border border-[#F39B3A] bg-[#F39B3A] px-6 py-6 shadow-[0_30px_90px_-60px_rgba(243,155,58,0.95)] transition hover:-translate-y-0.5 hover:shadow-[0_40px_100px_-55px_rgba(243,155,58,1)]'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/90'>
                  Lucky veiling
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Retro-truitjes Duvel Moortgat
                </p>

                <p className='mt-5 text-[10px] font-semibold uppercase tracking-[0.36em] text-white/85'>
                  Voor het goede doel
                </p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {charities.map((item) => (
                    <a
                      key={item.name}
                      href={`https://${item.website}`}
                      target='_blank'
                      rel='noreferrer'
                      className='rounded-full border border-white/35 bg-black/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white transition hover:bg-black/30'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* hype / callout */}
              <div className='rounded-[22px] border border-white/10 bg-white/10 px-6 py-6'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Moment
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Eenmalige clash & volle ambiance
                </p>
                <div className='mt-4 grid gap-2'>
                  <div className='rounded-[16px] bg-white/10 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/90'>
                    Legends in de spotlights
                  </div>
                  <div className='rounded-[16px] bg-white/10 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/90'>
                    Bekende Vlamingen op het veld
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]'>
              <div className='rounded-[22px] border border-white/10 bg-white/10 p-4 sm:p-5'>
                <div className='relative mt-4 overflow-hidden rounded-[16px]'>
                  <div
                    className='flex transition-transform duration-700 ease-out'
                    style={{ transform: `translateX(-${photoIndex * 100}%)` }}
                  >
                    {truckPhotos.map((photo) => (
                      <div
                        key={photo}
                        className='relative h-[240px] min-w-full sm:h-[300px]'
                      >
                        <Image
                          src={photo}
                          alt='Vroempatat foodtruck'
                          fill
                          className='object-cover'
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className='mt-3 flex justify-center gap-2'>
                  {truckPhotos.map((photo, index) => (
                    <button
                      key={photo}
                      type='button'
                      aria-label={`Toon foto ${index + 1}`}
                      onClick={() => setPhotoIndex(index)}
                      className={`h-2.5 rounded-full transition ${
                        photoIndex === index
                          ? 'w-8 bg-[#F39B3A]'
                          : 'w-2.5 bg-white/35 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* wist je dat */}
              <div className='rounded-[22px] border border-white/10 bg-white/10 px-6 py-6'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Wist je dat ?
                </p>

                <div className='relative mt-4 min-h-[170px] overflow-hidden px-5 py-5'>
                  {facts.map((fact, index) => (
                    <div
                      key={fact}
                      className={[
                        'absolute inset-0 flex items-start',
                        'transition-opacity duration-1000',
                        index === factIndex ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                      aria-hidden={index !== factIndex}
                    >
                      <p
                        className={[
                          'text-[12px] font-semibold uppercase tracking-[0.16em] text-white/95',
                          'transition-transform duration-1000',
                          index === factIndex
                            ? 'translate-y-0'
                            : 'translate-y-2',
                        ].join(' ')}
                      >
                        {fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
