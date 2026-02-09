import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3ff",
          100: "#dce7ff",
          200: "#bed1ff",
          300: "#90afff",
          400: "#5e82ff",
          500: "#385df7",
          600: "#273fdb",
          700: "#2234b1",
          800: "#222f8b",
          900: "#1f2c6f"
        },
        ink: {
          900: "#0e1325",
          800: "#151d34",
          700: "#1f2b46"
        },
        mist: {
          100: "#f3f5fb",
          200: "#e8ecf8"
        }
      },
      boxShadow: {
        glow: "0 14px 40px rgba(56, 93, 247, 0.28)",
        soft: "0 12px 35px rgba(15, 27, 55, 0.1)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 0% 0%, rgba(94,130,255,0.28), rgba(14,19,37,0) 38%), radial-gradient(circle at 100% 0%, rgba(127,94,255,0.24), rgba(14,19,37,0) 44%)",
        "mesh-light":
          "radial-gradient(circle at 20% 10%, rgba(94,130,255,0.15), transparent 35%), radial-gradient(circle at 80% 15%, rgba(129,84,255,0.1), transparent 35%), linear-gradient(180deg, #ffffff 0%, #f6f8ff 100%)"
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "slide-up": "slide-up .6s ease-out forwards",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
