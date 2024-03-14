import Link from 'next/link';

type Props = {
  params: { text: string; link: string };
};

export default function YellowBtn({ params }: Props) {
  return (
    <Link href={params.link}>
      <button className="uppercase font-lato text-regular-gray text-lg rounded-full mt-8 py-4 px-12 bg-main-yellow hover:bg-white border border-solid border-main-yellow hover:border-white mr-4">
        {params.text}
      </button>
    </Link>
  );
}
