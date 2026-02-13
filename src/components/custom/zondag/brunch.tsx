import Image from 'next/image';

export default function ZondagBrunch() {
  const badges = ['Familie', 'Gezellig'];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6'>
        <div className='rounded-[28px]'>
          <div className='px-6 py-10 text-center sm:px-12'>
            <h1 className='mt-4 text-2xl font-extrabold uppercase leading-tight tracking-[0.06em] sm:text-3xl sm:tracking-[0.1em] md:text-4xl lg:text-5xl lg:tracking-[0.16em]'>
              Brunch
            </h1>
            <div className='mx-auto mt-4 h-px w-28 bg-white/40' />
          </div>

          <div className='px-6 pb-10 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch'>
              <div className='rounded-[20px] bg-white/10 px-6 py-7'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                  Gezellig brunchen op zondag
                </p>
                <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-white/80'>
                  De huistraiteur van VK Heindonk serveert onze brunch van 10h30
                  tot 13h30
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {badges.map((item) => (
                    <span
                      key={item}
                      className='rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.32em] text-white'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className='rounded-[20px] bg-white/10 p-3 sm:p-4'>
                <div className='relative h-full min-h-[260px] overflow-hidden rounded-[14px]'>
                  <Image
                    src='/images/brunch.jpg'
                    alt='Brunch op zondag'
                    fill
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 45vw'
                  />
                </div>
              </div>
            </div>

            <div className='mt-6 grid gap-4 lg:grid-cols-2'>
              <div className='border-white/12 rounded-[24px] border bg-[#F39B3A] px-6 py-6 text-center text-white shadow-[0_28px_90px_-70px_rgba(0,0,0,0.9)]'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/95'>
                  Tickets
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  WeTickets + QR code
                </p>
                <div className='mt-4 rounded-[16px] border border-white/30 bg-white/15 px-4 py-3'>
                  <p className='text-[9px] font-semibold uppercase tracking-[0.3em] text-white/80'>
                    Prijs
                  </p>
                  <p className='mt-2 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white'>
                    &euro;60
                  </p>
                </div>
                <div className='mx-auto mt-4 h-20 w-20 overflow-hidden rounded-[18px] bg-white/20'>
                  <Image
                    src='/images/qr-code.png'
                    alt='QR code tickets'
                    width={80}
                    height={80}
                    className='h-20 w-20 object-contain'
                  />
                </div>
                <p className='mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/90'>
                  Scan voor tickets
                </p>
              </div>

              <div className='border-white/12 flex h-full flex-col rounded-[24px] border bg-white/10 px-6 py-6 text-center'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/80'>
                  VIP arrangement
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Via sponsoring
                </p>

                <a
                  href='/sponsorpakketten'
                  className='mt-5 inline-flex h-12 items-center justify-center self-center rounded-full bg-white/15 px-6 text-[11px] font-extrabold uppercase tracking-[0.32em] text-white transition hover:bg-white/25 active:scale-[0.99]'
                >
                  Bekijk VIP mogelijkheden
                </a>

                <p className='mt-auto pt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70'>
                  Support the cause • Support the club
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


