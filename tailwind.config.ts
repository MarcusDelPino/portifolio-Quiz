import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/model/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backFont: "#F2C866",
      },
      rotate: {
        'y-90': 'rotateY(90deg)',
        'y-180': 'rotateY(180deg)',
        'y-270': 'rotateY(270deg)',
      },
    },
  },
  plugins: [],
}
export default config
