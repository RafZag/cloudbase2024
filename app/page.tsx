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
            <div className="hidden lg:flex space-x-8 xl:space-x-14 font-space text-lg text-main-blue">
              <Link href="#" className="uppercase hover:text-regular-grey">
                Wyjazdy
              </Link>
              <Link href="#" className="uppercase hover:text-regular-grey">
                Szkolenia
              </Link>
              <Link href="#" className="uppercase hover:text-regular-grey">
                Sprzęt
              </Link>
              <Link href="#" className="uppercase hover:text-regular-grey">
                Wyjazdy
              </Link>
              <Link href="#" className="uppercase hover:text-regular-grey">
                O nas
              </Link>
              <Link href="#" className="uppercase hover:text-regular-grey">
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex h-svh bg-cover bg-main-hero w-full bg-center">
        <div className="container mx-auto my-auto px-10">
          <h1 className="uppercase text-white font-teko text-7xl md:text-9xl">Odważ się!</h1>
          <p className="text-white font-space text-xl pt-4 w-[34rem]">
            Jeśli trafiłeś tu ponieważ po głowie chodzi Ci pomysł, aby wznieść się w powietrze, to trafiłeś dobrze!
          </p>
          <button className="font-space text-white text-lg rounded-full border-solid border border-white mt-8 py-4 px-12 hover:bg-white/20">
            ZACZYNAMY!
          </button>
        </div>
      </div>
      <div className="h-svh container mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa voluptatem esse praesentium deleniti
        molestiae, fuga laudantium consectetur perspiciatis sed aliquam eligendi! Maiores deleniti obcaecati est tenetur
        perferendis doloremque assumenda ratione? Perferendis nesciunt ad eum sequi. Sequi eos, numquam dolorem nam in
        harum fuga doloremque! Est, molestiae nemo deserunt fugit tempora quae odit quod ullam alias error in quaerat
        dolorum nesciunt ut aliquid libero. Eveniet inventore, aliquam natus quaerat minima fuga non dolores nulla, nisi
        ipsam numquam voluptates optio, doloribus dolorem officiis veritatis tempore. Unde suscipit voluptates nihil
        quaerat atque expedita debitis fuga. Officiis fugiat reiciendis beatae sapiente consectetur obcaecati, error qui
        dolorem fuga ullam? Molestias nam numquam obcaecati qui quo accusantium consequatur provident repellat? Incidunt
        beatae facilis quae impedit sapiente pariatur dolore, molestiae, voluptatibus minima nisi suscipit a quam.
        Distinctio accusantium veritatis iste odit harum eum aut porro nesciunt magnam ullam nam alias, repellat dicta
        non labore molestiae laboriosam dolorum qui exercitationem laborum. Ea recusandae quas voluptatum molestiae
        autem praesentium iste ut reiciendis? Possimus architecto, consectetur totam voluptatibus quam eligendi magni,
        dolor delectus asperiores sit velit quia! Dolor ea fuga qui delectus impedit? Corporis non facilis excepturi
        modi fugiat repellat ducimus possimus eveniet! Iste repellendus fugiat quo nisi culpa!
      </div>
    </>
  );
}
