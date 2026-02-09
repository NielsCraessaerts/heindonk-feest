import Image from 'next/image';

const sponsorLogos = [
  { name: 'Heindonk Feest', src: '/images/logos/logo_Heindonk_feest.png' },
  { name: 'VK Heindonk', src: '/images/logos/voetbal_logo.png' },
  { name: 'KF Iever Maakt Vooruitgang', src: '/images/logos/fanfare-logo.png' },
  { name: 'Vroempatat', src: '/images/logos/vroempatat.png' },
  { name: 'Elga Events', src: '/images/logos/Elga.png' },
  { name: 'Jupiler', src: '/images/logos/sponsors/jupiler.png' },
] as const;

export default function SponsorsStrip() {
  const loopedLogos = [...sponsorLogos, ...sponsorLogos];

  return (
    <section className='relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden py-6 sm:py-8'>
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(46,93,170,0.95),rgba(46,93,170,0.45)_15%,rgba(46,93,170,0.45)_85%,rgba(46,93,170,0.95))]' />
      <div className='relative'>
        <div className='logo-marquee-track flex w-max items-center gap-4 px-3 sm:gap-6 sm:px-4'>
          {loopedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className='flex h-20 w-36 shrink-0 items-center justify-center rounded-[16px] border border-white/20 bg-white/10 px-3 sm:h-24 sm:w-44'
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={72}
                className='h-14 w-auto object-contain sm:h-16'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
