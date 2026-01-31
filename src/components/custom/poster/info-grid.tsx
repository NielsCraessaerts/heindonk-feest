import Image from "next/image";
import Link from "next/link";

type InfoGridItem = {
  title?: string;
  description?: string;
  href?: string;
  showImage?: boolean;
};

type InfoGridProps = {
  items?: InfoGridItem[];
};

export default function InfoGrid({ items }: InfoGridProps) {
  if (!items?.length) return null;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => {
        const content = (
          <div className="flex h-full flex-col gap-3 rounded-[22px] border border-secondary/20 bg-white/60 p-5 text-left shadow-[0_30px_70px_-65px_rgba(0,0,0,0.5)]">
            {item.showImage ? (
              <div className="relative h-36 w-full overflow-hidden rounded-[18px] bg-white/80 ring-1 ring-secondary/20">
                <Image
                  src="/images/placeholders/artist-placeholder.svg"
                  alt="Placeholder"
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
            {item.title ? (
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-textdark">
                {item.title}
              </p>
            ) : null}
            {item.description ? (
              <p className="text-sm text-textdark/70">{item.description}</p>
            ) : null}
          </div>
        );

        if (item.href) {
          return (
            <Link key={`${item.title}-${index}`} href={item.href}>
              {content}
            </Link>
          );
        }

        return <div key={`${item.title}-${index}`}>{content}</div>;
      })}
    </div>
  );
}
