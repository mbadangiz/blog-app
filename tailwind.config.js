/** @type {import('tailwindcss').Config} */

import safeClassesList from "./src/utils/safeClassesList";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   Black_ir: "IRANSans_Black",
      //   Bold_ir: "IRANSans_Bold",
      //   Medium_ir: "IRANSans_Medium",
      //   Light_ir: "IRANSans_Light",
      //   UltraLight_ir: "IRANSans_UltraLight",
      //   Reg_ir: "IRANSans_Reg",
      // },
      fontSize: {
        15: "15px",
      },
      container: {
        center: true,
      },
      colors: {
        light: {
          paleLavender: "#F4F7FE",
          steelBlue: "#A3AED0",
          lightPeriwinkle: "#E0E5F2",
          navyblue: "#2B3674",
        },
        dark: {
          deepSpace: "#0B1437",
          midnightBlue: "#111C44",
          electricLavender: "#7551FF",
        },
        warning: "#FFB547",
        error: "#E31A1A",
        success: "#01B574",
        electricIndigo: "#4318FF",
      },
      zIndex: {
        leve10: 1000,
        leve9: 900,
        leve8: 800,
        leve7: 700,
        leve6: 600,
        leve5: 500,
        leve4: 400,
        leve3: 300,
        leve2: 200,
        leve1: 100,
        leve0: 50,
      },
    },
  },
  safelist: safeClassesList(),
  variants: {
    extend: {
      width: ["responsive"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
