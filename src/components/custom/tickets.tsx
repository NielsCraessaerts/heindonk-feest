import Image from 'next/image';

type Foodtruck = {
  name: string;
  logoSrc: string;
};

type TicketsInfoBlockProps = {
  className?: string;
  foodtrucks?: readonly Foodtruck[];
  ticketPrice?: string;
  ticketPriceLabel?: string;
};

const defaultFoodtrucks: readonly Foodtruck[] = [
  { name: 'Vroempatat', logoSrc: '/images/logos/vroempatat.png' },
  { name: 'Elga Events', logoSrc: '/images/logos/Elga.png' },
];

export default function TicketsInfoBlock({
  className = 'mt-6',
  foodtrucks = defaultFoodtrucks,
  ticketPrice,
  ticketPriceLabel = 'Prijs',
}: TicketsInfoBlockProps) {
  return (
    <div className={`${className} grid gap-4 lg:grid-cols-2`}>
      <div className='border-white/12 flex h-full flex-col rounded-[24px] border bg-[#F39B3A] px-6 py-6 text-center text-white shadow-[0_28px_90px_-70px_rgba(0,0,0,0.9)]'>
        <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/95'>
          Tickets
        </p>
        <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
          Enkel beschikbaar via WeTicket
        </p>
        {ticketPrice ? (
          <div className='mt-4 rounded-[16px] border border-white/30 bg-white/15 px-4 py-3'>
            <p className='text-[9px] font-semibold uppercase tracking-[0.3em] text-white/80'>
              {ticketPriceLabel}
            </p>
            <p className='mt-2 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white'>
              {ticketPrice}
            </p>
          </div>
        ) : null}
        <div className='mt-5 flex flex-1 flex-col items-center justify-center'>
          <div className='h-32 w-32 overflow-hidden rounded-[22px] bg-white/20'>
            <Image
              src='/images/qr-code.png'
              alt='QR code tickets'
              width={128}
              height={128}
              className='h-32 w-32 object-contain'
            />
          </div>
          <p className='mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/90'>
            Scan voor tickets
          </p>
        </div>
        <a
          href='https://heindonk-feest.weticket.io'
          target='_blank'
          rel='noreferrer'
          className='mt-6 inline-flex h-12 items-center justify-center self-center rounded-full bg-white/20 px-6 text-[11px] font-extrabold uppercase tracking-[0.3em] text-white transition hover:bg-white/30'
        >
          Koop tickets
        </a>
      </div>

      <div className='grid gap-4'>
        <div className='flex h-full flex-col rounded-[24px] border border-white/35 bg-[linear-gradient(160deg,rgba(255,255,255,0.22),rgba(255,255,255,0.08))] px-6 py-6 text-center shadow-[0_24px_70px_-45px_rgba(0,0,0,0.9)]'>
          <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/90'>
            VIP arrangement
          </p>
          <p className='mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white'>
            Via sponsoring
          </p>

          <a
            href='/sponsorpakketten'
            className='mt-5 inline-flex h-12 items-center justify-center rounded-full border border-white/45 bg-white/25 px-6 text-[11px] font-extrabold uppercase tracking-[0.32em] text-white transition hover:bg-white/35 active:scale-[0.99]'
          >
            Bekijk VIP mogelijkheden
          </a>
        </div>

        <div className='rounded-[24px] border border-white/20 bg-white/10 px-6 py-6 text-center'>
          <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/85'>
            Foodtrucks & info
          </p>
          <div className='mt-4 grid gap-3 sm:grid-cols-2'>
            {foodtrucks.map((truck) => (
              <div
                key={truck.name}
                className='rounded-[16px] border border-white/20 bg-white/10 px-4 py-4'
              >
                <div className='relative mx-auto h-14 w-14 overflow-hidden rounded-full bg-white/20'>
                  <Image
                    src={truck.logoSrc}
                    alt={truck.name}
                    fill
                    className='object-contain p-2'
                  />
                </div>
                <p className='mt-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white'>
                  {truck.name}
                </p>
              </div>
            ))}
          </div>
          <p className='mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80'>
            Sport, spel en muziek &bull; Support the cause
          </p>
        </div>
      </div>
    </div>
  );
}
