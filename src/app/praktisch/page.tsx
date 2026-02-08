const PRAKTISCH = {
  address: 'Terrein VK Heindonk, Heindonk (Willebroek)',
  email: 'info@heindonk-feest.be',
  phoneDisplay: '+32 470 00 00 00',
  phoneHref: '+32470000000',
  mapsQuery: 'Terrein VK Heindonk, Willebroek',
};

export default function PraktischPage() {
  return (
    <main className='relative min-h-screen text-white'>
      <div className='pointer-events-none fixed inset-0 -z-20 bg-[#2E5DAA]' />
      <div className='pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)]' />
      <div className='pointer-events-none fixed inset-0 -z-20 opacity-[0.28] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_42px,rgba(255,255,255,0)_42px,rgba(255,255,255,0)_96px)]' />
      <div className="[background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')] pointer-events-none fixed inset-0 -z-20 opacity-[0.12]" />

      <div className='relative z-10 mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <section className='block-anim delay-1 rounded-[28px] bg-white/10 p-4 sm:p-6'>
          <div className='mb-5 text-center'>
            <h1 className='text-3xl font-extrabold uppercase tracking-[0.16em] sm:text-4xl'>
              Praktisch
            </h1>
            <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80'>
              Locatie & route
            </p>
          </div>

          <div className='overflow-hidden rounded-[20px] border border-white/20 bg-white/5'>
            <iframe
              title='Google Maps - Heindonk Feest'
              src={`https://www.google.com/maps?q=${encodeURIComponent(PRAKTISCH.mapsQuery)}&output=embed`}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='h-[360px] w-full md:h-[460px]'
            />
          </div>

          <p className='mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80'>
            {PRAKTISCH.address}
          </p>
        </section>

        <section className='block-anim delay-2 mt-6 rounded-[28px] bg-white/10 p-6 sm:p-8'>
          <h2 className='text-center text-2xl font-extrabold uppercase tracking-[0.14em] sm:text-3xl'>
            Contact
          </h2>

          <div className='mt-6 grid gap-4 md:grid-cols-3'>
            <a
              href={`mailto:${PRAKTISCH.email}`}
              className='rounded-[20px] border border-white/20 bg-white/10 px-5 py-5 text-center transition hover:bg-white/15'
            >
              <p className='text-[10px] font-semibold uppercase tracking-[0.34em] text-white/75'>
                E-mail
              </p>
              <p className='mt-3 text-[12px] font-extrabold tracking-[0.08em] text-white'>
                {PRAKTISCH.email}
              </p>
            </a>

            <div className='rounded-[20px] border border-white/20 bg-white/10 px-5 py-5 text-center'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.34em] text-white/75'>
                Locatie
              </p>
              <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white'>
                {PRAKTISCH.address}
              </p>
            </div>

            <a
              href={`tel:${PRAKTISCH.phoneHref}`}
              className='rounded-[20px] border border-white/20 bg-white/10 px-5 py-5 text-center transition hover:bg-white/15'
            >
              <p className='text-[10px] font-semibold uppercase tracking-[0.34em] text-white/75'>
                Telefoon
              </p>
              <p className='mt-3 text-[12px] font-extrabold tracking-[0.08em] text-white'>
                {PRAKTISCH.phoneDisplay}
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
