export default function FamilienamiddagSection() {
  const activities = [
    'Groot springkasteel / run',
    'Levend voetbalspel',
    'Voetbaldarts',
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-14 md:py-20'>
        <div className='border-white/16 relative overflow-hidden rounded-[28px] border bg-[#1F4E97] shadow-[0_32px_90px_-60px_rgba(0,0,0,0.75)]'>
          <div className='pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_38px,rgba(255,255,255,0)_38px,rgba(255,255,255,0)_90px)]' />
          <div className='pointer-events-none absolute right-8 top-6 h-24 w-24 rounded-full bg-[#F39B3A]/45 blur-xl' />

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

          <div className='relative px-6 pb-10 sm:px-12'>
            <div className='grid gap-3 sm:grid-cols-2'>
              {activities.map((a) => (
                <div
                  key={a}
                  className='border-white/16 rounded-[22px] border bg-white/10 px-5 py-4 text-center odd:rotate-1 even:-rotate-1'
                >
                  <p className='text-[11px] font-extrabold uppercase tracking-[0.26em] text-white'>
                    {a}
                  </p>
                </div>
              ))}
            </div>

            <div className='border-white/16 mt-6 rounded-[22px] border bg-gradient-to-r from-[#F39B3A]/30 via-white/5 to-[#F39B3A]/25 px-5 py-5 text-center'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80'>
                Tip
              </p>
              <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/95'>
                Kom op tijd — doorlopend activiteiten tijdens de namiddag
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
