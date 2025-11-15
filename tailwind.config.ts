import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(220 13% 18%)",
        input: "hsl(222 47% 11%)",
        ring: "hsl(217.2 91.2% 59.8%)",
        background: "hsl(222 47% 8%)",
        foreground: "hsl(213 31% 91%)",
        primary: {
          DEFAULT: "hsl(215 86% 65%)",
          foreground: "hsl(222 47% 8%)",
        },
        secondary: {
          DEFAULT: "hsl(222 47% 16%)",
          foreground: "hsl(213 31% 91%)",
        },
        muted: {
          DEFAULT: "hsl(222 47% 16%)",
          foreground: "hsl(215 20% 65%)",
        },
        accent: {
          DEFAULT: "hsl(215 86% 65%)",
          foreground: "hsl(222 47% 8%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(222 47% 10%)",
          foreground: "hsl(213 31% 91%)",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        heroFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hero-float": "heroFloat 7s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;

