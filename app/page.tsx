import Link from 'next/link';
import { teko } from './fonts';

export default function HomePage() {
  return (
    <>
      <h1 className={teko.className}>My page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas saepe quasi nam! Aspernatur doloremque dolorum ducimus, exercitationem
        asperiores facere voluptatum.
      </p>
    </>
  );
}
