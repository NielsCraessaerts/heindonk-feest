'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  label: string;
  children: NavLink[];
};

const linksLeft = [
  { href: '/vrijdag', label: 'Vrijdag' },
  { href: '/zaterdag', label: 'Zaterdag' },
  { href: '/zondag', label: 'Zondag' },
] as const;

const linksRight = [{ href: '/praktisch', label: 'Praktisch' }] as const;

const sponsorMenu: NavGroup = {
  label: 'Sponsors',
  children: [
    { href: '/sponsors', label: 'Onze sponsors' },
    { href: '/sponsorpakketten', label: 'Sponsorpakketten' },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function desktopLinkClass(active: boolean) {
    return `transition ${
      active
        ? 'text-secondary underline underline-offset-4'
        : 'hover:text-secondary'
    }`;
  }

  function mobileLinkClass(active: boolean) {
    return `rounded-lg px-3 py-2 transition ${
      active ? 'bg-secondary/20 text-secondary' : 'hover:bg-secondary/10'
    }`;
  }

  function isGroupActive(group: NavGroup) {
    return group.children.some((item) => isActive(item.href));
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b border-secondary/50 bg-surface/90 text-textdark backdrop-blur'>
      <div className='mx-auto w-full max-w-6xl px-6'>
        {/* Desktop */}
        <div className='hidden grid-cols-3 items-center py-6 md:grid'>
          <nav className='flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.12em] lg:gap-5 lg:text-sm lg:tracking-[0.16em]'>
            {linksLeft.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={desktopLinkClass(isActive(link.href))}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='flex justify-center'>
            <Link href='/' aria-label='Naar de homepage'>
              <img
                src='/images/logos/logo_Heindonk_feest.png'
                alt='Heindonk Feest logo'
                className='h-16 w-auto md:h-20'
              />
            </Link>
          </div>

          <nav className='flex items-center justify-end gap-4 text-xs font-semibold uppercase tracking-[0.12em] lg:gap-5 lg:text-sm lg:tracking-[0.16em]'>
            {linksRight.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={desktopLinkClass(isActive(link.href))}
              >
                {link.label}
              </Link>
            ))}
            <div className='group relative'>
              <button
                type='button'
                aria-haspopup='menu'
                className={`inline-flex items-center gap-1 uppercase transition ${
                  isGroupActive(sponsorMenu)
                    ? 'text-secondary underline underline-offset-4'
                    : 'hover:text-secondary'
                }`}
              >
                {sponsorMenu.label}
                <ChevronDown className='h-4 w-4 transition group-focus-within:rotate-180 group-hover:rotate-180' />
              </button>
              <div className='pointer-events-none invisible absolute right-0 top-full z-50 min-w-[220px] rounded-[14px] border border-secondary/30 bg-surface/95 p-2 opacity-0 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.7)] transition-all duration-150 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100'>
                {sponsorMenu.children.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                      isActive(item.href)
                        ? 'bg-secondary/20 text-secondary'
                        : 'hover:bg-secondary/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile */}
        <div className='flex items-center justify-between py-4 md:hidden'>
          <button
            type='button'
            aria-label='Menu'
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 text-textdark transition hover:bg-secondary/10'
          >
            <span className='relative block h-4 w-5'>
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition ${open ? 'translate-y-[6px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-current transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
              />
            </span>
          </button>

          <Link
            href='/'
            aria-label='Naar de homepage'
            className='flex items-center'
          >
            <img
              src='/images/logos/logo_Heindonk_feest.png'
              alt='Heindonk Feest logo'
              className='h-12 w-auto'
            />
          </Link>

          <span className='h-10 w-10' aria-hidden='true' />
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-secondary/30 bg-surface/95 transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm font-semibold uppercase tracking-[0.2em]'>
          {linksLeft.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={mobileLinkClass(isActive(link.href))}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className='h-px bg-secondary/20' />
          {linksRight.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={mobileLinkClass(isActive(link.href))}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <details className='rounded-lg border border-secondary/20 bg-surface/40 px-1 py-1'>
            <summary className='cursor-pointer list-none rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition hover:bg-secondary/10 [&::-webkit-details-marker]:hidden'>
              <span className='inline-flex items-center gap-1'>
                {sponsorMenu.label}
                <ChevronDown className='h-4 w-4' />
              </span>
            </summary>
            <div className='mt-1 flex flex-col gap-1 px-2 pb-1'>
              {sponsorMenu.children.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={mobileLinkClass(isActive(item.href))}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
