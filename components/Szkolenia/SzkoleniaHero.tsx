import Link from 'next/link';
import YellowBtn from '../YellowBtn';
import WhiteBtn from '../WhiteBtn';

export default function SzkoleniaHero() {
  return (
    <section className="flex h-svh bg-cover bg-[url('/jpg/szkoleniaHero.jpg')] w-full bg-center">
      <div className="w-full h-full flex bg-[url('/png/clouds.png')] bg-contain bg-no-repeat bg-bottom">
        <div className="container mx-auto my-auto px-10 pt-20">
          <div className=" lg:ml-8">
            <h1 className="uppercase text-white font-saira text-7xl md:text-8xl lg:text-9xl drop-shadow-2xl">
              SZKOLENIA
            </h1>
            <YellowBtn params={{ text: 'Terminy', link: '/szkolenia/terminy' }} />
            <WhiteBtn params={{ text: 'Cennik', link: '/szkolenia/cennik' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
