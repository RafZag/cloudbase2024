// 'use client';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: { color: string };
};

export default function Navbar({ params }: Props) {
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
            <div className={`hidden lg:flex space-x-8 xl:space-x-14 font-lato text-lg text-${params.color}`}>
              <Link href="#" className={`uppercase hover:text-${params.color}/40`}>
                Wyjazdy
              </Link>
              <Link href="#" className={`uppercase hover:text-${params.color}/40`}>
                Szkolenia
              </Link>
              <Link href="#" className={`uppercase hover:text-${params.color}/40`}>
                Sprzęt
              </Link>
              <Link href="#" className={`uppercase hover:text-${params.color}/40`}>
                Blog
              </Link>
              <Link href="#" className={`uppercase hover:text-${params.color}/40`}>
                O nas
              </Link>
              <Link href="#" className={`uppercase hover:text-${params.color}/40`}>
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
