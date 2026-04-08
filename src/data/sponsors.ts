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
    categorie: 'Hoofdsponsor Zilver',
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
    name: 'CK & Co',
    logoSrc: '/images/logos/sponsors/CK_en_CO_v02.jpg',
    categorie: 'Hoofdsponsor Zilver',
  },
  {
    name: 'Wellens & Co',
    logoSrc: '/images/logos/sponsors/Logo_wellens.png',
    categorie: 'Sponsor VIP Weekend',
  },
  {
    name: 'Vanbuild',
    logoSrc: '/images/logos/sponsors/Logo_Vanbuild.png',
    categorie: 'Sponsor VIP Weekend',
  },
  {
    name: 'Vroempatat',
    logoSrc: '/images/logos/vroempatat.png',
    categorie: 'Sponsor VIP Friday',
  },
  {
    name: 'Okapi',
    logoSrc: '/images/logos/sponsors/Logo_Okapi.png',
    categorie: 'Sponsor VIP Friday',
  },
  {
    name: 'Verschaeren & Mertens',
    logoSrc: '/images/logos/sponsors/Logo_V&M.png',
    categorie: 'Sponsor VIP Saturday',
  },
  {
    name: 'Bluethink',
    logoSrc: '/images/logos/sponsors/Logo_Bluethink.png',
    categorie: 'Sponsor VIP Saturday',
  },
  {
    name: 'Tuinwerken Geerts',
    logoSrc: '/images/logos/sponsors/Logo_Tuinwerken_Geerts.svg',
    categorie: 'Sponsor VIP Friday',
  },
  {
    name: 'CRALA',
    logoSrc: '/images/logos/sponsors/Logo_Crala.png',
    categorie: 'Sponsor VIP Weekend',
  },
  {
    name: 'Kerremans',
    logoSrc: '/images/logos/sponsors/Kerremans.png',
    categorie: 'Sponsor VIP Weekend',
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
  {
    name: 'Coruna',
    logoSrc: '/images/logos/sponsors/Logo_Coruna.jpg',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },{
    name: 'Elec Polfliet',
    logoSrc: '/images/logos/sponsors/Logo_elec_polfliet.png',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },{
    name: 'Interminerals',
    logoSrc: '/images/logos/sponsors/Logo_Interminerals.png',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },{
    name: 'Interathome',
    logoSrc: '/images/logos/sponsors/Logo_Interathome.png',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },{
    name: 'Annelies',
    logoSrc: '/images/logos/sponsors/annelies-logo.jpg',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },{
    name: 'The Lounge',
    logoSrc: '/images/logos/sponsors/Logo_The_Lounge.png',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },{
    name: 'Spiessens',
    logoSrc: '/images/logos/sponsors/Logo_Spiessens.png',
    categorie: 'Sponsor VIP Party Friday & Saturday',
  },

];
