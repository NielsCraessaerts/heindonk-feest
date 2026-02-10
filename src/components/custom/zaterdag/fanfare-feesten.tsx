import Image from 'next/image';

export default function FanfareFeestenSection() {
  const highlights = [
    'Bevriende fanfares spelen live',
    'Doorlopend muziek & sfeer in de tent',
    'Gezellig voor jong en oud',
    'Gratis inkom',
  ];

  // Placeholder: vul gerust aan met extra fanfarelogo's
  const fanfareLogos: { name: string; src?: string }[] = [
    {
      name: 'Iever Maakt Vooruitgang',
      src: '/images/logos/fanfare-logo.png',
    },
    { name: 'Fanfare 2', src: '' },
    { name: 'Fanfare 3', src: '' },
    { name: 'Fanfare 4', src: '' },
    { name: 'Fanfare 5', src: '' },
    { name: 'Fanfare 6', src: '' },
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <h2 className='mt-4 break-words text-2xl font-extrabold uppercase leading-tight tracking-[0.06em] sm:text-3xl sm:tracking-[0.1em] md:text-4xl lg:text-5xl lg:tracking-[0.16em]'>
              Fanfarefeesten
            </h2>
            <div className='mx-auto mt-4 h-px w-32 bg-white/40' />
            <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/85'>
              Bevriende fanfares op bezoek
            </p>
            <p className='font-lobster mt-2 text-3xl font-normal tracking-[0.08em] text-white/90'>
              Live klanken
            </p>

            <div className='mt-7 flex flex-wrap items-center justify-center gap-3'>
              <div className='rounded-full bg-white px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[#1F4E97]'>
                12:30
              </div>
              <div className='text-[10px] font-semibold uppercase tracking-[0.34em] text-white/75'>
                tot
              </div>
              <div className='rounded-full bg-[#F39B3A] px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white'>
                17:30
              </div>
            </div>
          </div>

          <div className='relative px-6 pb-6 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch'>
              <div className='grid gap-4'>
                <div className='space-y-3'>
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className='rounded-[18px] bg-white/5 px-5 py-4 text-center'
                    >
                      <p className='text-[11px] font-extrabold uppercase tracking-[0.26em] text-white'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='relative overflow-hidden rounded-[18px] bg-[#F39B3A] px-4 py-4 text-center sm:px-5 sm:py-5'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90 sm:text-[11px]'>
                    Deelnemende muziekverenigingen
                  </p>

                  <div className='mt-3 overflow-hidden'>
                    <div className='logo-marquee-track flex w-max gap-2 sm:gap-3'>
                      {[...fanfareLogos, ...fanfareLogos, ...fanfareLogos].map(
                        (f, idx) => (
                          <div
                            key={`${f.name}-${idx}`}
                            className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 sm:h-14 sm:w-14 sm:rounded-2xl'
                            title={f.name}
                          >
                            {f.src ? (
                              <Image
                                src={f.src}
                                alt={f.name}
                                width={40}
                                height={40}
                                className='h-10 w-10 object-contain sm:h-11 sm:w-11'
                              />
                            ) : (
                              <span className='text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/75'>
                                Logo
                              </span>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <p className='mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-[10px] sm:tracking-[0.22em]'>
                    (Wordt aangevuld zodra de line-up vastligt)
                  </p>
                </div>
              </div>

              <div className='relative overflow-hidden rounded-[18px] bg-white/10 p-4 text-center'>
                <div className='relative h-full min-h-[300px] overflow-hidden rounded-[16px]'>
                  <Image
                    src='/images/fanfarefeest2.jpeg'
                    alt='Sfeerbeeld fanfarefeesten vorig jaar'
                    fill
                    className='object-cover'
                    sizes='(min-width: 1024px) 45vw, 100vw'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
