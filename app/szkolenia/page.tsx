import Navbar from '@/components/Navbar';
import SzkoleniaHero from '@/components/Szkolenia/SzkoleniaHero';
import Link from 'next/link';
import { FaUpRightFromSquare } from 'react-icons/fa6';
import { FaRegAddressCard } from 'react-icons/fa';
import BlueBtn from '@/components/BlueBtn';
import LightGrayBtn from '@/components/LightGrayBtn';

type Props = {
  params: { color: string };
};

export default function szkoleniaPage() {
  return (
    <>
      <Navbar params={{ color: 'white' }} />
      <SzkoleniaHero />

      <section className="bg-white w-full">
        <div className="text-center container mx-auto pt-10 pb-20 px-8 w-2/3">
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
                  szkolenia w lotach swobodnych uczeń wykonuje 20 lotów ze startem za wyciągarką do maksymalnej
                  wysokości 500 metrów.
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
                  nastawia się wyłącznie na latanie z napędem, to możliwe jest obranie drogi szkolenia nastawionej na
                  ten rodzaj latania już po ukończeniu szkolenia z zakresu 1 Etapu.
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
      <section className="bg-neutral-100 w-full">
        <div className="text-center container mx-auto pt-20 pb-20 px-8 w-2/3">
          <h1 className=" text-5xl xl:text-6xl text-main-blue font-saira uppercase pb-8">Szkolenia doszkalające</h1>
          <p className="text-lg text-regular-gray font-lato font-regular leading-8">
            Świadectwo kwalifikacji pilota to dopiero początek nauki i nawet najbardziej doświadczeni piloci mówią, że
            latać uczą się przez całe życie. Oferujemy szeroką paletę szkoleń doskonalących zarówno w lotach swobodnych
            w górach i na wyciągarce, a także w lotach z napędem (PPG).
          </p>
          <p className="text-lg text-regular-gray font-lato font-regular leading-8 pt-6">
            Szkolenia na wyciągarce prowadzimy najczęściej w <strong className="text-main-blue">Brzeskiej Woli.</strong>{' '}
            Szkolenia w górach prowadzimy głównie w{' '}
            <strong className="text-main-blue">Słowenii, Włoszech, Francji i Hiszpanii</strong>.
          </p>
        </div>
        <div className="container mx-auto px-10 pt-8 pb-24">
          <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8">
            <div className="w-full">
              <div className="bg-[url('/jpg/etap3.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Etap 3</h1>
                  </div>
                </div>
              </div>
              <div className="py-12 lg:px-8">
                <h3 className="text-2xl font-lato text-main-blue pb-4">Loty termiczne i żaglowe</h3>
                <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                  Latanie przy wykorzystaniu noszeń termicznych i noszeń zboczowych (żagla) jest kwintesencją latania
                  swobodnego i pozwala na wykonywanie długich i dalekich lotów. Jeśli chcesz doskonalić się w lataniu
                  bez silnika, niesiony tylko siłami natury, to zapraszamy do szkolenia w lotach termicznych i
                  żaglowych.
                </p>
                <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                  <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                  <span>Czytaj dalej</span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[url('/jpg/xc.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">XC</h1>
                  </div>
                </div>
              </div>
              <div className="py-12 lg:px-8">
                <h3 className="text-2xl font-lato text-main-blue pb-4">Przeloty</h3>
                <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                  Latanie przelotów czyli pokonywanie większych dystansów jest dla wielu pilotów kwintesencją latania
                  swobodnego. Wymaga poznania, zrozumienia i wykorzystania sił natury, czytania terenu, myślenia
                  strategicznego. Nie jest to proste i wymaga wielu godzin praktyki.
                </p>
                <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                  <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                  <span>Czytaj dalej</span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[url('/jpg/tandem.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">Tandem</h1>
                  </div>
                </div>
              </div>
              <div className="py-12 lg:px-8">
                <h3 className="text-2xl font-lato text-main-blue pb-4">Pilot tandemu</h3>
                <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                  Jeśli latanie w pojedynkę masz już bardzo dobrze opanowane możesz nauczyć się jak bezpiecznie
                  wykonywać loty z pasażerem. Dzięki wiedzy i umiejętnościom zdobytym podczas tego szkolenia będziesz
                  mógł dzielić przyjemność latania z bliskimi i przyjaciółmi.
                </p>
                <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                  <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                  <span>Czytaj dalej</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-10 pt-8 pb-24">
          <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8">
            <div className="w-full">
              <div className="bg-[url('/jpg/h.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">H</h1>
                  </div>
                </div>
              </div>
              <div className="py-12 lg:px-8">
                <h3 className="text-2xl font-lato text-main-blue pb-4">Start za wyciągarką</h3>
                <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                  Jeśli masz doświadczenie z latania wyłącznie w górach, a chcesz polatać na nizinach startując z
                  wyciągarki mamy dla ciebie szkolenie, na którym zapoznasz się z tą formą startu w bezpieczny sposób.
                </p>
                <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                  <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                  <span>Czytaj dalej</span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[url('/jpg/ks.jpg')] aspect-square bg-cover">
                <div className="relative h-full bg-gradient-to-t from-black/70 to-black/0 to-50%">
                  <div className="w-full absolute px-10 bottom-10 flex justify-between align-middle">
                    <h1 className="uppercase text-white font-saira text-5xl xl:text-6xl">KS</h1>
                  </div>
                </div>
              </div>
              <div className="py-12 lg:px-8">
                <h3 className="text-2xl font-lato text-main-blue pb-4">Kierownik startu</h3>
                <p className="text-lg text-regular-gray font-lato font-regular leading-8">
                  Kierowanie startami paralotni holowanych przez wyciągarkę pociąga za sobą dużą odpowiedzialność i
                  wymaga umiejętności podejmowania szybkich i prawidłowych decyzji. Jeśli jesteś gotów podjąć się tego
                  wyzwania my wyszkolimy Cię do pełnienia funkcji Kierownika Startu zapoznając z wszystkimi szczegółami
                  tej techniki startu.
                </p>
                <Link href="#">
                  <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                    <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                    <span>Czytaj dalej</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full">
              <div className="py-12 lg:px-8">
                <p className="text-lg text-center text-regular-gray font-lato font-regular leading-8">
                  W sprawie szkoleń zapraszamy do kontaktu pod numerem telefonu:{' '}
                  <strong className="text-main-blue">607&nbsp;624&nbsp;487</strong> <br />
                  lub poprzez e-mail: <br />
                  <Link href="mailto:info@cloudbase.pl" target="_blank">
                    <strong className="text-main-blue hover:text-main-blue/40">info@cloudbase.pl</strong>
                  </Link>
                </p>
                <div className=" flex flex-wrap place-content-center mx-auto">
                  <BlueBtn params={{ text: 'TERMINY SZKOLEŃ', link: 'szkolenia/terminy' }} />
                  <LightGrayBtn params={{ text: 'CENNIK SZKOLEŃ', link: 'szkolenia/cennik' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 w-full">
        <div className="container mx-auto px-16 pb-24">
          <div className="bg-main-blue drop-shadow-xl p-8">
            <h1 className=" text-5xl xl:text-6xl text-white font-saira uppercase pb-8 text-center">
              Uprawnienia pilota paralotni
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 px-10 gap-8">
              <div className="flex items-center p-4 font-lato text-lg text-white">
                <FaRegAddressCard className="text-4xl mr-4" />
                <Link href="#" className="hover:text-main-yellow">
                  Jak zdobyć licencję pilota
                </Link>
              </div>
              <div className="flex items-center p-4 font-lato text-lg text-white">
                <FaRegAddressCard className="text-4xl mr-4" />
                <Link href="#" className="hover:text-main-yellow">
                  Uprawnienia podstawowe
                </Link>
              </div>
              <div className="flex items-center p-4 font-lato text-lg text-white">
                <FaRegAddressCard className="text-4xl mr-4" />
                <Link href="#" className="hover:text-main-yellow">
                  Uprawnienia dodatkowe
                </Link>
              </div>{' '}
              <div className="flex items-center p-4 font-lato text-lg text-white">
                <FaRegAddressCard className="text-4xl mr-4" />
                <Link href="#" className="hover:text-main-yellow">
                  Egzaminy na uprawnienia
                </Link>
              </div>
              <div className="flex items-center p-4 font-lato text-lg text-white">
                <FaRegAddressCard className="text-4xl mr-4" />
                <Link href="#" className="hover:text-main-yellow">
                  Zaświadczenie o przeszkoleniu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
