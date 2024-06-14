import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        'grid1': '75%',
        'grid2': '90%',
        'grid3': '95%',
        'grid4': '90%',
        'grid5': '100%',
        'grid6': '90%'
      },
      // TODO: create screen widths for mobile and tablet responsiveness 
      screens: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        // mobile-lg 425px
        'mobile-lg': '960px',
        'tablet': '768px',
        'laptop': '960px',

        // Misc. sizing for responsive elements 
        '875px': '887px',
        '1015px': '1030px'
      },
    },
  },
  plugins: [],
};
export default config;
