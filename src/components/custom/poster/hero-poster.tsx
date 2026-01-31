import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import DateSticker from "@/components/custom/poster/date-sticker";

type HeroPosterProps = {
  title?: string;
  presenterLines?: string[];
  showDateSticker?: boolean;
  cta?: { label: string; href: string };
};

export default function HeroPoster({
  title,
  presenterLines,
  showDateSticker = false,
  cta,
}: HeroPosterProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        {presenterLines?.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className={`text-[11px] font-semibold uppercase tracking-[0.45em] text-textdark/70 ${
              index === 0 ? "text-textdark/80" : "mt-2 text-[10px]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-10">
        <div className="relative h-[220px] w-full max-w-[520px] md:h-[280px] md:max-w-[600px]">
          <Image
            src="/images/logos/logo_Heindonk_feest.png"
            alt="Heindonk Feest"
            fill
            priority
            className="object-contain object-left"
            sizes="(min-width: 768px) 600px, 100vw"
          />
        </div>

        {showDateSticker ? (
          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-y-3 rounded-[999px] bg-black/10 blur-2xl" />
            <DateSticker />
          </div>
        ) : null}
      </div>

      {title ? (
        <p className="text-center text-lg font-semibold uppercase tracking-[0.3em] text-textdark/75 md:text-xl">
          {title}
        </p>
      ) : null}

      {cta ? (
        <div className="flex justify-center">
          <Button asChild className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-[0.22em]">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
