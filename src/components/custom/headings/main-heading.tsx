"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

export default function MainHeading() {
  const rootRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={rootRef} className="relative overflow-hidden">
      {/* Background (poster stripes + soft wash) */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,150,70,0.30)_0%,rgba(255,210,160,0.18)_55%,rgba(255,255,255,0.25)_100%)]" />
      <div className="absolute inset-0 opacity-70 [background-image:repeating-linear-gradient(150deg,rgba(255,170,90,0.40)_0px,rgba(255,170,90,0.40)_36px,rgba(255,255,255,0.0)_36px,rgba(255,255,255,0.0)_92px)]" />
      <div className="absolute inset-0 bg-surface/45 backdrop-blur-[2px]" />

      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Poster panel (no card look, more “print”) */}
        <div className="relative mx-auto max-w-5xl rounded-[28px] border border-secondary/20 bg-white/55 px-7 py-10 shadow-[0_50px_140px_-90px_rgba(0,0,0,0.55)] backdrop-blur md:px-12 md:py-14">
          {/* top presenter lines */}
          <div data-anim="top" className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.46em] text-textdark/75">
             IEVER MAAKT VOORUITGANG &amp; VK HEINDONK
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.55em] text-textdark/55">
              PRESENTEREN
            </p>
          </div>

          {/* Title + Bubble layout */}
          <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT TITLE */}
            <div>
              <div data-anim="title">
                <h1 className="font-heading text-6xl font-semibold leading-[0.92] text-primary md:text-7xl">
                  HEINDONK
                </h1>

                {/* “Feest” feel: big second line, tighter + a tiny flourish */}
                <div className="relative mt-3">
                  <h2 className="font-heading text-6xl font-semibold leading-[0.9] text-primary md:text-7xl">
                    FEEST
                  </h2>
                  <div
                    className="pointer-events-none absolute -left-3 top-1/2 hidden h-[2px] w-16 -translate-y-1/2 rounded-full bg-secondary/60 md:block"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <p
                data-anim="copy"
                className="mt-7 max-w-xl text-base leading-relaxed text-textdark/85 md:text-lg"
              >
                Drie dagen vol sfeer met sport, spel, muziek en foodtrucks. Zet het alvast in je agenda
                en kom meevieren in Heindonk.
              </p>

              <div data-anim="cta" className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              </div>
            </div>

            {/* RIGHT DATE BUBBLE (poster accurate) */}
            <div className="flex justify-center md:justify-end">
              <div data-anim="bubble" className="relative">
                {/* Soft shadow like a sticker */}
                <div
                  className="absolute inset-0 -z-10 translate-y-3 rounded-[999px] bg-black/10 blur-2xl"
                  aria-hidden="true"
                />

                {/* Bubble */}
                <div className="relative w-[280px] rounded-[999px] bg-white px-8 py-9 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.55)] ring-1 ring-black/5 md:w-[320px]">
                  {/* warm inner highlight (like poster airbrush) */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[999px] bg-[radial-gradient(circle_at_55%_60%,rgba(255,170,90,0.35),transparent_60%)]"
                    aria-hidden="true"
                  />
                  {/* subtle border/edge */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[999px] ring-1 ring-secondary/25"
                    aria-hidden="true"
                  />

                  {/* Text inside bubble */}
                  <div className="relative text-center text-secondary">
                    <div className="text-5xl font-bold leading-none tracking-[0.04em]">
                      1-2-3
                    </div>
                    <div className="mt-2 font-heading text-6xl font-bold leading-none tracking-[0.04em]">
                      MEI
                    </div>

                    <div className="mt-1 text-sm font-semibold tracking-[0.22em] text-secondary/85">
                      ’26
                    </div>
                  </div>

                  {/* small “shine” */}
                  <div
                    className="pointer-events-none absolute left-8 top-7 h-10 w-20 rotate-[-18deg] rounded-full bg-white/60 blur-[0.5px]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Organizer logos */}
          <div data-anim="logos" className="mt-12 flex flex-col items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-textdark/60">
              Organisatie
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
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
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-textdark">
                  VK Heindonk
                </span>
              </div>

              <div className="flex items-center gap-3">
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
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-textdark">
                  Fanfare IMV
                </span>
              </div>
            </div>

            <Button
              asChild
              variant="secondary"
              className="mt-2 rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-[0.22em]"
            >
              <Link href="/sponsorpakketten">Sponsor worden</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
