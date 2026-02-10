import type { Sponsor, SponsorCategorie } from '@/data/sponsors';

export const categorieVolgorde: readonly SponsorCategorie[] = [
  'Hoofdsponsor Gold',
  'Hoofdsponsor',
  'Sponsor VIP Weekend',
  'Sponsor VIP Party Friday & Saturday',
  'Sponsor VIP Friday',
  'Sponsor VIP Saturday',
  'Sponsor VIP Sunday',
];

const sizeRank = { xl: 0, lg: 1, md: 2, sm: 3 } as const;
type PakketGrootte = keyof typeof sizeRank;

const pakketGroottePerCategorie: Record<SponsorCategorie, PakketGrootte> = {
  'Hoofdsponsor Gold': 'xl',
  Hoofdsponsor: 'xl',
  'Sponsor VIP Weekend': 'lg',
  'Sponsor VIP Party Friday & Saturday': 'md',
  'Sponsor VIP Friday': 'sm',
  'Sponsor VIP Saturday': 'sm',
  'Sponsor VIP Sunday': 'sm',
};

const grootteClassMap = {
  xl: {
    card: 'lg:col-span-2',
    frame: 'h-40 sm:h-44',
    image: 'h-32 sm:h-36',
  },
  lg: {
    card: '',
    frame: 'h-36 sm:h-40',
    image: 'h-28 sm:h-32',
  },
  md: {
    card: '',
    frame: 'h-32 sm:h-36',
    image: 'h-24 sm:h-28',
  },
  sm: {
    card: '',
    frame: 'h-28 sm:h-32',
    image: 'h-20 sm:h-24',
  },
} as const;

export function getGrootteClasses(categorie: SponsorCategorie) {
  return grootteClassMap[pakketGroottePerCategorie[categorie]];
}

export function sortSponsorsByGrootteThenName(a: Sponsor, b: Sponsor) {
  const ga = pakketGroottePerCategorie[a.categorie];
  const gb = pakketGroottePerCategorie[b.categorie];
  const ra = sizeRank[ga] ?? 99;
  const rb = sizeRank[gb] ?? 99;
  if (ra !== rb) return ra - rb;
  return a.name.localeCompare(b.name);
}

export function isLowTierCategorie(categorie: SponsorCategorie) {
  return (
    categorie === 'Sponsor VIP Friday' ||
    categorie === 'Sponsor VIP Saturday' ||
    categorie === 'Sponsor VIP Sunday'
  );
}

export function isTopCategorie(categorie: SponsorCategorie) {
  return categorie === 'Hoofdsponsor' || categorie === 'Hoofdsponsor Gold';
}
