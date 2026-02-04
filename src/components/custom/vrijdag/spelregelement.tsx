export default function SpelreglementSection() {
  return (
    <section className='relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-20 pt-8 text-white sm:pt-10'>
      {/* Samenvatting background (full-bleed) */}

      <div className='block-anim delay-1 relative rounded-[32px] border border-white/16 bg-[#133B76]/80 p-6 backdrop-blur sm:p-8'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='text-[10px] font-semibold uppercase tracking-[0.48em] text-white/70'>
              Spelreglement
            </p>
            <h2 className='mt-3 text-3xl font-bold uppercase tracking-[0.12em] text-white'>
              In het kort
            </h2>
          </div>
          <a
            href='/files/Spelreglement%20VKH-tornooi.pdf'
            className='text-xs font-semibold uppercase tracking-[0.32em] text-white underline-offset-4 transition hover:underline'
          >
            Download volledig reglement
          </a>
        </div>

        <ul className='mt-6 grid gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/85 md:grid-cols-2'>
          {[
            '5 tegen 5 (1 keeper + 4 veldspelers)',
            'Dames- en herencompetitie',
            'Wedstrijden: 1 x 15 minuten',
            'Finales: 2 x 10 minuten (kantwissel)',
          ].map((item) => (
            <li
              key={item}
              className='block-anim delay-2 flex items-start gap-3 rounded-2xl border border-white/14 bg-white/10 px-4 py-3 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.4)]'
            >
              <span className='mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#F39B3A]' />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className='block-anim delay-3 mt-8 rounded-2xl border border-white/14 bg-white/8 p-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 sm:p-5'>
          Voor alle details, uitzonderingen en administratie:{' '}
          <a
            href='/files/Spelreglement%20VKH-tornooi.pdf'
            className='text-xs font-semibold uppercase tracking-[0.32em] text-white underline-offset-4 transition hover:underline'
          >
            Download volledig reglement
          </a>
        </div>
      </div>
    </section>
  );
}
