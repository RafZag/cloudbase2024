import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="bg-cover bg-dark-gray w-full bg-center ">
        <div className="container mx-auto px-10 py-24">
          <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8 px-8">
            <div className=" w-full ">
              <Link href="#" className="min-w-60">
                <h1 className="text-5xl xl:text-6xl text-regular-gray font-saira uppercase after:content-moreGrey after:inline-block after:w-11 after:ml-4 after:fill-regular-gray">
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
              <div className="font-lato text-light-gray text-sm leading-7">
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
              <h1 className="text-5xl xl:text-6xl text-regular-gray font-saira uppercase">Newsletter</h1>
              <div className="pt-12">
                <form>
                  <input
                    type="text"
                    id="email"
                    placeholder="e-mail"
                    className="bg-dark-gray text-sm font-lato text-light-gray rounded-full border border-regular-gray px-4 py-2 focus:outline-none mr-4"
                  ></input>
                  <input
                    type="submit"
                    value="Wyślij"
                    className="font-lato text-sm text-light-gray uppercase bg-regular-gray rounded-full px-4 py-2 cursor-pointer hover:bg-light-gray hover:text-regular-gray"
                  ></input>
                </form>
                <p className="font-lato text-md text-regular-gray text-sm mt-4">
                  *Rejestrując się, wyrażasz zgodę na otrzymywanie
                  <br />
                  newslettera i materiałów promocyjnych.
                </p>
              </div>
              <div className="pt-12">
                <p className="font-lato text-sm text-light-gray">Zapraszamy do naszych mediów społecznościowych:</p>
                <div className="w-full flex gap-6 mt-6">
                  <Link href="https://www.instagram.com/cloudbase_paralotnie/" target="_blank">
                    <Image src="/png/insta.png" alt="instagram" width={30} height={30}></Image>
                  </Link>
                  <Link href="https://www.youtube.com/@MarekMastalerz" target="_blank">
                    <Image src="/png/yt.png" alt="youtube" width={30} height={30}></Image>
                  </Link>
                  <Link href="https://www.facebook.com/cloudbaseparalotnie" target="_blank">
                    <Image src="/png/fb.png" alt="facebook" width={30} height={30}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative border-t mt-8 mx-8 border-regular-gray flex justify-center bg-dark-gray pb-12">
            <span className="justify-self-start font-lato text-sm text-regular-gray absolute left-0 pt-4">
              © All Rights Reserved - Cloudbase Paralotnie
            </span>
            <div className="hidden -top-20 absolute lg:block bg-dark-gray ">
              <Image src="/png/cloud_logo.png" alt="cloud logo" width={120} height={170}></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
