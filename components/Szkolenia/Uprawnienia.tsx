import { FaRegAddressCard } from 'react-icons/fa';
import Link from 'next/link';

export default function UprawnieniaPage() {
  return (
    <section className="bg-neutral-100 w-full">
      <div className="container mx-auto px-10 md:px-16 pb-24">
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
  );
}
