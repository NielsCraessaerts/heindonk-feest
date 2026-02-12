'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const quickLinks = [
  { href: '/vrijdag', label: 'Vrijdag' },
  { href: '/zaterdag', label: 'Zaterdag' },
  { href: '/zondag', label: 'Zondag' },
  { href: '/praktisch', label: 'Praktisch' },
  { href: '/sponsors', label: 'Onze sponsors' },
  { href: '/sponsorpakketten', label: 'Sponsorpakketten' },
];

const organisatieLinks = {
  fanfare: 'https://ievermaaktvooruitgang.com/',
  voetbal: 'https://www.vkheindonk.com/',
};

export default function Footer() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const year = new Date().getFullYear();

  return (
    <footer
      className={`relative border-t border-white/20 text-white ${
        isHomepage ? 'bg-[#1f4d93]' : 'bg-white/5 backdrop-blur-[2px]'
      }`}
    >
      <div className='pointer-events-none absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_42px,rgba(255,255,255,0)_42px,rgba(255,255,255,0)_96px)]' />
      <div className='relative z-10 mx-auto w-full max-w-6xl px-6 py-8 sm:py-10'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='space-y-3'>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F8C27A]'>
              Heindonk Feest
            </p>
            <p className='text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
              Drie dagen sport, spel, muziek en sfeer.
            </p>
            <p className='text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80'>
              Terrein VK Heindonk, Kleine Bergen 1, 2830 Heindonk
            </p>
          </div>

          <div className='space-y-2'>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F8C27A]'>
              Contact
            </p>
            <p className='text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
              <a
                href='mailto:heindonk_feest@hotmail.com'
                className='underline decoration-white/50 underline-offset-4 hover:decoration-white'
              >
                heindonk_feest@hotmail.com
              </a>
            </p>
            <p className='text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
              <a
                href='https://heindonk-feest.weticket.io'
                target='_blank'
                rel='noreferrer'
                className='underline decoration-white/50 underline-offset-4 hover:decoration-white'
              >
                Tickets
              </a>
            </p>
          </div>

          <div>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F8C27A]'>
              Snel naar
            </p>
            <nav className='mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:max-w-[360px]'>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-white'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className='mt-8 border-t border-white/20 pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80'>
          <p>© {year} Heindonk Feest.</p>
          <div className='mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <p>Gemaakt door Niels Craessaerts uit sympathie.</p>

            <div className='flex items-center gap-3'>
              <span className='text-[9px] tracking-[0.18em] text-white/70'>
                Georganiseerd door
              </span>
              <a
                href={organisatieLinks.fanfare}
                target='_blank'
                rel='noreferrer'
                aria-label='KF Iever Maakt Vooruitgang'
                className='inline-flex rounded-md bg-white/10 px-2 py-1 transition hover:bg-white/20'
              >
                <Image
                  src='/images/logos/fanfare-logo.png'
                  alt='Logo KF Iever Maakt Vooruitgang'
                  width={60}
                  height={36}
                  className='h-8 w-auto object-contain'
                />
              </a>
              <a
                href={organisatieLinks.voetbal}
                target='_blank'
                rel='noreferrer'
                aria-label='VK Heindonk'
                className='inline-flex rounded-md bg-white/10 px-2 py-1 transition hover:bg-white/20'
              >
                <Image
                  src='/images/logos/voetbal_logo.png'
                  alt='Logo VK Heindonk'
                  width={60}
                  height={36}
                  className='h-8 w-auto object-contain'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
