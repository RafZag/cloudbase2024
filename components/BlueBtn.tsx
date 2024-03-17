import Link from 'next/link';

type Props = {
  params: { text: string; link: string };
};

export default function BlueBtn({ params }: Props) {
  return (
    <Link href={params.link}>
      <button className="uppercase font-lato text-white text-lg rounded-full mt-8 py-4 px-12 bg-main-blue hover:bg-light-gray border border-solid border-main-blue hover:border-light-gray mr-4">
        {params.text}
      </button>
    </Link>
  );
}
