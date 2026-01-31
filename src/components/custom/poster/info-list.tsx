type InfoListProps = {
  items?: string[];
};

export default function InfoList({ items }: InfoListProps) {
  if (!items?.length) return null;

  return (
    <ul className="space-y-2 text-sm text-textdark/80">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
