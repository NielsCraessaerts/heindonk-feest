export default function SpelreglementSection() {
  const items = [
    '5 tegen 5 (1 keeper + 4 veldspelers)',
    'Dames- en herencompetitie',
    'Wedstrijden: 1 x 15 minuten',
    'Finales: 2 x 10 minuten (kantwissel)',
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <h2 className='mt-4 text-2xl font-extrabold uppercase leading-tight tracking-[0.06em] sm:text-3xl sm:tracking-[0.1em] md:text-4xl lg:text-5xl lg:tracking-[0.16em] break-words'>
              Spelreglement
            </h2>
            <div className='mx-auto mt-4 h-px w-28 bg-white/40' />
            <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/85'>
              In het kort
            </p>
            <a
              href='/files/Spelreglement%20VKH-tornooi.pdf'
              className='mt-5 inline-flex items-center justify-center rounded-full bg-white/20 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white transition hover:bg-white/30'
            >
              Download volledig reglement
            </a>
          </div>

          <div className='relative px-6 pb-6 sm:px-12'>
            <div className='grid gap-3 md:grid-cols-2'>
              {items.map((item, idx) => (
                <div
                  key={item}
                  className='rounded-[18px] bg-white/10 px-5 py-4'
                >
                  <p className='text-[11px] font-extrabold uppercase tracking-[0.24em] text-white'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
