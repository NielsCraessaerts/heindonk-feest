export type Sponsor = {
  name: string;
  logoSrc: string;
  categorie: SponsorCategorie;
  href?: string;
};

export type SponsorCategorie =
  | 'Organisatie'
  | 'Hoofdsponsor Gold'
  | 'Hoofdsponsor Zilver'
  | 'Sponsor VIP Weekend'
  | 'Sponsor VIP Party Friday & Saturday'
  | 'Sponsor VIP Friday'
  | 'Sponsor VIP Saturday'
  | 'Sponsor VIP Sunday';

export const sponsors: readonly Sponsor[] = [
  {
    name: 'VK Heindonk',
    logoSrc: '/images/logos/voetbal_logo.png',
    categorie: 'Organisatie',
  },
  {
    name: 'KF Iever Maakt Vooruitgang',
    logoSrc: '/images/logos/fanfare-logo.png',
    categorie: 'Organisatie',
  },
  {
    name: 'Jupiler',
    logoSrc: '/images/logos/sponsors/jupiler.png',
    categorie: 'Hoofdsponsor Gold',
  },
  {
    name: 'J2B Solutions',
    logoSrc: '/images/logos/sponsors/J2BSolutions.png',
    categorie: 'Sponsor VIP Weekend',
  },
  {
    name: 'Artfloors',
    logoSrc: '/images/logos/sponsors/Artfloors.png',
    categorie: 'Hoofdsponsor Gold',
  },
  {
    name: 'Dierenarstpraktijk De Bron',
    logoSrc: '/images/logos/sponsors/DierenartsenpraktijkDeBron.jpeg',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },
  {
    name: 'Apotheek De Jonghe',
    logoSrc: '/images/logos/sponsors/Logo_ApotheekDeJonghe_Landscape.jpg',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },


];
