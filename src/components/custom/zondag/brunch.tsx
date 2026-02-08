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
                  Gezellig ontbijten op zondag
                </p>
                <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-white/80'>
                  Doorlopend voor en tijdens het programma
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
                <div className='flex h-full min-h-[260px] items-center justify-center rounded-[14px] border border-dashed border-white/45 bg-white/5 p-6 text-center'>
                  <div>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/75'>
                      Foto
                    </p>
                    <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/90'>
                      Plaats hier een brunch-afbeelding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
