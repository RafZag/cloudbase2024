import Link from 'next/link';
import Image from 'next/image';

export default function MainHero() {
  return (
    <section className="flex h-svh bg-cover bg-main-hero w-full bg-center">
      <div className="w-full h-full flex bg-[url('/png/clouds.png')] bg-contain bg-no-repeat bg-bottom">
        <div className="container mx-auto my-auto px-10 pt-20">
          <h1 className="uppercase text-white font-saira text-6xl md:text-8xl lg:text-[9rem] ml-8 drop-shadow-2xl">
            Odważ się!
          </h1>
          <p className="text-white font-lato font-light text-xl pt-4 max-w-[34rem] ml-8">
            Jeśli trafiłeś tu ponieważ po głowie chodzi Ci pomysł, aby wznieść się w powietrze, to trafiłeś dobrze!
          </p>
          <Link href="#">
            <button className="font-lato text-white text-lg rounded-full border-solid border border-white ml-8 mt-8 py-4 px-12 hover:bg-white/20">
              ZACZYNAMY!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
