import { Bike, Car, Footprints } from 'lucide-react';
import Image from 'next/image';

const PRAKTISCH = {
  address: 'Terreinen VK Heindonk, Kleine Bergen 1, 2830 Heindonk',
  email: 'heindonk_feest@hotmail.com',
  mapsQuery: 'Terreinen VK Heindonk, Kleine Bergen 1, 2830 Heindonk',
  accessibility: [
    {
      label: 'Fiets',
      value: `Fietsenstalling voorzien aan het terrein.
      Deze is onbewaakt.`,
      icon: Bike,
    },
    {
      label: 'Auto',
      value: `Parking is voorzien op een aanpalende weide.
      Bij regenweer of wanneer deze parking vol is, voorzien we een overloopparking op 5 � 10 minuten wandelen.`,
      icon: Car,
    },
    {
      label: 'Te voet',
      value: `het eenvoudigste en veiligste vervoersmiddel om 's nachts na het feestgedruis (en het nodige vocht) terug thuis te geraken.`,
      icon: Footprints,
    },
  ],
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

          <div className='mt-6 rounded-[20px] px-5 py-5'>
            <p className='text-center text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#F39B3A]'>
              Hoe het evenement bereiken:
            </p>
            <div className='mt-4 grid gap-3 md:grid-cols-3'>
              {PRAKTISCH.accessibility.map((item) => (
                <div
                  key={item.label}
                  className='rounded-[16px] border border-white/20 bg-white/10 px-4 py-4 text-center'
                >
                  <div className='mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-[#F39B3A]'>
                    <item.icon size={20} />
                  </div>
                  <p className='mt-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white'>
                    {item.label}
                  </p>
                  <p className='mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85'>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='block-anim delay-2 mt-6 rounded-[28px] bg-white/10 p-5 sm:p-8'>
          <h2 className='text-center text-xl font-extrabold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.14em]'>
            Contact
          </h2>

          <div className='mt-5 grid gap-3 md:grid-cols-2'>
            <a
              href={`mailto:${PRAKTISCH.email}`}
              className='rounded-[20px] border border-white/20 bg-white/10 px-4 py-4 text-center transition hover:bg-white/15 sm:px-5 sm:py-5'
            >
              <p className='text-[9px] font-semibold uppercase tracking-[0.26em] text-white/75 sm:text-[10px] sm:tracking-[0.34em]'>
                E-mail
              </p>
              <p className='mt-3 break-all text-[11px] font-extrabold tracking-[0.03em] text-white sm:text-[12px] sm:tracking-[0.08em]'>
                {PRAKTISCH.email}
              </p>
            </a>

            <div className='rounded-[20px] border border-white/20 bg-white/10 px-4 py-4 text-center sm:px-5 sm:py-5'>
              <p className='text-[9px] font-semibold uppercase tracking-[0.26em] text-white/75 sm:text-[10px] sm:tracking-[0.34em]'>
                Locatie
              </p>
              <p className='mt-3 text-[11px] font-extrabold leading-snug tracking-[0.06em] text-white sm:text-[12px] sm:uppercase sm:tracking-[0.16em]'>
                {PRAKTISCH.address}
              </p>
            </div>
          </div>
        </section>

        <section className='block-anim mt-6 rounded-[28px] bg-white/10 p-6 sm:p-8'>
          <h2 className='text-center text-2xl font-extrabold uppercase tracking-[0.14em] sm:text-3xl'>
            Organisatie
          </h2>
          <p className='mx-auto mt-4 max-w-3xl px-5 py-4 text-center text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/90'>
            Heindonk Feest! is een organisatie van KF Iever Maakt Vooruitgang
            vzw Heindonk en VK Heindonk
          </p>
          <div className='mt-6 grid gap-4 sm:grid-cols-2'>
            <div className='rounded-[20px] border border-white/20 bg-white/10 px-5 py-6 text-center'>
              <div className='relative mx-auto h-24 w-24 sm:h-28 sm:w-28'>
                <Image
                  src='/images/logos/fanfare-logo.png'
                  alt='Logo KF Iever Maakt Vooruitgang'
                  fill
                  className='object-contain'
                />
              </div>
              <p className='mt-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white'>
                KF Iever Maakt Vooruitgang
              </p>
            </div>

            <div className='rounded-[20px] border border-white/20 bg-white/10 px-5 py-6 text-center'>
              <div className='relative mx-auto h-24 w-24 sm:h-28 sm:w-28'>
                <Image
                  src='/images/logos/voetbal_logo.png'
                  alt='Logo VK Heindonk'
                  fill
                  className='object-contain'
                />
              </div>
              <p className='mt-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white'>
                VK Heindonk
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
