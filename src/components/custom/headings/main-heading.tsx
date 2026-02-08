'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';

export default function MainHeading() {
  const rootRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={rootRef} className='relative overflow-hidden'>
      {/* Background (sunset poster wash + diagonal stripes) */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,245,230,0.9),rgba(255,214,170,0.55)_38%,rgba(236,150,85,0.35)_70%,rgba(210,120,70,0.25)_100%)]' />
      <div className='absolute inset-0 opacity-[0.55] [background-image:repeating-linear-gradient(135deg,rgba(255,160,90,0.45)_0px,rgba(255,160,90,0.45)_42px,rgba(255,255,255,0.0)_42px,rgba(255,255,255,0.0)_96px)]' />

      {/* grain */}
      <div className="[background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')] pointer-events-none absolute inset-0 opacity-[0.10]" />

      <div className='relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:py-16'>
        {/* Poster panel */}
        <div className='relative mx-auto max-w-5xl overflow-hidden rounded-[24px] border border-secondary/20 bg-white/60 px-[clamp(18px,3vw,48px)] py-[clamp(22px,3.6vw,56px)] shadow-[0_70px_160px_-90px_rgba(0,0,0,0.55)] backdrop-blur sm:rounded-[28px]'>
          {/* corner logos (desktop only, keep) */}
          <div className='pointer-events-none absolute left-6 top-6 hidden md:block'>
            <div className='relative h-16 w-16 overflow-hidden rounded-full bg-white/70 ring-1 ring-secondary/25'>
              <Image
                src='/images/logos/fanfare_logo.png'
                alt='Koninklijke Fanfare Iever Maakt Vooruitgang'
                fill
                className='object-contain p-2'
                sizes='56px'
                priority
              />
            </div>
          </div>
          <div className='pointer-events-none absolute right-6 top-6 hidden md:block'>
            <div className='relative h-16 w-16 overflow-hidden rounded-full bg-white/70 ring-1 ring-secondary/25'>
              <Image
                src='/images/logos/voetbal_logo.png'
                alt='VK Heindonk'
                fill
                className='object-contain p-2'
                sizes='56px'
                priority
              />
            </div>
          </div>

          {/* top presenter lines */}
          <div data-anim='top' className='text-center'>
            <p className='text-[10px] font-semibold uppercase tracking-[0.38em] text-textdark/80 sm:text-xs sm:tracking-[0.46em]'>
              IEVER MAAKT VOORUITGANG &amp; VK HEINDONK
            </p>
            <p className='mt-2 text-[10px] font-semibold uppercase tracking-[0.48em] text-textdark/60 sm:text-[11px] sm:tracking-[0.55em]'>
              PRESENTEREN
            </p>
          </div>

          {/* Title + Date layout */}
          <div className='mt-8 sm:mt-10'>
            <div
              data-anim='title'
              className='grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10'
            >
              {/* Logo block: fluid aspect ratio */}
              <div className='w-full'>
                <div className='relative mx-auto w-full max-w-[680px] md:mx-0'>
                  <div className='relative aspect-[4/3] sm:aspect-[16/6] md:aspect-[16/5]'>
                    <Image
                      src='/images/logos/logo_Heindonk_feest.png'
                      alt='Heindonk Feest'
                      fill
                      priority
                      className='object-contain object-center md:object-left'
                      sizes='(min-width: 768px) 680px, 100vw'
                    />
                  </div>
                </div>
              </div>

              {/* Date badge: fluid sizing + centered on mobile */}
              <div className='flex justify-center md:justify-end'>
                <div className='relative'>
                  <div
                    className='absolute inset-0 -z-10 translate-y-3 rounded-full bg-blue-500/20 blur-2xl'
                    aria-hidden='true'
                  />

                  <div className='relative h-[clamp(150px,24vw,230px)] w-[clamp(210px,30vw,300px)] rounded-[999px] bg-[radial-gradient(circle_at_28%_30%,rgba(255,255,255,0.92),rgba(255,255,255,0)_58%),linear-gradient(165deg,#FFF7F0_0%,#FFF0E4_52%,#F6D9C4_100%)]'>
                    <div className='pointer-events-none absolute inset-[6px] rounded-[999px] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.85),rgba(255,255,255,0)_62%)]' />
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-primary'>
                      <div className='text-[clamp(34px,5vw,44px)] font-bold leading-none tracking-[0.12em] text-[#D9823B]'>
                        1–2–3
                      </div>
                      <div className='mt-3 font-heading text-[clamp(44px,6.2vw,56px)] font-bold leading-none tracking-[0.06em] text-[#D9823B]'>
                        MEI
                      </div>
                      <div className='mt-3 text-[clamp(10px,1.6vw,12px)] font-semibold tracking-[0.34em] text-[#D98A52]'>
                        ’26
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p
              data-anim='copy'
              className='mt-6 max-w-xl text-[15px] leading-relaxed text-textdark/85 sm:text-base md:text-lg'
            >
              Drie dagen vol sfeer met sport, spel, muziek en foodtrucks. Zet
              het alvast in je agenda en kom meevieren in Heindonk.
            </p>

            {/* CTA: stacked on mobile, inline from sm */}
            <div
              data-anim='cta'
              className='mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap'
            >
              <Button
                asChild
                className='w-full rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-[0.22em] sm:w-auto'
              >
                <Link href='#programma'>Bekijk programma</Link>
              </Button>

              <Button
                asChild
                variant='outline'
                className='w-full rounded-full border-secondary/35 bg-white/45 px-8 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-textdark hover:bg-white/70 sm:w-auto'
              >
                <Link href='/praktisch'>Praktische info</Link>
              </Button>

              <Button
                asChild
                variant='secondary'
                className='w-full rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-[0.22em] sm:w-auto'
              >
                <Link href='/sponsorpakketten'>Sponsor worden</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
