import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-cover bg-[url('/jpg/onas_bg.jpg')] w-full bg-center">
      <div className="container mx-auto px-10 py-32">
        <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8">
          <div className="w-full lg:w-2/3 px-2 my-auto content-center pl-8">
            <h1 className="text-5xl xl:text-6xl text-white font-saira uppercase pb-8">O nas</h1>
            <p className="text-lg text-white font-lato font-light leading-8">
              Zajmujemy się szkoleniem pilotów paralotniowych chcących latać swobodnie i z napędem, a także podnoszeniem
              ich umiejętności na wyższy poziom, aż do chmur. Organizujemy również wyjazdy paralotniowe, podczas których
              polatasz w pięknych miejscach i ciekawie spędzisz wolny czas w świetnej atmosferze.{' '}
            </p>
            <Link href="/about">
              <button className="uppercase font-lato text-regular-gray text-lg rounded-full mt-8 py-4 px-12 bg-main-yellow hover:bg-white border border-solid border-main-yellow hover:border-white mr-4">
                Więcej o nas
              </button>
            </Link>
            <Link href="/contact">
              <button className="uppercase font-lato text-white text-lg rounded-full border-solid border border-white mt-8 py-4 px-12 hover:bg-white/20">
                Kontakt
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/3 bg-cover aspect-square bg-[url('/jpg/mm.jpg')] drop-shadow-xl order-first lg:order-last"></div>
        </div>
      </div>
    </section>
  );
}
