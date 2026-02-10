export type Sponsor = {
  name: string;
  logoSrc: string;
  categorie: SponsorCategorie;
  href?: string;
};

export type SponsorCategorie =
  | 'Hoofdsponsor Gold'
  | 'Hoofdsponsor'
  | 'Sponsor VIP Weekend'
  | 'Sponsor VIP Party Friday & Saturday'
  | 'Sponsor VIP Friday'
  | 'Sponsor VIP Saturday'
  | 'Sponsor VIP Sunday';

export const sponsors: readonly Sponsor[] = [
  {
    name: 'VK Heindonk',
    logoSrc: '/images/logos/voetbal_logo.png',
    categorie: 'Hoofdsponsor',
  },
  {
    name: 'KF Iever Maakt Vooruitgang',
    logoSrc: '/images/logos/fanfare-logo.png',
    categorie: 'Hoofdsponsor',
  },
  {
    name: 'Jupiler',
    logoSrc: '/images/logos/sponsors/jupiler.png',
    categorie: 'Sponsor VIP Weekend',
  },
];
