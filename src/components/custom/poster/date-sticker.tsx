export default function DateSticker() {
  return (
    <div className="relative w-[240px] rounded-[999px] bg-white px-8 py-8 text-center ring-1 ring-muted">
      <div className="pointer-events-none absolute inset-0 rounded-[999px] bg-[radial-gradient(circle_at_35%_35%,rgba(0,0,0,0.04),transparent_60%)]" />
      <div className="absolute right-10 top-8 h-3 w-3 rounded-full bg-secondary" />
      <div className="pointer-events-none absolute bottom-5 left-10 h-[5px] w-[90px] rounded-full bg-primary/75" />
      <div className="relative text-primary">
        <div className="text-4xl font-bold leading-none tracking-[0.05em]">1-2-3</div>
        <div className="mt-2 text-5xl font-bold leading-none tracking-[0.04em]">MEI</div>
        <div className="mt-1 text-sm font-semibold tracking-[0.25em] text-primary/80">
          ’26
        </div>
      </div>
    </div>
  );
}
