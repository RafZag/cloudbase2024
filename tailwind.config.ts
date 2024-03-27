import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1537px',
        // => @media (min-width: 1536px) { ... }
      },
      content: {
        moreBlue: 'url("/svg/more_blue.svg")',
        moreGrey: 'url("/svg/more_grey.svg")',
      },
      backgroundImage: {
        'main-hero': "url('/jpg/main_hero.jpg')",
      },
      colors: {
        'very-light-gray': '#F3F3F3',
        'light-gray': '#9E9E9E',
        'regular-gray': '#474747',
        'dark-gray': '#252525',
        'main-yellow': '#FFD056',
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
