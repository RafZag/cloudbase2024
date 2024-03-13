import Link from 'next/link';
import LogoScroll from './LogoScroll';

export default function HomePageEquipment() {
  return (
    <div className="bg-cover bg-main-yellow w-full bg-center py-20">
      <div className="container mx-auto px-10 ">
        <div className="flex items-center flex-wrap lg:flex-nowrap pl-8">
          <Link href="#" className="min-w-60">
            <h1 className="text-5xl xl:text-6xl text-regular-gray font-saira uppercase after:content-moreGrey after:inline-block after:w-11 after:ml-4 after:fill-regular-gray">
              Sprzęt
            </h1>
          </Link>
          <p className="pt-4 lg:pt-0 text-lg text-regular-gray font-lato font-regular leading-2">
            Szczegółowych informacji dotyczących sprzętu, cen i dostępności uzyskacie dzwoniąc do nas na numer:{' '}
            <strong>607&nbsp;624&nbsp;487</strong> lub pisząc:{' '}
            <Link href="mailto:info@cloudbase.pl" className="hover:text-dark-gray/50" target="_blank">
              <strong>info@cloudbase.pl</strong>
            </Link>
          </p>
        </div>
      </div>
      <LogoScroll />
    </div>
  );
}
