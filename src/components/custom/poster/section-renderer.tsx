import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Section } from "@/content/siteContent";
import HeroPoster from "@/components/custom/poster/hero-poster";
import InfoGrid from "@/components/custom/poster/info-grid";
import InfoList from "@/components/custom/poster/info-list";
import SectionHeading from "@/components/custom/poster/section-heading";
import Timeline from "@/components/custom/poster/timeline";

type SectionRendererProps = {
  section: Section;
  pageSlug: string;
};

const dayLinkMap: Record<string, string> = {
  Vrijdag: "/vrijdag",
  Zaterdag: "/zaterdag",
  Zondag: "/zondag",
};

export default function SectionRenderer({ section, pageSlug }: SectionRendererProps) {
  if (section.type === "hero") {
    return (
      <HeroPoster
        title={section.title}
        presenterLines={Array.isArray(section.body) ? section.body : undefined}
        showDateSticker={pageSlug === "/"}
      />
    );
  }

  if (section.type === "timeline") {
    return (
      <div className="space-y-5">
        {section.title ? <SectionHeading>{section.title}</SectionHeading> : null}
        <Timeline items={section.items} />
      </div>
    );
  }

  if (section.type === "list") {
    const items = Array.isArray(section.body) ? section.body : [];
    return (
      <div className="space-y-5">
        {section.title ? <SectionHeading>{section.title}</SectionHeading> : null}
        <InfoList items={items} />
      </div>
    );
  }

  if (section.type === "grid") {
    const items = (section.items || []).map((item) => ({
      ...item,
      href: pageSlug === "/" ? dayLinkMap[item.title ?? ""] : undefined,
      showImage:
        section.title === "Avondprogramma" ||
        section.title === "Live optredens" ||
        section.title === "Sponsorpakketten",
    }));

    return (
      <div className="space-y-5">
        {section.title ? <SectionHeading>{section.title}</SectionHeading> : null}
        <InfoGrid items={items} />
      </div>
    );
  }

  if (section.type === "cta") {
    return section.cta ? (
      <div className="flex flex-col items-start gap-3 rounded-[22px] border border-secondary/20 bg-white/60 p-6">
        {section.title ? <SectionHeading>{section.title}</SectionHeading> : null}
        <Button asChild className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-[0.22em]">
          <Link href={section.cta.href}>{section.cta.label}</Link>
        </Button>
      </div>
    ) : null;
  }

  if (section.type === "text") {
    const body = section.body;
    return (
      <div className="space-y-5">
        {section.title ? <SectionHeading>{section.title}</SectionHeading> : null}
        {typeof body === "string" ? (
          <p className="text-sm text-textdark/80">{body}</p>
        ) : null}
        {section.title === "Save-the-date affiche" ? (
          <div className="relative h-64 w-full overflow-hidden rounded-[24px] bg-white/80 ring-1 ring-secondary/25 md:h-96">
            <Image
              src="/images/placeholders/save-the-date.svg"
              alt="Save-the-date affiche"
              fill
              className="object-cover"
            />
          </div>
        ) : null}
        {section.title === "Tickets" ? (
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <div className="relative h-28 w-28 overflow-hidden rounded-[18px] bg-white/80 ring-1 ring-secondary/25">
              <Image
                src="/images/placeholders/qr-code.svg"
                alt="QR code placeholder"
                fill
                className="object-contain"
              />
            </div>
            {section.cta ? (
              <Button asChild className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-[0.22em]">
                <Link href={section.cta.href} target="_blank" rel="noreferrer">
                  {section.cta.label}
                </Link>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  return null;
}
