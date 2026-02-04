import Image from 'next/image';

export default function FanfareFeestenSection() {
  const highlights = [
    'Bevriende fanfares spelen live',
    'Doorlopend muziek & sfeer in de tent',
    'Gezellig voor jong en oud',
  ];

  // Placeholder: later invullen met echte logo’s
  const fanfareLogos: { name: string; src?: string }[] = [
    { name: 'Fanfare 1', src: '' },
    { name: 'Fanfare 2', src: '' },
    { name: 'Fanfare 3', src: '' },
    { name: 'Fanfare 4', src: '' },
    { name: 'Fanfare 5', src: '' },
    { name: 'Fanfare 6', src: '' },
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-14 md:py-20'>
        <div className='border-white/16 relative overflow-hidden rounded-[28px] border bg-[#1F4E97] shadow-[0_32px_90px_-60px_rgba(0,0,0,0.75)]'>
          <div className='pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.10)_0px,rgba(255,255,255,0.10)_38px,rgba(255,255,255,0)_38px,rgba(255,255,255,0)_90px)]' />
          <div className='pointer-events-none absolute -right-24 top-10 h-48 w-48 rotate-12 rounded-[40px] bg-[#F39B3A]/35 blur-2xl' />

          <div className='relative px-6 py-10 text-center sm:px-12'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/80'>
              Zaterdag
            </p>
            <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] sm:text-5xl'>
              Fanfarefeesten
            </h2>
            <div className='mx-auto mt-4 h-px w-32 bg-white/40' />
            <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/85'>
              Bevriende fanfares op bezoek
            </p>
            <p className='font-lobster mt-2 text-3xl font-normal tracking-[0.08em] text-white/90'>
              Live klanken
            </p>

            {/* Tijden als “sticker pills” */}
            <div className='mt-7 flex flex-wrap items-center justify-center gap-3'>
              <div className='rounded-full bg-white px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[#1F4E97] shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]'>
                12:30
              </div>
              <div className='text-[10px] font-semibold uppercase tracking-[0.34em] text-white/75'>
                tot
              </div>
              <div className='rounded-full bg-[#F39B3A] px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white shadow-[0_22px_55px_-42px_rgba(0,0,0,0.55)]'>
                17:30
              </div>
            </div>
          </div>

          <div className='relative px-6 pb-10 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch'>
              {/* Highlights links */}
              <div className='space-y-3'>
                {highlights.map((item, idx) => (
                  <div
                    key={item}
                    className={[
                      'border-white/16 rounded-[22px] border bg-white/10 px-5 py-4 text-center',
                      idx % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]',
                    ].join(' ')}
                  >
                    <p className='text-[11px] font-extrabold uppercase tracking-[0.26em] text-white'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Logo-strip rechts */}
              <div className='relative overflow-hidden rounded-[22px] border border-[#F39B3A]/55 bg-[#F39B3A]/15 px-5 py-6 text-center'>
                <div className='pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#F39B3A]/35 blur-xl' />

                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/85'>
                  Deelnemende fanfares
                </p>

                <div className='mt-5 flex gap-3 overflow-x-auto pb-2'>
                  {fanfareLogos.map((f) => (
                    <div
                      key={f.name}
                      className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15'
                      title={f.name}
                    >
                      {f.src ? (
                        <Image
                          src={f.src}
                          alt={f.name}
                          width={44}
                          height={44}
                          className='h-11 w-11 object-contain'
                        />
                      ) : (
                        <span className='text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/75'>
                          Logo
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className='mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80'>
                  (Wordt aangevuld zodra de line-up vastligt)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
