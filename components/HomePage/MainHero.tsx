import WhiteBtn from '../WhiteBtn';

type Props = {
  params: { text: string; link: string };
};

export default function MainHero() {
  return (
    <section className="flex h-svh bg-cover bg-main-hero w-full bg-center">
      <div className="w-full h-full flex bg-[url('/png/clouds.png')] bg-contain bg-no-repeat bg-bottom">
        <div className="container mx-auto my-auto px-10 pt-20">
          <div className=" lg:ml-8">
            <h1 className="uppercase text-white font-saira text-6xl md:text-8xl lg:text-[9rem]  drop-shadow-2xl">
              Odważ się!
            </h1>
            <p className="text-white font-lato font-light text-xl pt-4 max-w-[34rem]">
              Jeśli trafiłeś tu ponieważ po głowie chodzi Ci pomysł, aby wznieść się w powietrze, to trafiłeś dobrze!
            </p>
            <WhiteBtn params={{ text: 'Zaczynamy!', link: '#' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
