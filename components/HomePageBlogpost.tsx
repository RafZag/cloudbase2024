import Link from 'next/link';
import Image from 'next/image';
import { FaUpRightFromSquare } from 'react-icons/fa6';

export default function HomePageBlogpost() {
  return (
    <section className="bg-cover bg-[url('/jpg/blog_bg.jpg')] w-full bg-center">
      <div className="container mx-auto px-10 py-32">
        <div className="flex w-full content-center gap-4 mb-8 pl-8">
          <Link href="#">
            <h1 className="text-5xl xl:text-6xl text-main-blue font-saira uppercase after:content-moreBlue after:inline-block after:w-11 after:ml-4">
              BLOG
            </h1>
          </Link>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mx-auto gap-8">
          <div className="w-full lg:w-1/2 drop-shadow-xl">
            <Image
              src="/jpg/blogPost_img.jpg"
              alt="blog post image"
              layout="responsive"
              width={600}
              height={375}
            ></Image>
          </div>
          <div className="w-full lg:w-1/2 px-8 my-auto content-center">
            <h2 className="text-2xl text-main-blue font-lato font-semibold mb-2">Test uprzęży Dudek TECHNO 2023</h2>
            <p className="text-lg text-regular-gray font-lato font-regular leading-8">
              Podczas niedawnego pobytu w Kolumbii polatałem kilka dni na nowej uprzęży Dudek TECHNO 2023. Chciałbym
              podzielić się wrażeniami na temat tej uprzęży ponieważ jest czym się dzielić. TECHNO 2023 to lekka uprząż
              (ok. 1,96-2,0 kg w rozmiarze M) z kokonem i płetwą za plecami pilota. Wersja 2023 to kolejna trzecia już
              odsłona tej serii uprzęży, do tego znacznie lżejsza od poprzedniej wersji.
            </p>
            <div>
              <button className="uppercase font-lato text-main-blue text-lg pt-4 hover:text-main-blue/60 ">
                <FaUpRightFromSquare className="mr-2 mb-2 inline" />
                <span>Czytaj dalej</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
