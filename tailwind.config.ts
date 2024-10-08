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
        'mobile-lg': '500px',
        'tablet': '768px',
        'laptop': '960px',

        // TODO: fix names (make them [section]-[size] e.g projects-sm) so names & sizing match
        // Misc. sizing for responsive elements 
        '875px': '887px',
        '1030px': '1030px',
        '920px': '920px',
        '650px': '700px',
        '585px': '585px',
        'skills-mobile': '700px',
        'project-tablet': '855px',
        'project-grid': '855px',
        'aboutme-tablet': '920px',
        'contact-tablet': '875px',
      },
    },
  },
  plugins: [],
};
export default config;
