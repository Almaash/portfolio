import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"; // Import instead of require

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animate], // Use imported plugin
};

export default config;
