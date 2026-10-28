/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // UCSB colors. Text is UCSB navy; links take the same navy with a hairline
        // underline (decoration-accent/30); gold marks the active nav item.
        accent: { DEFAULT: "#003660", dark: "#00264a" },
        gold: "#FEBC11",
        // Grays tinted toward UCSB navy, so every text-gray-* on the site reads
        // as navy ink and navy-gray. Contrast on white: 900 12.4, 700 9.8,
        // 600 6.7, 500 5.1 (text shades stop at 500).
        gray: {
          50: "#F5F7FA",
          100: "#ECF0F4",
          200: "#DCE1E5",
          300: "#C2CBD5",
          400: "#8D9BAC",
          500: "#5E6F84",
          600: "#4A5D75",
          700: "#2C4562",
          800: "#163C62",
          900: "#003660",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Iowan Old Style", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
