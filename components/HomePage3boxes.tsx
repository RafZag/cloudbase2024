import Link from 'next/link';
import Image from 'next/image';

export default function HomePage3boxes() {
  return (
    <section className="container mx-auto px-10 pt-8 pb-24">
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
          <div className="py-8 pl-14 font-lato text-regular-gray leading-10 text-lg">
            <ul className="list-image-[url('/svg/bullet.svg')] ">
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Jak zacząć?
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Kalendarz zajęć
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Cennik szkoleń
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
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
          <div className="py-8 pl-14 font-lato text-regular-gray leading-10 text-lg">
            <ul className="list-image-[url('/svg/bullet.svg')] ">
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Kalendarz wyjazdów
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Cennik wyjazdów
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Poziomy zaawansowania
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
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
          <div className="py-8 pl-14 font-lato text-regular-gray leading-10 text-lg">
            <ul className="list-image-[url('/svg/bullet.svg')] ">
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Dostępne marki
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  Zamówienia
                </Link>
              </li>
              <li className="pl-2">
                <Link href="#" className="hover:text-regular-gray/50">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
