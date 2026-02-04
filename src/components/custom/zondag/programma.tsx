export default function ZondagProgramma() {
  const charities = ['Het Rode Kruis', 'Kom op tegen Kanker', 'Boven de Wolken'];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='rounded-[28px] bg-[#1F4E97]'>
          <div className='px-6 py-10 text-center sm:px-12'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/85'>
              Zondag
            </p>
            <h1 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] sm:text-5xl'>
              Programma
            </h1>
            <div className='mx-auto mt-4 h-px w-28 bg-white/40' />
          </div>

          <div className='px-6 pb-10 sm:px-12'>
            <div className='grid gap-6 lg:grid-cols-[1.05fr_0.95fr]'>
              <div className='rounded-[18px] bg-white/10 px-6 py-6'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                  Brunch
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Gezellig ontbijten op zondag
                </p>
              </div>

              <div className='rounded-[18px] bg-[#F39B3A] px-6 py-6 text-white'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/85'>
                  Galawedstrijd
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  VK Heindonk Legends - Bekende Vlamingen
                </p>
              </div>
            </div>

            <div className='mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
              <div className='rounded-[18px] bg-white/10 px-6 py-6'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                  Veiling
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Lucky veiling gedragen retro-truitjes Duvel Moortgat
                </p>
                <p className='mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85'>
                  Voor het goede doel
                </p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {charities.map((item) => (
                    <span
                      key={item}
                      className='rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.32em] text-white'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className='rounded-[18px] bg-white/10 px-6 py-6'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                  Opgeluisterd
                </p>
                <p className='mt-3 text-[13px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Wedstrijd opgeluisterd door KF Hever Maakt Vooruitgang
                </p>
              </div>
            </div>

            <div className='mt-6 grid gap-6 lg:grid-cols-2'>
              <div className='rounded-[18px] bg-white/10 px-6 py-6 text-center'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                  Tickets
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Link naar WeTickets + QR code
                </p>
              </div>

              <div className='rounded-[18px] bg-white/10 px-6 py-6 text-center'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                  VIP arrangement
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Via sponsoring - link naar sponsor pagina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
