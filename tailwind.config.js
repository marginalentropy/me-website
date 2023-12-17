import tailWindCssTypography from '@tailwindcss/typography';
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailWindCssTypography, daisyui],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ["light"],
  },
}

