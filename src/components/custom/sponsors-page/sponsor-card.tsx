import Image from 'next/image';
import type { Sponsor } from '@/data/sponsors';
import { getGrootteClasses } from './sponsor-config';

type SponsorCardProps = {
  sponsor: Sponsor;
};

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  const grootte = getGrootteClasses(sponsor.categorie);

  return (
    <article
      className={`flex h-full flex-col rounded-[20px] border border-white/20 bg-white/10 p-4 ${grootte.card}`}
    >
      <div
        className={`flex items-center justify-center rounded-[14px] px-4 ${grootte.frame}`}
      >
        <Image
          src={sponsor.logoSrc}
          alt={sponsor.name}
          width={320}
          height={180}
          className={`w-auto object-contain ${grootte.image}`}
        />
      </div>

      <p className='mt-3 text-center text-[11px] font-extrabold uppercase tracking-[0.16em] text-white'>
        {sponsor.name}
      </p>

      {sponsor.href ? (
        <a
          href={sponsor.href}
          target='_blank'
          rel='noreferrer'
          className='mt-3 inline-flex h-10 items-center justify-center self-center rounded-full border border-white/35 bg-white/15 px-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-white/25'
        >
          Bezoek sponsor
        </a>
      ) : null}
    </article>
  );
}
