export default function FamilienamiddagSection() {
  const activities = [
    'Groot springkasteel / run',
    'Levend voetbalspel',
    'Voetbaldarts',
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/80'>
              Zaterdag
            </p>
            <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] sm:text-5xl'>
              Familienamiddag
            </h2>
            <div className='mx-auto mt-4 h-px w-28 bg-white/40' />
            <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/85'>
              Voor groot &amp; klein
            </p>
            <p className='font-lobster mt-2 text-3xl font-normal tracking-[0.08em] text-white/90'>
              Speel &amp; geniet
            </p>
          </div>

          <div className='relative px-6 pb-6 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
              <div className='space-y-3'>
                {activities.map((a) => (
                  <div
                    key={a}
                    className='rounded-[18px] bg-white/5 px-5 py-4 text-center'
                  >
                    <p className='text-[11px] font-extrabold uppercase tracking-[0.26em] text-white'>
                      {a}
                    </p>
                  </div>
                ))}
              </div>

              <div className='rounded-[18px] bg-[#F39B3A] px-5 py-6 text-center text-white'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/85'>
                  Tip
                </p>
                <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                  Kom op tijd - doorlopend activiteiten tijdens de namiddag
                </p>
                <div className='mt-4 inline-flex rounded-full bg-white px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[#C56C3A]'>
                  Familie
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
