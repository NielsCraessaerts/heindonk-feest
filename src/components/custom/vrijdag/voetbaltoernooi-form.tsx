'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const inputClassName =
  'mt-2 w-full rounded-2xl border border-secondary/25 bg-white/90 px-4 py-3 text-sm font-semibold text-textdark shadow-[0_18px_40px_-30px_rgba(0,0,0,0.45)] placeholder:text-textlight/80 focus:border-[#2B58B2]/40 focus:outline-none focus:ring-2 focus:ring-[#2B58B2]/20';

const labelClassName =
  'text-[11px] font-semibold uppercase tracking-[0.22em] sm:tracking-[0.32em] text-textdark/70 break-words hyphens-auto leading-snug';

const cardClassName =
  'relative rounded-[32px] border border-secondary/25 bg-white/80 shadow-[0_70px_140px_-110px_rgba(0,0,0,0.6)] backdrop-blur';

const fieldWrapClassName =
  'min-w-0 max-w-[520px] md:max-w-none justify-self-center md:justify-self-stretch';

const fieldWrapFullClassName =
  'min-w-0 max-w-[520px] md:col-span-2 md:max-w-none justify-self-center md:justify-self-stretch';

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
      const res = await fetch('/api/form', {
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
    <section className='relative mx-auto w-full max-w-6xl px-6 pb-10 pt-10 sm:pb-12 sm:pt-12'>
      <div className='grid min-w-0 gap-6 lg:grid-cols-[1.25fr_0.75fr]'>
        {/* FORM CARD */}
        <div className={`${cardClassName} block-anim delay-1 min-w-0`}>
          <div className='relative p-6 sm:p-8'>
            <div className='flex items-end justify-between gap-6'>
              <div className='min-w-0'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.48em] text-[#2B58B2]/70'>
                  Inschrijving
                </p>
                <h2 className='mt-3 w-full min-w-0 whitespace-normal break-words text-[22px] font-bold uppercase leading-[1.05] tracking-[0.06em] text-[#2B58B2] sm:text-2xl sm:tracking-[0.12em]'>
                  Voetbaltornooi
                </h2>
              </div>
            </div>

            <form
              className='mt-8 grid gap-5 md:grid-cols-2'
              onSubmit={onSubmit}
            >
              <label className={`md:col-span-1 ${fieldWrapClassName}`}>
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

              <label className={`md:col-span-1 ${fieldWrapClassName}`}>
                <span className={labelClassName}>Teamnaam *</span>
                <input
                  type='text'
                  name='teamnaam'
                  placeholder='VK Heindonk'
                  className={inputClassName}
                  required
                />
              </label>

              <label className={`md:col-span-1 ${fieldWrapClassName}`}>
                <span className={labelClassName}>Teamverantwoordelijke *</span>
                <input
                  type='text'
                  name='teamverantwoordelijke'
                  placeholder='Naam en voornaam'
                  className={inputClassName}
                  required
                />
              </label>

              <label className={`md:col-span-1 ${fieldWrapClassName}`}>
                <span className={labelClassName}>E-mailadres *</span>
                <input
                  type='email'
                  name='email'
                  placeholder='contact@team.be'
                  className={inputClassName}
                  required
                />
              </label>

              <label className={`md:col-span-1 ${fieldWrapClassName}`}>
                <span className={labelClassName}>Telefoon *</span>
                <input
                  type='tel'
                  name='telefoon'
                  placeholder='+32 470 00 00 00'
                  className={inputClassName}
                  required
                />
              </label>

              <label className={fieldWrapFullClassName}>
                <span className={labelClassName}>Opmerkingen</span>
                <textarea
                  name='opmerkingen'
                  rows={4}
                  placeholder='Vul hier extra info in voor de organisatie.'
                  className={`${inputClassName} resize-none`}
                />
              </label>

              <div
                className={`flex flex-col gap-3 md:flex-row md:items-center md:justify-between ${fieldWrapFullClassName}`}
              >
                <p className='text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-textdark/60 sm:text-[11px] sm:tracking-[0.32em]'>
                  Betaling: overschrijving / Payconiq QR
                </p>

                <Button
                  type='submit'
                  disabled={status === 'sending'}
                  className='h-12 rounded-full bg-[#2B58B2] text-xs font-semibold uppercase tracking-[0.28em] text-white hover:bg-[#234B93] disabled:opacity-60'
                >
                  {status === 'sending'
                    ? 'Verzenden...'
                    : 'Inschrijving verzenden'}
                </Button>
              </div>

              {status !== 'idle' && (
                <div
                  className={`rounded-2xl border p-4 text-xs font-semibold uppercase tracking-[0.20em] ${fieldWrapFullClassName} ${
                    status === 'ok'
                      ? 'border-emerald-200 bg-emerald-50/70 text-emerald-900'
                      : ''
                  } ${
                    status === 'error'
                      ? 'border-rose-200 bg-rose-50/70 text-rose-900'
                      : ''
                  } ${
                    status === 'sending'
                      ? 'border-secondary/15 bg-white/70 text-textdark/70'
                      : ''
                  }`}
                >
                  {message ||
                    (status === 'sending' ? 'Bezig met verzenden...' : '')}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* INFO CARD (rechts) */}
        <aside
          className={`${cardClassName} block-anim delay-2 min-w-0 p-6 sm:p-8`}
        >
          <div className='relative'>
            <p className='text-[10px] font-semibold uppercase tracking-[0.48em] text-[#2B58B2]/70'>
              Praktisch
            </p>

            <div className='mt-4 space-y-4'>
              <div className='block-anim delay-2 rounded-2xl border border-secondary/15 bg-white/80 p-4 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.32em] text-[#2B58B2]'>
                  Betaling
                </p>
                <p className='mt-2 text-xs font-semibold uppercase tracking-[0.20em] text-textdark/60'>
                  Overschrijving of Payconiq QR. Vermeld steeds de ploegnaam.
                </p>
                <p className='mt-2 text-xs font-semibold uppercase tracking-[0.20em] text-textdark/60'>
                  Niet betaald = niet ingeschreven.
                </p>
              </div>

              <div className='block-anim delay-3 rounded-2xl border border-secondary/15 bg-white/80 p-4 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.32em] text-[#2B58B2]'>
                  Spelreglement
                </p>
                <p className='mt-2 text-xs font-semibold uppercase tracking-[0.20em] text-textdark/60'>
                  De grote lijnen staan onderaan op deze pagina.
                </p>
                <a
                  href='/files/Spelreglement%20VKH-tornooi.pdf'
                  className='mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.32em] text-[#2B58B2] underline-offset-4 transition hover:underline'
                >
                  Download volledig reglement
                </a>
              </div>

              <div className='block-anim delay-3 rounded-2xl border border-secondary/15 bg-white/80 p-4 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.32em] text-[#2B58B2]'>
                  Inbegrepen
                </p>
                <p className='mt-2 text-xs font-semibold uppercase tracking-[0.20em] text-textdark/60'>
                  3 flessen water + tickets voor Extra Time.
                </p>
              </div>

              <div className='block-anim delay-3 rounded-2xl border border-secondary/15 bg-white/80 p-4 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]'>
                <p className='text-xs font-semibold uppercase tracking-[0.20em] text-textdark/60'>
                  Indien u met meer dan 10 personen wenst deel te nemen aan het
                  tornooi, gelieve dan even per mail contact op te nemen.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
