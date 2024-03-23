import Navbar from '@/components/Navbar';
import SzkoleniaHero from '@/components/Szkolenia/SzkoleniaHero';
import PodstawowePage from '../../components/Szkolenia/Podstawowe';
import DoszkalajacePage from '../../components/Szkolenia/Doszkalajace';
import UprawnieniaPage from '../../components/Szkolenia/Uprawnienia';

export default function szkoleniaPage() {
  return (
    <>
      <Navbar params={{ color: 'white' }} />
      <SzkoleniaHero />
      <PodstawowePage />
      <DoszkalajacePage />
      <UprawnieniaPage />
    </>
  );
}
