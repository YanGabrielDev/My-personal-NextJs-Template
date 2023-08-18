import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          "50": "#edfaff",
          "100": "#d7f2ff",
          "200": "#b8e9ff",
          "300": "#87deff",
          "400": "#4ec9ff",
          "500": "#26acff",
          "600": "#0e8fff",
          "700": "#076ddd",
          "800": "#0d5dc0",
          "900": "#125096",
          "950": "#10315b",
        },
        success: {
          "50": "#effef5",
          "100": "#dafee8",
          "200": "#b8fad4",
          "300": "#81f4b3",
          "400": "#43e589",
          "500": "#1acd68",
          "600": "#10b759",
          "700": "#108544",
          "800": "#126939",
          "900": "#115631",
          "950": "#033019",
        },
      },
    },
  },
  plugins: [],
}
export default config
