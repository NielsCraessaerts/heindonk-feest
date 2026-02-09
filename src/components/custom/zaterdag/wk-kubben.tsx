import Image from 'next/image';

export default function WkKubbSection() {
  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 sm:px-12'>
            <div className='mx-auto max-w-xl text-center'>
              <h2 className='mt-4 text-4xl font-extrabold uppercase tracking-[0.24em] text-white sm:text-5xl'>
                WK Kubben
              </h2>
              <div className='mx-auto mt-4 h-px w-28 bg-white/50' />
              <p className='mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/90'>
                Willebroeks Kampioenschap
              </p>
              <div className='mt-5 flex flex-wrap items-center justify-center gap-2'>
                <span className='inline-flex rounded-full bg-white/20 px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white'>
                  Open inschrijvingen
                </span>
                <span className='inline-flex rounded-full bg-white/20 px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.3em] text-white'>
                  Voor familie-, amateur- en gelegenheidsploegen
                </span>
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

                  <label className='block'>
                    <span className='text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80'>
                      Extra opmerkingen
                    </span>
                    <textarea
                      name='opmerkingen'
                      rows={4}
                      placeholder='Extra info voor de organisatie'
                      className='mt-2 w-full resize-none rounded-[14px] bg-white/90 px-4 py-3 text-sm font-semibold text-[#1F4E97] placeholder:text-[#5A6C8E]'
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

              <div className='rounded-[18px] bg-white/10 p-3 sm:p-4 lg:h-full'>
                <div className='relative h-full min-h-[300px] overflow-hidden rounded-[14px]'>
                  <Image
                    src='/images/kubb.png'
                    alt='WK Kubben'
                    fill
                    className='object-cover'
                    sizes='(min-width: 1024px) 32vw, 100vw'
                  />
                </div>
              </div>
            </div>

            <div className='mt-4 rounded-[18px] bg-white/10 px-4 py-4 sm:px-5 sm:py-5'>
              <div className='grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-stretch'>
                <div className='rounded-[14px] bg-white/10 px-4 py-4'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/90'>
                    Spelreglement
                  </p>
                  <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85'>
                    Download het volledige reglement.
                  </p>
                  <a
                    href='/files/WK%20KUBBTORNOOI%20%28Willebroeks%20Kampioenschap%29.pdf'
                    className='mt-4 inline-flex h-11 items-center justify-center rounded-full bg-white/15 px-6 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white transition hover:bg-white/25'
                  >
                    Download spelreglement
                  </a>

                  <p className='mt-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/85'>
                    Prijs
                  </p>
                  <p className='mt-2 flex flex-col items-start gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white sm:flex-row sm:items-center sm:gap-3 sm:tracking-[0.18em]'>
                    <span>Ploeg van 4 tot 6 personen:</span>
                    <span className='inline-flex shrink-0 rounded-full bg-[#F39B3A] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white sm:tracking-[0.2em]'>
                      EUR 20
                    </span>
                  </p>
                  <p className='mt-3 pt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85'>
                    Na inschrijving van uw ploeg gelieve te betalen via Weticket
                  </p>
                  <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85'>
                    Inschrijving is pas definitief na betaling en confirmatie
                    van de organisatie
                  </p>
                </div>

                <div className='flex h-full flex-col rounded-[14px] bg-[#F39B3A] px-4 py-4 text-center'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/95'>
                    Betaling
                  </p>
                  <p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90'>
                    Scan de QR of koop via WeTicket
                  </p>
                  <div className='mt-4 flex flex-1 items-center justify-center'>
                    <div className='h-24 w-24 overflow-hidden rounded-[16px] bg-white/20'>
                      <Image
                        src='/images/qr-code.png'
                        alt='QR code betaling WK Kubben'
                        width={96}
                        height={96}
                        className='h-24 w-24 object-contain'
                      />
                    </div>
                  </div>
                  <a
                    href='https://heindonk-feest.weticket.io'
                    target='_blank'
                    rel='noreferrer'
                    className='mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-white/20 px-6 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white transition hover:bg-white/30'
                  >
                    Tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
