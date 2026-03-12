import type { Config } from "tailwindcss";
import vivanceTailwindPreset from "./tailwind.preset";

const config: Config = {
  presets: [vivanceTailwindPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
