import Image from 'next/image';

export default function ExtraInfoVrijdag() {
  const extraTimeDjs = ['DJ A.R.N.', 'Aghatixx', 'DJ Dino'];
  const headliners = [
    { name: 'Jonas Van Opstal', photoSrc: '' },
    { name: 'DJ Pat B', photoSrc: '' },
    { name: 'Yves Deruyter', photoSrc: '' },
  ];

  return (
    <section className='summary-anim relative text-white'>
      <div className='relative mx-auto w-full max-w-6xl px-6 py-14 md:py-20'>
        <div className='mt-6 text-center' data-anim>
          <h2 className='mt-5 text-4xl font-bold uppercase tracking-[0.22em] sm:text-5xl'>
            Extra Time
          </h2>
          <p className='font-lobster mt-2 text-4xl font-normal tracking-[0.06em] text-white/95 sm:text-5xl'>
            Party
          </p>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-2' data-anim>
          <div className='rounded-[22px] border border-white/20 bg-white/10 px-6 py-5 text-center shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
            <p className='text-xs font-semibold uppercase tracking-[0.32em] text-white/85'>
              DJ&apos;s tijdens Extra Time
            </p>
            <div className='mt-4 space-y-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-white'>
              {extraTimeDjs.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className='rounded-[22px] border border-white/20 bg-white/10 px-6 py-5 text-center shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
            <p className='text-xs font-semibold uppercase tracking-[0.32em] text-white/85'>
              Headliners
            </p>
            <div className='mt-4 grid gap-3 sm:grid-cols-3'>
              {headliners.map((dj) => (
                <div
                  key={dj.name}
                  className='flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3'
                >
                  <div className='relative h-16 w-16 overflow-hidden rounded-full border border-white/30 bg-white/15'>
                    {dj.photoSrc ? (
                      <Image
                        src={dj.photoSrc}
                        alt={dj.name}
                        fill
                        className='object-cover'
                      />
                    ) : (
                      <div className='flex h-full w-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70'>
                        Foto
                      </div>
                    )}
                  </div>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90'>
                    {dj.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-6 grid gap-4 text-center md:grid-cols-2' data-anim>
          <div className='rounded-[22px] border border-white/20 bg-white/10 px-6 py-4 text-center shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
            <p className='text-xs font-semibold uppercase tracking-[0.32em] text-white/85'>
              Tickets
            </p>
            <div className='mt-2 text-[13px] font-semibold uppercase tracking-[0.28em] text-white'>
              <p>Inschrijven via WeTickets</p>
            </div>
          </div>

          <div className='content-center rounded-[22px] border border-white/20 bg-white/10 px-6 py-4 text-center shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
            <a
              href='/sponsorpakketten'
              className='inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-white/25'
            >
              VIP arrangement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
