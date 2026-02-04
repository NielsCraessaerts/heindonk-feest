export default function WkKubbSection() {
  const items = [
    {
      label: 'Inschrijving',
      value: 'Via form (wordt doorgestuurd naar e-mail)',
    },
    { label: 'Betaling', value: 'Via WeTickets' },
    { label: 'Spelreglement', value: 'Beschikbaar via de pagina' },
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-14 md:py-20'>
        <div className='border-white/16 relative overflow-hidden rounded-[28px] border bg-[#F39B3A] shadow-[0_32px_90px_-60px_rgba(0,0,0,0.65)]'>
          <div className='pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.2)_0px,rgba(255,255,255,0.2)_34px,rgba(255,255,255,0)_34px,rgba(255,255,255,0)_82px)]' />
          <div className='pointer-events-none absolute -right-16 top-8 h-44 w-44 rotate-6 rounded-[32px] bg-white/30 blur-2xl' />

          <div className='relative px-6 py-10 sm:px-12'>
            <div className='mx-auto max-w-xl text-center'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/90'>
                Zaterdag
              </p>
              <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] text-white sm:text-5xl'>
                WK Kubben
              </h2>
              <div className='mx-auto mt-4 h-px w-28 bg-white/50' />
              <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/90'>
                Willebroeks Kampioenschap
              </p>
              <div className='mt-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/20 px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white'>
                Open inschrijvingen
              </div>
            </div>
          </div>

          <div className='relative px-6 pb-10 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
              <div className='relative overflow-hidden rounded-[22px] border border-white/40 bg-white/20 px-5 py-5 text-center'>
                <div className='pointer-events-none absolute -top-6 right-6 h-16 w-16 rounded-full bg-white/30 blur-lg' />
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/90'>
                  Snel inschrijven
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                  Beperkte plaatsen
                </p>
                <div className='mt-5'>
                  <a
                    href='#kubb-inschrijving'
                    className='bg-white/20 inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-white transition hover:bg-white/30'
                  >
                    Inschrijven
                  </a>
                </div>
              </div>

              <div className='space-y-3'>
                {items.map((it) => (
                  <div
                    key={it.label}
                    className='border-white/40 rounded-[22px] border bg-white/15 px-5 py-4'
                  >
                    <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/85'>
                      {it.label}
                    </p>
                    <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                      {it.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
