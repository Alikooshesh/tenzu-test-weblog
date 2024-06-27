import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {
        center : true,
      },
      colors : {
        blog : {
          bg : {
            light : "#FFFFFF",
            dark : "#282c35"
          },
          pink : {
            light : "#feb3d7"
          },
          purple : {
            light : "#c2b7ff"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
