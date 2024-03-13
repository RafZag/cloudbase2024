import Navbar from '@/components/Navbar';
import SzkoleniaHero from '@/components/SzkoleniaHero';

export default function szkoleniaPage() {
  return (
    <>
      <Navbar params={{ color: 'white' }} />
      <SzkoleniaHero />
      <h1>Wyjazdy</h1>
    </>
  );
}
