'use client';

import Image from 'next/image';
import { useState } from 'react';

const inputClassName =
  'mt-2 w-full rounded-[14px] bg-white/90 px-4 py-3 text-sm font-semibold text-[#1F4E97] placeholder:text-[#5A6C8E] focus:outline-none';

const labelClassName =
  'text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function VoetbaltoernooiForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      competitie: String(fd.get('competitie') ?? ''),
      teamnaam: String(fd.get('teamnaam') ?? ''),
      teamverantwoordelijke: String(fd.get('teamverantwoordelijke') ?? ''),
      email: String(fd.get('email') ?? ''),
      telefoon: String(fd.get('telefoon') ?? ''),
      opmerkingen: String(fd.get('opmerkingen') ?? ''),
    };

    if (
      !payload.competitie ||
      !payload.teamnaam ||
      !payload.teamverantwoordelijke ||
      !payload.email ||
      !payload.telefoon
    ) {
      setStatus('error');
      setMessage(
        'Vul alle verplichte velden in (competitie, team, contact, mail, telefoon).'
      );
      return;
    }

    try {
      const res = await fetch('/api/voetbal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || 'Verzenden mislukt. Probeer opnieuw.');
      }

      setStatus('ok');
      setMessage(
        'Inschrijving verzonden. Je ontvangt (optioneel) ook een bevestiging via mail.'
      );
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setMessage(err?.message ?? 'Er ging iets mis.');
    }
  }

  return (
    <section className='relative text-white'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:py-14'>
        <div className='relative overflow-hidden rounded-[28px]'>
          <div className='relative px-6 py-10 text-center sm:px-12'>
            <h2 className='mt-4 text-xl font-extrabold uppercase leading-tight tracking-[0.06em] sm:text-3xl sm:tracking-[0.1em] md:text-4xl lg:text-5xl lg:tracking-[0.16em]'>
              Voetbaltornooi
            </h2>
            <div className='mx-auto mt-4 h-px w-28 bg-white/40' />
            <div className='mt-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.34em] text-white'>
              Open inschrijvingen
            </div>
          </div>

          <div className='relative px-6 pb-6 sm:px-12'>
            <div className='grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-start'>
              <div className='rounded-[18px] bg-white/15 px-5 py-5'>
                <p className='text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-white/90'>
                  Inschrijving
                </p>

                <form
                  className='mt-4 grid gap-4 md:grid-cols-2'
                  onSubmit={onSubmit}
                >
                  <label className='block md:col-span-1'>
                    <span className={labelClassName}>Competitie *</span>
                    <select
                      name='competitie'
                      className={inputClassName}
                      defaultValue=''
                      required
                    >
                      <option value='' disabled>
                        Kies dames of heren
                      </option>
                      <option value='dames'>Damescompetitie</option>
                      <option value='heren'>Herencompetitie</option>
                    </select>
                  </label>

                  <label className='block md:col-span-1'>
                    <span className={labelClassName}>Teamnaam *</span>
                    <input
                      type='text'
                      name='teamnaam'
                      placeholder='VK Heindonk'
                      className={inputClassName}
                      required
                    />
                  </label>

                  <label className='block md:col-span-1'>
                    <span className={labelClassName}>
                      Teamverantwoordelijke *
                    </span>
                    <input
                      type='text'
                      name='teamverantwoordelijke'
                      placeholder='Naam en voornaam'
                      className={inputClassName}
                      required
                    />
                  </label>

                  <label className='block md:col-span-1'>
                    <span className={labelClassName}>E-mailadres *</span>
                    <input
                      type='email'
                      name='email'
                      placeholder='contact@team.be'
                      className={inputClassName}
                      required
                    />
                  </label>

                  <label className='block md:col-span-1'>
                    <span className={labelClassName}>Telefoon *</span>
                    <input
                      type='tel'
                      name='telefoon'
                      placeholder='+32 470 00 00 00'
                      className={inputClassName}
                      required
                    />
                  </label>

                  <label className='block md:col-span-2'>
                    <span className={labelClassName}>Opmerkingen</span>
                    <textarea
                      name='opmerkingen'
                      rows={4}
                      placeholder='Vul hier extra info in voor de organisatie.'
                      className={`${inputClassName} resize-none`}
                    />
                  </label>

                  <div className='flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between'>
                    <button
                      type='submit'
                      disabled={status === 'sending'}
                      className='inline-flex h-12 items-center justify-center rounded-full bg-white/20 px-6 text-[11px] font-extrabold uppercase tracking-[0.34em] text-white transition hover:bg-white/30 disabled:opacity-60'
                    >
                      {status === 'sending'
                        ? 'Verzenden...'
                        : 'Inschrijving verzenden'}
                    </button>
                  </div>

                  {status !== 'idle' && (
                    <div
                      className={`rounded-[16px] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] md:col-span-2 ${
                        status === 'ok' ? 'bg-emerald-100 text-emerald-900' : ''
                      } ${
                        status === 'error' ? 'bg-rose-100 text-rose-900' : ''
                      } ${
                        status === 'sending' ? 'bg-white/80 text-[#1F4E97]' : ''
                      }`}
                    >
                      {message ||
                        (status === 'sending' ? 'Bezig met verzenden...' : '')}
                    </div>
                  )}
                </form>
              </div>

              <div className='rounded-[18px] bg-white/10 p-3 sm:p-4 lg:h-full'>
                <div className='relative h-full min-h-[300px] overflow-hidden rounded-[14px]'>
                  <Image
                    src='/images/toernooi.png'
                    alt='Voetbaltoernooi'
                    fill
                    className='object-cover'
                    sizes='(min-width: 1024px) 32vw, 100vw'
                  />
                </div>
              </div>
            </div>

            <div className='mt-4 grid gap-3 md:grid-cols-2'>
              <div className='rounded-[18px] bg-[#F39B3A] px-5 py-4'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.36em] text-white/90'>
                  Betaling
                </p>
                <div className='mt-3 flex items-center gap-4'>
                  <div className='flex h-20 w-20 shrink-0 items-center justify-center rounded-[12px] border border-dashed border-white/45 bg-white/5'>
                    <span className='text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/80'>
                      QR
                    </span>
                  </div>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85'>
                    Payconiq QR placeholder
                  </p>
                </div>
                <p className='mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85'>
                  Graag ploegnaam vermelden bij overschrijving.
                </p>
                <p className='mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85'>
                  Inschrijving is pas definitief na betaling en confirmatie van
                  de organisatie.
                </p>
              </div>

              <div className='rounded-[18px] bg-white/10 px-5 py-4'>
                <p className='mt-3 flex flex-col items-start gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white sm:flex-row sm:items-center sm:gap-3 sm:text-[12px] sm:tracking-[0.2em]'>
                  <span>Prijs per ploeg:</span>
                  <span className='inline-flex shrink-0 rounded-full bg-[#F39B3A] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white sm:tracking-[0.2em]'>
                    EUR 350
                  </span>
                </p>
                <p className='mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80'>
                  Inbegrepen:
                </p>
                <ul className='mt-3 space-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
                  <li>- Inschrijving ploeg met 10 deelnemers</li>
                  <li>- 10 tickets Extra Time Party</li>
                  <li>- 50 euro breekmunten (voor eten en drinken)</li>
                  <li>- 3 flessen water</li>
                </ul>
              </div>

              <div className='rounded-[18px] bg-white/10 px-5 py-4 md:col-span-2'>
                <p className='text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90'>
                  Dj's en ambiance gedurende het tornooi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
