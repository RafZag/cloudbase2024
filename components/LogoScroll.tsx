import Image from 'next/image';

const LogoScroll = () => {
  return (
    <>
      <div className="w-full inline-flex flex-nowrap pt-12">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src="/png/logos/ozone.png" alt="ozone logo" width={125} height={63}></Image>
          </li>
          <li>
            <Image src="/png/logos/nova.png" alt="nova logo" width={137} height={63}></Image>
          </li>
          <li>
            <Image src="/png/logos/niviuk.png" alt="niviuk logo" width={253} height={40}></Image>
          </li>
          <li>
            <Image src="/png/logos/ad.png" alt="ad logo" width={153} height={69}></Image>
          </li>
          <li>
            <Image src="/png/logos/777.png" alt="777 logo" width={282} height={54}></Image>
          </li>
          <li>
            <Image src="/png/logos/dudek.png" alt="dudek logo" width={129} height={84}></Image>
          </li>
          <li>
            <Image src="/png/logos/gin.png" alt="gin logo" width={256} height={56}></Image>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image src="/png/logos/ozone.png" alt="ozone logo" width={125} height={63}></Image>
          </li>
          <li>
            <Image src="/png/logos/nova.png" alt="nova logo" width={137} height={63}></Image>
          </li>
          <li>
            <Image src="/png/logos/niviuk.png" alt="niviuk logo" width={253} height={40}></Image>
          </li>
          <li>
            <Image src="/png/logos/ad.png" alt="ad logo" width={153} height={69}></Image>
          </li>
          <li>
            <Image src="/png/logos/777.png" alt="777 logo" width={282} height={54}></Image>
          </li>
          <li>
            <Image src="/png/logos/dudek.png" alt="dudek logo" width={129} height={84}></Image>
          </li>
          <li>
            <Image src="/png/logos/gin.png" alt="gin logo" width={256} height={56}></Image>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LogoScroll;
