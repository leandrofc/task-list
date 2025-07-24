/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: {
          900: "#6C7381",
          700: "#CDCDCD",
          300: "#E5E7EB",
          100: "#FCFCFD",
        },
        blue: {
          700: "#0084C7",
          100: "#E6F4FE",
        },
        green: {
          700: "#0E9F1F",
          100: "#EBF6F1",
        },
        orange: {
          100: "#FFF2E7",
        },
        transparent: "transparent",
        current: "currentColor",
      },
      fontSize:{
        sm: 10,
        md: 15,
        lg: 16,
        xl: 36
      },
      extend: {
        fontFamily: {
          sans: ["Inter", "Arial", "sans-serif"],
        },
        keyframes: {
          spinVariable: {
            '0%': { transform: 'rotate(0deg)' },
            '50%': { transform: 'rotate(180deg)', animationTimingFunction: 'ease-in' },
            '100%': { transform: 'rotate(360deg)', animationTimingFunction: 'ease-out' },
          },
        },
        animation: {
          'spin-variable': 'spinVariable 1.5s infinite',
        },
      },
    },
    plugins: [],
}