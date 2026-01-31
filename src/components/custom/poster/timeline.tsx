type TimelineItem = {
  title?: string;
  description?: string;
};

type TimelineProps = {
  items?: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  if (!items?.length) return null;

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={`${item.title}-${index}`} className="flex items-start gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-secondary" />
          <div>
            {item.title ? (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-textdark">
                {item.title}
              </p>
            ) : null}
            {item.description ? (
              <p className="mt-1 text-sm text-textdark/70">{item.description}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
