import Navbar from '@/components/Navbar';
import MainHero from '@/components/MainHero';
import About from '@/components/About';
import HomePage3boxes from '@/components/HomePage3Boxes';
import HomePageBlogpost from '@/components/HomePageBlogpost';
import HomePageEquipment from '@/components/HomePageEquipment';

type Props = {
  params: { color: string };
};

export default function HomePage() {
  return (
    <>
      <Navbar params={{ color: 'main-blue' }} />
      <MainHero />
      <HomePage3boxes />
      <About />
      <HomePageBlogpost />
      <HomePageEquipment />
    </>
  );
}
