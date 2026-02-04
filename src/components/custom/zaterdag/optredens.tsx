export default function LiveOptredensSection() {
  const acts = [
    { name: 'DJ Sjekke', tone: 'peach' },
    { name: 'De Jaargetijden', tone: 'white' },
    { name: 'Eigen Kweek', tone: 'orange' },
    { name: 'Bram & Lennert', tone: 'brown' },
  ] as const;

  const toneClass: Record<(typeof acts)[number]['tone'], string> = {
    peach:
      'bg-[#F6C89B] text-[#8B3F12] border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]',
    white:
      'bg-white text-[#1F4E97] border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]',
    orange:
      'bg-[#F39B3A] text-white border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]',
    brown:
      'bg-[#7A3A24] text-white border-white/0 shadow-[0_22px_55px_-42px_rgba(0,0,0,0.6)]',
  };

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-14 md:py-20'>
        {/* andere kleur dan WK Kubb => minder “copy paste” */}
        <div className='border-white/16 relative overflow-hidden rounded-[28px] border bg-[#1F4E97] shadow-[0_32px_90px_-60px_rgba(0,0,0,0.75)]'>
          <div className='pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.10)_0px,rgba(255,255,255,0.10)_38px,rgba(255,255,255,0)_38px,rgba(255,255,255,0)_90px)]' />
          <div className='pointer-events-none absolute -left-14 top-10 h-40 w-40 rounded-[44px] bg-[#F39B3A]/35 blur-2xl' />

          <div className='relative px-6 py-10 text-center sm:px-12'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/85'>
              Zaterdag
            </p>
            <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] sm:text-5xl'>
              Live
            </h2>
            <p className='font-lobster mt-2 text-3xl font-normal tracking-[0.08em] text-white/95'>
              Optredens
            </p>

            <div className='mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2'>
              <span className='text-[10px] font-extrabold uppercase tracking-[0.34em] text-white/90'>
                In de tent
              </span>
              <span className='h-4 w-px bg-white/25' />
              <span className='text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80'>
                Avondprogramma
              </span>
            </div>
          </div>

          <div className='relative px-6 pb-10 sm:px-12'>
            {/* PILL LINE-UP zoals op de screenshot */}
            <div className='mx-auto flex max-w-xl flex-col items-center gap-3'>
              {acts.map((a, idx) => (
                <div
                  key={a.name}
                  className={[
                    'w-full max-w-[420px] rounded-[12px] px-5 py-3 text-center',
                    'text-[12px] font-extrabold uppercase tracking-[0.28em]',
                    'transition hover:-translate-y-[1px]',
                    toneClass[a.tone],
                    idx % 2 === 0 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]',
                  ].join(' ')}
                >
                  {a.name}
                </div>
              ))}
            </div>

            {/* Tickets/VIP in 2 kleine cards (andere layout dan WK Kubb) */}
            <div className='mt-8 grid gap-4 md:grid-cols-2'>
              <div className='border-white/16 rounded-[22px] border bg-white/10 px-5 py-5 text-center'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.38em] text-white/85'>
                  Tickets
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                  Link naar WeTickets + QR code
                </p>
              </div>

              <div className='border-white/16 flex items-center justify-center rounded-[22px] border bg-white/10 px-5 py-5'>
                <a
                  href='/sponsorpakketten'
                  className='bg-white/12 hover:bg-white/18 inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-white transition'
                >
                  VIP arrangement
                </a>
              </div>
            </div>
          </div>

          <div className='border-t border-white/10 px-6 py-4 text-center'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/75'>
              Zaterdag • Live muziek • Tickets via WeTickets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
