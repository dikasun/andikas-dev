import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "#FF8785",
        bittersweet: "#FF5E5B",
        tomato: "#FF4A47",
        maize: "#FFEC5C",
        aureolin: "#FFE733",
        "yellow-green": "#83CD29",
        emerald: "#30D97C",
        jade: "#32AE6A",
        "sky-blue": "#33D3FF",
        turquoise: "#00E0DD",
        "deep-sky-blue": "#47C5FB",
        "robin-egg-blue": "#00CECB",
        moonstone: "#0BA9C1",
        "cornflower-blue": "#6597E2",
        azure: "#417FDC",
        "violet-blue": "#2A4DB7",
        "medium-slate-blue": "#7F52FF",
        "cadet-gray": "#A5A9B6",
        "space-cadet": "#2A324B",
        charcoal: "#464C5D",
        "slate-gray": "#69728C",
        "cool-gray": "#969DB0",
        jet: "#2E3038",
        "raisin-black": "#26282E",
        "rich-black": "#101219",
        "ghost-white": "#F7F8FF",
        lavender: "#EBEFFF",
        "background-color": "#F1F4FF",
      },
      maxWidth: {
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
      },
      borderRadius: {
        "10": "10%",
        "25": "25%",
      },
    },
  },
  plugins: [],
};
export default config;
