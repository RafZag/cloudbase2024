import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-hero': "url('/jpg/main_hero.jpg')",
      },
      colors: {
        'regular-grey': '#474747',
        'dark-grey': '#252525',
        'main-yellow': '#ffd056',
        'main-blue': '#489DC9',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        saira: ['var(--font-saira)'],
      },
    },
  },
  plugins: [],
};
export default config;
