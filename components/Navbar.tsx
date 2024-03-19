'use client';

import Link from 'next/link';
import LogoSVG from './LogoSVG';

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
                {params.color === 'white' ? (
                  <LogoSVG className={`fill-white`} />
                ) : (
                  <LogoSVG className={`fill-main-blue`} />
                )}
              </Link>
            </div>
            <div className={`hidden lg:flex space-x-8 xl:space-x-14 font-lato text-lg text-${params.color}`}>
              <Link href="/wyjazdy" className={`uppercase hover:text-${params.color}/60`}>
                Wyjazdy
              </Link>
              <Link href="/szkolenia" className={`uppercase hover:text-${params.color}/60`}>
                Szkolenia
              </Link>
              <Link href="/sprzet" className={`uppercase hover:text-${params.color}/60`}>
                Sprzęt
              </Link>
              <Link href="/blog" className={`uppercase hover:text-${params.color}/60`}>
                Blog
              </Link>
              <Link href="/onas" className={`uppercase hover:text-${params.color}/60`}>
                O nas
              </Link>
              <Link href="/kontakt" className={`uppercase hover:text-${params.color}/60`}>
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
