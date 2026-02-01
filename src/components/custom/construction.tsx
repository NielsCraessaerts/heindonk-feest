import Image from "next/image";
import Link from "next/link";

export default function Construction() {
  return (
    <section className="relative overflow-hidden bg-[#2E5DAA] text-white">
      <div className="absolute inset-0 opacity-[0.25] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_42px,rgba(255,255,255,0)_42px,rgba(255,255,255,0)_96px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Nog even geduld</p>
          <h1 className="mt-4 text-3xl font-bold uppercase tracking-[0.18em] md:text-4xl">
            We zijn hier nog aan het bouwen
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Onze ploeg draait volle bak. Het programmadeel krijgt nog zijn laatste laag verf, een
            vleugje glitter en een extra scheut feest.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-block rounded-full border border-white/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:bg-white/10"
            >
              Terug naar home
            </Link>
            <span className="text-xs uppercase tracking-[0.3em] text-white/70">Kom snel terug!</span>
          </div>
        </div>

        <div className="relative h-[220px] w-[220px] flex-shrink-0 md:h-[260px] md:w-[260px]">
          <Image
            src="/images/construction.png"
            alt="Pagina in opbouw"
            fill
            className="object-contain"
            sizes="(min-width: 768px) 260px, 220px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
