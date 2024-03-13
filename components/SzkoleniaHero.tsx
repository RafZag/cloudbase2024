import Link from 'next/link';
import Image from 'next/image';

export default function SzkoleniaHero() {
  return (
    <section className="flex h-svh bg-cover bg-[url('/jpg/szkoleniaHero.jpg')] w-full bg-center">
      <div className="w-full h-full flex bg-[url('/png/clouds.png')] bg-contain bg-no-repeat bg-bottom">
        <div className="container mx-auto my-auto px-10 pt-20">
          <h1 className="uppercase text-white font-saira text-7xl md:text-8xl lg:text-9xl ml-8 drop-shadow-2xl">
            SZKOLENIA
          </h1>
          <Link href="/about">
            <button className="uppercase font-lato text-regular-gray text-lg rounded-full ml-8 mt-8 py-4 px-12 bg-main-yellow hover:bg-white border border-solid border-main-yellow hover:border-white mr-6">
              Terminy
            </button>
          </Link>
          <Link href="#">
            <button className="font-lato text-white text-lg uppercase rounded-full border-solid border border-white mt-8 py-4 px-12 hover:bg-white/20">
              Cennik
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
