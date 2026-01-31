export type SectionType = "hero" | "text" | "list" | "timeline" | "grid" | "cta";

export type Section = {
  type: SectionType;
  title?: string;
  body?: string | string[];
  items?: { title?: string; description?: string }[];
  cta?: { label: string; href: string };
};

export type PageContent = {
  slug: string;
  title: string;
  sections: Section[];
};

export type SiteContent = {
  pages: PageContent[];
};

export const siteContent: SiteContent = {
  pages: [
    {
      slug: "/",
      title: "Heindonk Feest",
      sections: [
        {
          type: "hero",
          body: ["IEVER MAAKT VOORUITGANG & VK HEINDONK", "PRESENTEREN"],
        },
        {
          type: "text",
          title: "Feestweekend",
          body: "Feestweekend – Sport, Spel, Muziek, Foodtrucks",
        },
        {
          type: "grid",
          title: "Programma per dag",
          items: [
            { title: "Vrijdag", description: "Samenvatting + link" },
            { title: "Zaterdag", description: "Samenvatting + link" },
            { title: "Zondag", description: "Samenvatting + link" },
          ],
        },
        {
          type: "list",
          title: "Foodtrucks",
          body: ["Vroempattat", "Elga Events"],
        },
        {
          type: "text",
          title: "Save-the-date affiche",
        },
      ],
    },
    {
      slug: "/vrijdag",
      title: "Vrijdag",
      sections: [
        {
          type: "hero",
          title: "Vrijdag – Voetbaltornooi",
          body: ["IEVER MAAKT VOORUITGANG & VK HEINDONK", "PRESENTEREN"],
        },
        {
          type: "list",
          title: "Voetbaltornooi info",
          body: [
            "Inschrijving via formulier (email submission)",
            "Betaling via overschrijving / Payconiq QR",
            "Spelreglement (download of link placeholder)",
          ],
        },
        {
          type: "list",
          title: "DJ sets overdag",
          body: ["DJ sets during the day"],
        },
        {
          type: "text",
          title: "Extra-time party",
          body: "Start 20h",
        },
        {
          type: "grid",
          title: "Avondprogramma",
          items: [
            { title: "Lokale DJ’s" },
            { title: "Yves De Ruyter" },
            { title: "DJ Pat B" },
          ],
        },
        {
          type: "text",
          title: "Tickets",
          body: "WeTickets + QR code",
          cta: { label: "WeTickets", href: "https://wetickets.be" },
        },
        {
          type: "cta",
          title: "VIP arrangement",
          cta: { label: "Bekijk sponsorpakketten", href: "/sponsorpakketten" },
        },
      ],
    },
    {
      slug: "/zaterdag",
      title: "Zaterdag",
      sections: [
        {
          type: "hero",
          title: "Zaterdag – Fanfarefeesten",
          body: ["IEVER MAAKT VOORUITGANG & VK HEINDONK", "PRESENTEREN"],
        },
        {
          type: "list",
          title: "WK Kubb (Willebroeks Kampioenschap)",
          body: [
            "Inschrijving via formulier (email)",
            "Betaling via WeTickets",
            "Spelreglement (download of link placeholder)",
          ],
        },
        {
          type: "list",
          title: "Familienamiddag",
          body: ["Groot springkasteel / run", "Levend voetbalspel", "Voetbaldarts"],
        },
        {
          type: "grid",
          title: "Live optredens",
          items: [
            { title: "De Jaargetijden" },
            { title: "Eigen Kweek" },
            { title: "Bram & Lennert" },
          ],
        },
        {
          type: "text",
          title: "Tickets",
          body: "WeTickets + QR code",
          cta: { label: "WeTickets", href: "https://wetickets.be" },
        },
        {
          type: "cta",
          title: "VIP arrangement",
          cta: { label: "Bekijk sponsorpakketten", href: "/sponsorpakketten" },
        },
      ],
    },
    {
      slug: "/zondag",
      title: "Zondag",
      sections: [
        {
          type: "hero",
          title: "Zondag",
          body: ["IEVER MAAKT VOORUITGANG & VK HEINDONK", "PRESENTEREN"],
        },
        {
          type: "text",
          title: "Brunch",
        },
        {
          type: "list",
          title: "Galawedstrijd",
          body: ["VK Heindonk Legends", "Bekende Vlamingen"],
        },
        {
          type: "list",
          title: "Ludieke veiling",
          body: ["Gedragen retro-truitjes", "Duvel Moortgat", "Voor het goede doel"],
        },
        {
          type: "text",
          title: "Wedstrijd opgeluisterd door",
          body: "Koninklijke Fanfare Iever Maakt Vooruitgang vzw",
        },
        {
          type: "text",
          title: "Tickets",
          body: "WeTickets + QR code",
          cta: { label: "WeTickets", href: "https://wetickets.be" },
        },
        {
          type: "cta",
          title: "VIP arrangement",
          cta: { label: "Bekijk sponsorpakketten", href: "/sponsorpakketten" },
        },
      ],
    },
    {
      slug: "/sponsorpakketten",
      title: "Sponsorpakketten",
      sections: [
        {
          type: "hero",
          title: "Sponsorpakketten",
          body: ["IEVER MAAKT VOORUITGANG & VK HEINDONK", "PRESENTEREN"],
        },
        {
          type: "text",
          title: "Sponsordossier",
          body: "Zie sponsordossier",
        },
        {
          type: "grid",
          title: "Sponsorpakketten",
          items: [
            { title: "Placeholder", description: "Placeholder for sponsor tiers (no invented pricing)" },
            { title: "Placeholder", description: "Placeholder for sponsor tiers (no invented pricing)" },
            { title: "Placeholder", description: "Placeholder for sponsor tiers (no invented pricing)" },
          ],
        },
      ],
    },
    {
      slug: "/praktisch",
      title: "Praktisch",
      sections: [
        {
          type: "hero",
          title: "Praktisch",
          body: ["IEVER MAAKT VOORUITGANG & VK HEINDONK", "PRESENTEREN"],
        },
        {
          type: "text",
          title: "Locatie",
        },
        {
          type: "text",
          title: "Contactgegevens",
        },
      ],
    },
  ],
};
