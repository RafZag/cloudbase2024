import type { Metadata } from 'next';
import { Lato, Saira_Condensed } from 'next/font/google';
import './globals.css';

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});
const saira = Saira_Condensed({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-saira',
});

export const metadata: Metadata = {
  title: 'Cloudbase Paralotnie',
  description: 'Szkoła paralotniowa Cloudbase',
  keywords:
    'paralotnie, szkoła paralotniowa, wyjazdy paralotniowe, wyprawy paralotniowe, sprzęt paralotniowy, szkolenia, paralotniowe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${lato.variable} ${saira.variable}`}>{children}</body>
    </html>
  );
}
