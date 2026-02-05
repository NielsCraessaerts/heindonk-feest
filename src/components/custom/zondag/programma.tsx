import ZondagBrunch from '@/components/custom/zondag/brunch';
import ZondagGalawedstrijd from '@/components/custom/zondag/galawedstrijd';

export default function ZondagProgramma() {
  return (
    <div className='space-y-6'>
      <ZondagBrunch />
      <ZondagGalawedstrijd />
    </div>
  );
}
