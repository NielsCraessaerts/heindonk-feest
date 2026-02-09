import Image from 'next/image';
import TicketsInfoBlock from '../tickets';

export default function ExtraInfoVrijdag() {
  const highlights = ['Doorlopend sfeer en muziek', 'In en rond de feesttent'];

  const headliners = [
    { name: 'Jonas Van Opstal', photoSrc: '/images/jonas.png' },
    { name: 'DJ Pat B', photoSrc: '/images/Pat-B.png' },
    { name: 'Yves Deruyter', photoSrc: '/images/yves.png' },
  ];

  const extraTimeDjs = ['DJ A.R.N.', 'Aghatixx', 'DJ Dino'];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] sm:text-5xl'>
              Extra Time
            </h2>
            <p className='font-lobster mt-2 text-3xl font-normal tracking-[0.08em] text-white/90'>
              Party
            </p>

            <div className='mt-6 flex flex-wrap items-center justify-center gap-3'>
              <div className='rounded-full bg-white px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[#1F4E97]'>
                Start 20:00
              </div>
              <div className='rounded-full bg-[#F39B3A] px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white'>
                Op het terrein van VK Heindonk
              </div>
            </div>
          </div>

          <div className='relative px-6 pb-6 sm:px-12'>
            <div className='grid gap-5'>
              <div className='rounded-[18px] bg-white/10 px-5 py-6'>
                <p className='text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-white/85'>
                  DJ line-up
                </p>

                <div className='mt-6'>
                  <div className='mt-3 flex flex-wrap justify-center gap-2'>
                    {extraTimeDjs.map((dj) => (
                      <div
                        key={dj}
                        className='rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/90'
                      >
                        {dj}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='mt-6 grid gap-5 md:grid-cols-3'>
                  {headliners.map((dj) => (
                    <div
                      key={dj.name}
                      className='rounded-[22px] bg-white/10 px-6 py-8 text-center shadow-[0_26px_60px_-40px_rgba(0,0,0,0.55)]'
                    >
                      <div className='relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-white/15'>
                        {dj.photoSrc ? (
                          <Image
                            src={dj.photoSrc}
                            alt={dj.name}
                            fill
                            className='object-cover'
                          />
                        ) : (
                          <div className='flex h-full w-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70'>
                            Foto
                          </div>
                        )}
                      </div>
                      <p className='mt-5 inline-flex items-center justify-center rounded-[14px] bg-[#F39B3A] px-5 py-2 text-[13px] font-extrabold uppercase tracking-[0.26em] text-white shadow-[0_12px_30px_-20px_rgba(0,0,0,0.8)]'>
                        {dj.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='grid gap-4 md:grid-cols-2'>
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

              <TicketsInfoBlock ticketPrice='EUR 25' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
