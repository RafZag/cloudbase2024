import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className="absolute w-full">
        <nav className="container top-0 mx-auto px-10 pt-12 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image src="cloudbase_logo.svg" alt="cloudbase logo" width={230} height={65} />
              </Link>
            </div>
            <div className="hidden lg:flex space-x-8 xl:space-x-14 font-lato text-lg text-main-blue">
              <Link href="#" className="uppercase hover:text-main-yellow">
                Wyjazdy
              </Link>
              <Link href="#" className="uppercase hover:text-main-yellow">
                Szkolenia
              </Link>
              <Link href="#" className="uppercase hover:text-main-yellow">
                Sprzęt
              </Link>
              <Link href="#" className="uppercase hover:text-main-yellow">
                Blog
              </Link>
              <Link href="#" className="uppercase hover:text-main-yellow">
                O nas
              </Link>
              <Link href="#" className="uppercase hover:text-main-yellow">
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex h-svh bg-cover bg-main-hero w-full bg-center">
        <div className="container mx-auto my-auto px-10 pt-20">
          <h1 className="uppercase text-white font-saira text-7xl md:text-[9rem]">Odważ się!</h1>
          <p className="text-white font-lato font-light text-xl pt-4 max-w-[34rem]">
            Jeśli trafiłeś tu ponieważ po głowie chodzi Ci pomysł, aby wznieść się w powietrze, to trafiłeś dobrze!
          </p>
          <button className="font-lato text-white text-lg rounded-full border-solid border border-white mt-8 py-4 px-12 hover:bg-white/20">
            ZACZYNAMY!
          </button>
        </div>
      </div>
      <div className="container mx-auto px-10 pt-8 pb-24">
        <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8">
          {/* Szkolenia */}
          <div className="bg-main-yellow w-full drop-shadow-xl">
            <Link href="#">
              <div className="bg-[url('/jpg/szkolenia.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Szkolenia</h1>
                    <Image src="/svg/more_wh.svg" alt="cloudbase logo" width={45} height={45}></Image>
                  </div>
                </div>
              </div>
            </Link>
            <div className="py-8 pl-14 font-lato text-regular-grey leading-10 text-lg">
              <ul className="list-image-[url('/svg/bullet.svg')] ">
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Jak zacząć?
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Kalendarz zajęć
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Cennik szkoleń
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Przydatna wiedza
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Wyjazdy */}
          <div className="bg-main-yellow w-full drop-shadow-xl">
            <Link href="#">
              <div className="bg-[url('/jpg/wyjazdy.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Wyjazdy</h1>
                    <Image src="/svg/more_wh.svg" alt="cloudbase logo" width={45} height={45}></Image>
                  </div>
                </div>
              </div>
            </Link>
            <div className="py-8 pl-14 font-lato text-regular-grey leading-10 text-lg">
              <ul className="list-image-[url('/svg/bullet.svg')] ">
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Kalendarz wyjazdów
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Cennik wyjazdów
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Poziomy zaawansowania
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Destynacje
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Sprzęt */}
          <div className="bg-main-yellow w-full drop-shadow-xl">
            <Link href="#">
              <div className="bg-[url('/jpg/sprzet.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Sprzęt</h1>
                    <Image src="/svg/more_wh.svg" alt="cloudbase logo" width={45} height={45}></Image>
                  </div>
                </div>
              </div>
            </Link>
            <div className="py-8 pl-14 font-lato text-regular-grey leading-10 text-lg">
              <ul className="list-image-[url('/svg/bullet.svg')] ">
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Dostępne marki
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    Zamówienia
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href="#" className="hover:text-regular-grey/50">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-[url('/jpg/onas_bg.jpg')] w-full bg-center">
        <div className="container mx-auto px-10 py-32">
          <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8">
            <div className="w-full lg:w-2/3 px-2 my-auto content-center">
              <h1 className="text-5xl xl:text-6xl text-white font-saira uppercase pb-8">O nas</h1>
              <p className="text-lg text-white font-lato font-light leading-8">
                Zajmujemy się szkoleniem pilotów paralotniowych chcących latać swobodnie i z napędem, a także
                podnoszeniem ich umiejętności na wyższy poziom, aż do chmur. Organizujemy również wyjazdy paralotniowe,
                podczas których polatasz w pięknych miejscach i ciekawie spędzisz wolny czas w świetnej atmosferze.{' '}
              </p>
              <button className="uppercase font-lato text-regular-grey text-lg rounded-full mt-8 py-4 px-12 bg-main-yellow hover:bg-white border border-solid border-main-yellow hover:border-white mr-4">
                Więcej o nas
              </button>{' '}
              <button className="uppercase font-lato text-white text-lg rounded-full border-solid border border-white mt-8 py-4 px-12 hover:bg-white/20">
                Kontakt
              </button>
            </div>
            <div className="w-1/3 bg-cover aspect-square bg-[url('/jpg/mm.jpg')] drop-shadow-xl hidden lg:flex">
              {/* <Image src="/jpg/mm.jpg" alt="Magda i Marek" width={380} height={380}></Image> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
