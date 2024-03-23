import Navbar from '@/components/Navbar';
import MainHero from '@/components/HomePage/MainHero';
import About from '@/components/HomePage/About';
import HomePage3boxes from '@/components/HomePage/HomePage3boxes';
import HomePageBlogpost from '@/components/HomePage/HomePageBlogpost';
import HomePageEquipment from '@/components/HomePage/HomePageEquipment';

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
