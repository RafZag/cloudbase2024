import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      content: {
        moreBlue: 'url("/svg/more_blue.svg")',
        moreGrey: 'url("/svg/more_grey.svg")',
      },
      backgroundImage: {
        'main-hero': "url('/jpg/main_hero.jpg')",
      },
      colors: {
        'very-light-gray': 'F3F3F3',
        'light-gray': '#9E9E9E',
        'regular-gray': '#474747',
        'dark-gray': '#252525',
        'main-yellow': '#ffd056',
        'main-blue': '#489DC9',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        saira: ['var(--font-saira)'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
