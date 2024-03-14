import Link from 'next/link';

type Props = {
  params: { text: string; link: string };
};

export default function WhiteBtn({ params }: Props) {
  return (
    <Link href={params.link}>
      <button className="font-lato text-white text-lg uppercase rounded-full border-solid border border-white mt-8 mr-4 py-4 px-12 hover:bg-white/20">
        {params.text}
      </button>
    </Link>
  );
}
