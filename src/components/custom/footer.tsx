'use client';

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
        <div className='grid gap-6 md:grid-cols-3'>
          <div>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F8C27A]'>
              Heindonk Feest
            </p>
            <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
              Drie dagen sport, spel, muziek en sfeer.
            </p>
            <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80'>
              Terrein VK Heindonk, Kleine Bergen 1, 2830 Heindonk
            </p>
          </div>

          <div>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F8C27A]'>
              Snelle links
            </p>
            <nav className='mt-3 grid grid-cols-2 gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90'>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='rounded px-2 py-1 transition hover:bg-white/10'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F8C27A]'>
              Contact
            </p>
            <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
              E-mail:{' '}
              <a
                href='mailto:heindonk_feest@hotmail.com'
                className='underline decoration-white/50 underline-offset-4 hover:decoration-white'
              >
                heindonk_feest@hotmail.com
              </a>
            </p>
            <p className='mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
              Tickets & inschrijvingen:{' '}
              <a
                href='https://heindonk-feest.weticket.io'
                target='_blank'
                rel='noreferrer'
                className='underline decoration-white/50 underline-offset-4 hover:decoration-white'
              >
                heindonk-feest.weticket.io
              </a>
            </p>
          </div>
        </div>

        <div className='mt-8 border-t border-white/20 pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80'>
          <p>© {year} Heindonk Feest.</p>
          <p className='mt-2'>Gemaakt door Niels Craessaerts uit sympathie.</p>
        </div>
      </div>
    </footer>
  );
}
