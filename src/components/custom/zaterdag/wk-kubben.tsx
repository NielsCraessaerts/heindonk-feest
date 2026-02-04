export default function WkKubbSection() {
  const items = [
    {
      label: 'Betaling',
      value: 'Via WeTickets',
    },
    { label: 'Spelreglement', value: 'Beschikbaar via de pagina' },
  ];

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 sm:px-12'>
            <div className='mx-auto max-w-xl text-center'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.42em] text-white/90'>
                Zaterdag
              </p>
              <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] text-white sm:text-5xl'>
                WK Kubben
              </h2>
              <div className='mx-auto mt-4 h-px w-28 bg-white/50' />
              <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/90'>
                Willebroeks Kampioenschap
              </p>
              <div className='mt-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white'>
                Open inschrijvingen
              </div>
            </div>
          </div>

          <div className='relative px-6 pb-6 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
              <div className='rounded-[18px] bg-white/15 px-5 py-5'>
                <p className='text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-white/90'>
                  Inschrijving
                </p>

                <form className='mt-4 grid gap-4'>
                  <label className='block'>
                    <span className='text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80'>
                      Ploegnaam
                    </span>
                    <input
                      type='text'
                      name='teamnaam'
                      placeholder='VK Heindonk'
                      className='mt-2 w-full rounded-[14px] bg-white/90 px-4 py-3 text-sm font-semibold text-[#1F4E97] placeholder:text-[#5A6C8E]'
                      required
                    />
                  </label>

                  <label className='block'>
                    <span className='text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80'>
                      Ploegverantwoordelijke
                    </span>
                    <input
                      type='text'
                      name='teamverantwoordelijke'
                      placeholder='Naam en voornaam'
                      className='mt-2 w-full rounded-[14px] bg-white/90 px-4 py-3 text-sm font-semibold text-[#1F4E97] placeholder:text-[#5A6C8E]'
                      required
                    />
                  </label>

                  <label className='block'>
                    <span className='text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80'>
                      E-mail
                    </span>
                    <input
                      type='email'
                      name='email'
                      placeholder='contact@team.be'
                      className='mt-2 w-full rounded-[14px] bg-white/90 px-4 py-3 text-sm font-semibold text-[#1F4E97] placeholder:text-[#5A6C8E]'
                      required
                    />
                  </label>

                  <label className='block'>
                    <span className='text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80'>
                      Telefoonnummer
                    </span>
                    <input
                      type='tel'
                      name='telefoon'
                      placeholder='+32 470 00 00 00'
                      className='mt-2 w-full rounded-[14px] bg-white/90 px-4 py-3 text-sm font-semibold text-[#1F4E97] placeholder:text-[#5A6C8E]'
                      required
                    />
                  </label>

                  <button
                    type='submit'
                    className='mt-2 inline-flex w-full items-center justify-center rounded-full bg-white/20 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-white transition hover:bg-white/30'
                  >
                    Inschrijven
                  </button>
                </form>
              </div>

              <div className='space-y-3'>
                {items.map((it) => (
                  <div
                    key={it.label}
                    className='rounded-[18px] bg-white/10 px-5 py-4'
                  >
                    <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/90'>
                      {it.label}
                    </p>
                    <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
                      {it.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
