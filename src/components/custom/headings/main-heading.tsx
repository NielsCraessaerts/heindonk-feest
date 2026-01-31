"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

export default function MainHeading() {
  const rootRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={rootRef} className="relative overflow-hidden">
      {/* Background (sunset poster wash + diagonal stripes) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,245,230,0.9),rgba(255,214,170,0.55)_38%,rgba(236,150,85,0.35)_70%,rgba(210,120,70,0.25)_100%)]" />
      <div className="absolute inset-0 opacity-[0.55] [background-image:repeating-linear-gradient(140deg,rgba(255,160,90,0.45)_0px,rgba(255,160,90,0.45)_42px,rgba(255,255,255,0.0)_42px,rgba(255,255,255,0.0)_96px)]" />
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />

      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Poster panel */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-secondary/20 bg-white/60 px-7 py-10 shadow-[0_70px_160px_-90px_rgba(0,0,0,0.55)] backdrop-blur md:px-12 md:py-14">
          {/* corner logos */}
          <div className="pointer-events-none absolute left-6 top-6 hidden md:block">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/70 ring-1 ring-secondary/25">
              <Image
                src="/images/logos/fanfare_logo.png"
                alt="Koninklijke Fanfare Iever Maakt Vooruitgang"
                fill
                className="object-contain p-2"
                sizes="48px"
                priority
              />
            </div>
          </div>
          <div className="pointer-events-none absolute right-6 top-6 hidden md:block">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/70 ring-1 ring-secondary/25">
              <Image
                src="/images/logos/voetbal_logo.png"
                alt="VK Heindonk"
                fill
                className="object-contain p-2"
                sizes="48px"
                priority
              />
            </div>
          </div>

          {/* top presenter lines */}
          <div data-anim="top" className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.46em] text-textdark/80">
              IEVER MAAKT VOORUITGANG &amp; VK HEINDONK
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.55em] text-textdark/60">
              PRESENTEREN
            </p>
          </div>

          {/* Title + Bubble layout */}
          <div className="mt-10">
            {/* TITLE + DATE in one block */}
            <div data-anim="title" className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-10">
              <div className="relative h-[230px] w-full max-w-[520px] md:h-[300px] md:max-w-[600px]">
                <Image
                  src="/images/logos/logo_Heindonk_feest.png"
                  alt="Heindonk Feest"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(min-width: 768px) 640px, 100vw"
                />
              </div>

              {/* DATE BADGE (clean card) */}
              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 translate-y-2 rounded-[28px] bg-black/10 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative h-[220px] w-[240px] rounded-[28px] bg-[linear-gradient(160deg,#FFFFFF_0%,#FFF6EE_55%,#FFE8D6_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.14)] ring-1 ring-secondary/20 md:h-[250px] md:w-[280px]">
                  <div className="pointer-events-none absolute inset-3 rounded-[22px] ring-1 ring-secondary/30" />
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.8),rgba(255,255,255,0)_55%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
                    <div className="text-4xl font-bold leading-none tracking-[0.14em] text-secondary">
                      1–2–3
                    </div>
                    <div className="mt-3 font-heading text-5xl font-bold leading-none tracking-[0.06em] text-primary">
                      MEI
                    </div>
                    <div className="mt-3 text-xs font-semibold tracking-[0.34em] text-textdark/70">
                      ’26
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p
              data-anim="copy"
              className="mt-6 max-w-xl text-base leading-relaxed text-textdark/85 md:text-lg"
            >
              Drie dagen vol sfeer met sport, spel, muziek en foodtrucks. Zet het alvast in je agenda
              en kom meevieren in Heindonk.
            </p>

            <div data-anim="cta" className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-[0.22em]">
                <Link href="/vrijdag">Bekijk programma</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-secondary/35 bg-white/45 px-8 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-textdark hover:bg-white/70"
              >
                <Link href="/praktisch">Praktische info</Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-[0.22em]"
              >
                <Link href="/sponsorpakketten">Sponsor worden</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
