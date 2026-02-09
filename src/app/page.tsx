import MainHeading from '@/components/custom/headings/main-heading';
import SamenvattingBlock from '@/components/custom/samenvattingen/samenvatting-block';
import SponsorsStrip from '@/components/custom/sponsors';

export default function Home() {
  return (
    <>
      <MainHeading />
      <SamenvattingBlock />
      <SponsorsStrip />
    </>
  );
}
