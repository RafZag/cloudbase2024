import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="bg-cover bg-dark-grey w-full bg-center ">
        <div className="container mx-auto px-10 py-32">
          <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8 px-8">
            <div className=" w-full ">
              <Link href="#" className="min-w-60">
                <h1 className="text-5xl xl:text-6xl text-regular-grey font-saira uppercase after:content-moreGrey after:inline-block after:w-11 after:ml-4 after:fill-regular-grey">
                  Kontakt
                </h1>
              </Link>
              <div className="font-lato text-light-gray text-sm pt-12 leading-7">
                <p>
                  <span className="text-white">Cloudbase Paralotnie Marek Mastalerz</span>
                  <br />
                  ul. Białobrzeska 4, 02-371 Warszawa
                </p>
                <p className="mt-6">
                  Szkolenia na wyciągarce: <br />
                  <span className="text-white">82 1090 1883 0000 0001 5331 3801 </span>
                  <br />
                  Cloudbase Paralotnie sp. z o. o.
                </p>
                <p className="mt-6">
                  Zakupy sprzętu, wyjazdy i szkolenia PPG: <br />
                  <span className="text-white"> 10 1140 2004 0000 3302 6289 3510</span> <br />
                  Cloudbase Paralotnie Marek Mastalerz
                </p>
              </div>
            </div>
            <div className="w-full lg:mt-24">
              <div className="font-lato text-light-gray text-sm leading-7 text-center">
                <p>
                  <strong>e-mail szkoły:</strong>
                  <br />
                  <Link href="mailto:info@cloudbase.pl" className="hover:text-white">
                    info@cloudbase.pl
                  </Link>
                </p>
                <p className="mt-6">
                  <strong>Marek Mastalerz</strong>
                  <br />
                  607 624 487 <br />
                  <Link href="mailto:marek.mastalerz@gmail.com" className="hover:text-white">
                    marek.mastalerz@gmail.com
                  </Link>
                </p>
                <p className="mt-6">
                  <strong>Adam Rdzanek</strong>
                  <br />
                  600 432 525
                </p>
              </div>
            </div>
            <div className="w-full ">
              <h1 className="text-5xl xl:text-6xl text-regular-grey font-saira uppercase">Newsletter</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
