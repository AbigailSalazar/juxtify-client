/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', '"Noto Sans JP"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--tertiary-foreground)",
        },
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
  safelist: generateColorSafelist([
    "background",
    "foreground",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "tertiary",
    "tertiary-foreground",
    "accent",
  ]),
};

function generateColorSafelist(colorNames) {
  const safelist = [];
  colorNames.forEach((color) => {
    safelist.push(`stroke-${color}`, `fill-${color}`);
  });
  return safelist;
}
