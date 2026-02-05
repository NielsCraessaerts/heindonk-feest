export default function ZondagGalawedstrijd() {
  const charities = [
    'Het Rode Kruis',
    'Kom op tegen Kanker',
    'Boven de Wolken',
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[34px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/80'>
              Main Event
            </p>

            <h1 className='mt-4 text-3xl font-extrabold uppercase leading-tight tracking-[0.10em] sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-[0.16em]'>
              Galawedstrijd
            </h1>

            <div className='mx-auto mt-4 h-px w-36 bg-white/30' />
            {/* Scoreline / fight card */}
            <div className='border-white/12 bg-white/8 mx-auto mt-8 max-w-4xl rounded-[26px] border px-5 py-6 shadow-[0_40px_110px_-70px_rgba(0,0,0,0.9)]'>
              <div className='grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]'>
                <div className='text-center md:text-right'>
                  <p className='text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                    VK Heindonk
                  </p>
                  <p className='mt-1 text-[22px] font-extrabold uppercase tracking-[0.14em] text-white sm:text-[26px]'>
                    Legends
                  </p>
                </div>

                <div className='flex justify-center'>
                  <div className='rounded-full bg-[#F39B3A] px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.28em] text-white'>
                    VS
                  </div>
                </div>

                <div className='text-center md:text-left'>
                  <p className='text-[12px] font-extrabold uppercase tracking-[0.24em] text-white'>
                    Bekende
                  </p>
                  <p className='mt-1 text-[22px] font-extrabold uppercase tracking-[0.14em] text-white sm:text-[26px]'>
                    Vlamingen
                  </p>
                </div>
              </div>

              <div className='mt-5 flex flex-wrap items-center justify-center gap-2'>
                <span className='rounded-full bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.32em] text-white'>
                  Showmatch
                </span>
                <span className='rounded-full bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.32em] text-white/90'>
                  Feesttent & terrein VK Heindonk
                </span>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className='relative px-6 pb-10 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-3'>
              {/* fanfare */}
              <div className='hover:bg-white/12 group rounded-[22px] border border-white/10 bg-white/10 px-6 py-6 transition'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Opgeluisterd
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  KF Iever Maakt Vooruitgang
                </p>
                <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75'>
                  Muzikale omkadering voor een echte erewedstrijd
                </p>
              </div>

              {/* auction */}
              <div className='relative overflow-hidden rounded-[22px] border border-white/10 bg-white/10 px-6 py-6'>
                <div className='pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 opacity-80 blur-3xl' />
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Lucky veiling
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Retro-truitjes Duvel Moortgat
                </p>

                <p className='mt-5 text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Voor het goede doel
                </p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {charities.map((item) => (
                    <span
                      key={item}
                      className='rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* hype / callout */}
              <div className='rounded-[22px] border border-white/10 bg-white/10 px-6 py-6'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/70'>
                  Moment
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Eenmalige clash — volle ambiance
                </p>
                <div className='mt-4 grid gap-2'>
                  <div className='rounded-[16px] bg-white/10 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/90'>
                    Legends in de spotlights
                  </div>
                  <div className='rounded-[16px] bg-white/10 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/90'>
                    Bekende Vlamingen op het veld
                  </div>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className='mt-6 grid gap-4 lg:grid-cols-2'>
              <div className='border-white/12 rounded-[24px] border bg-[#F39B3A] px-6 py-6 text-center text-white shadow-[0_28px_90px_-70px_rgba(0,0,0,0.9)]'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/95'>
                  Tickets
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  WeTickets + QR code
                </p>
                <div className='mx-auto mt-4 h-20 w-20 rounded-[18px] bg-white/20' />
                <p className='mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/90'>
                  QR placeholder
                </p>
              </div>

              <div className='border-white/12 rounded-[24px] border bg-white/10 px-6 py-6 text-center'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/80'>
                  VIP arrangement
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Via sponsoring
                </p>

                <a
                  href='/sponsorpakketten'
                  className='mt-5 inline-flex h-12 items-center justify-center rounded-full bg-white/15 px-6 text-[11px] font-extrabold uppercase tracking-[0.32em] text-white transition hover:bg-white/25 active:scale-[0.99]'
                >
                  Bekijk VIP mogelijkheden
                </a>

                <p className='mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70'>
                  Support the cause • Support the club
                </p>
              </div>
            </div>

            {/* footer note */}
            <div className='mt-8 text-center'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/70'>
                Sport, spel en muziek • Foodtrucks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
