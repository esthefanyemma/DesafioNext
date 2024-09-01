import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'md': '768px',
        'lg': '1280px',
        'xl': '1920px',
        '2xl': '2560px',
        '3xl': '3440px'
      },
      colors: {
        'azul': '#0770A8',
        roxo: {
          'escuro': '#0F021B',
          'medio': '#2F015B',
          'claro': '#BD78FF'
        },
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        antonio: ['Antonio', 'sans-serif'],
        anybody: ['Anybody', 'sans-serif']
      },
      dropShadow: {
        'roxinho': '0 0 30px rgba(189,120,255,1)'
      }
    },
  },
  plugins: [],
};
export default config;
