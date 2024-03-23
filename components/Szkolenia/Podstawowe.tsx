import { FaUpRightFromSquare } from 'react-icons/fa6';
import Link from 'next/link';

export default function PodstawowePage() {
  return (
    <section className="bg-white w-full">
      <div className="text-center container mx-auto pt-10 pb-20 px-8 lg:w-2/3">
        <h1 className=" text-5xl xl:text-6xl text-main-blue font-saira uppercase pb-8">Szkolenia podstawowe</h1>
        <p className="text-lg text-regular-gray font-lato font-regular leading-8">
          Jeśli chcesz zacząć przygodę z lataniem na paralotni, to musisz zacząć od podstaw. <br />
          Szkolenie podstawowe jestrozłożone na dwa etapy i przygotowuje adepta sztuki latania do egzaminu na
          uprawnienia pozwalające samodzielnie latać.
        </p>
      </div>
      <div className="container mx-auto px-10 pt-8 pb-24">
        <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8">
          <div className="w-full">
            <div className="bg-[url('/jpg/etap1.jpg')] aspect-square bg-cover">
              <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                  <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Etap 1</h1>
                </div>
              </div>
            </div>
            <div className="py-12 lg:px-8">
              <h3 className="text-2xl font-lato text-main-blue pb-4">Podstawy</h3>
              <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                Najważniejsze są podstawy. Dokładamy wszelkich starań aby każdy nasz uczeń stawiał swoje pierwsze
                paralotniowe kroki w bezpiecznych warunkach, i żeby te kroki sprawiały mu jak najwięcej frajdy.
              </p>
              <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                <span>Czytaj dalej</span>
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[url('/jpg/etap2.jpg')] aspect-square bg-cover">
              <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                  <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Etap 2</h1>
                </div>
              </div>
            </div>
            <div className="py-12 lg:px-8">
              <h3 className="text-2xl font-lato text-main-blue pb-4">Loty swobodne</h3>
              <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                Drugi etap szkolenia wyniesie Was na wyższy poziom lotów i umiejętności technicznych. W ramach Etapu 2
                szkolenia w lotach swobodnych uczeń wykonuje 20 lotów ze startem za wyciągarką do maksymalnej wysokości
                500 metrów.
              </p>
              <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                <span>Czytaj dalej</span>
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[url('/jpg/etap2ppg.jpg')] aspect-square bg-cover">
              <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                  <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Etap 2 - ppg</h1>
                </div>
              </div>
            </div>
            <div className="py-12 lg:px-8">
              <h3 className="text-2xl font-lato text-main-blue pb-4">Loty z napędem PPG</h3>
              <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                Chcąc być niezależnym od górek czy wyciągarek warto pomyśleć o własnym silniku i śmigle. Jeżeli uczeń
                nastawia się wyłącznie na latanie z napędem, to możliwe jest obranie drogi szkolenia nastawionej na ten
                rodzaj latania już po ukończeniu szkolenia z zakresu 1 Etapu.
              </p>
              <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                <span>Czytaj dalej</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
