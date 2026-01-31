import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  dateSticker?: ReactNode;
};

export default function PageShell({ children, dateSticker }: PageShellProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 bg-jstackgradient" />
      <div className="absolute inset-0 opacity-70 bg-poster-stripes" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-secondary/25 bg-white/65 px-7 py-10 shadow-[0_60px_150px_-95px_rgba(0,0,0,0.55)] backdrop-blur md:px-12 md:py-14">
          {dateSticker ? (
            <div className="absolute right-6 top-6 hidden md:block">{dateSticker}</div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
