import Link from 'next/link';

type Props = {
  params: { text: string; link: string };
};

export default function LightGrayBtn({ params }: Props) {
  return (
    <Link href={params.link}>
      <button className="font-lato text-light-gray text-lg uppercase rounded-full border-solid border border-light-gray mt-8 mr-4 py-4 px-12 hover:bg-light-gray/20">
        {params.text}
      </button>
    </Link>
  );
}
