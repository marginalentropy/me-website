import tailWindCssTypography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailWindCssTypography, daisyui],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#AD3623",
          "primary-content": "#ffffff",
          secondary: "#448FEB",
          "secondary-content": "#ffffff",
          accent: "#9ca3af",
          neutral: "#e5e7eb",
          "neutral-content": "#333333",
          "base-100": "#ffffff",
          info: "#00ffff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ffff00",
        },
      },
    ],
  },
};
