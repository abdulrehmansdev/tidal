import type { Config } from "tailwindcss";

export default {
  // disable dark mode for now.
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        // 'green': {

        //   DEFAULT: '#74F4BB',
        //   50: '#FFFFFF',
        //   100: '#F0FEF9',
        //   200: '#D0FBE9',
        //   300: '#B0F8D9',
        //   400: '#92F6C9',
        //   500: '#74F4BB',
        //   600: '#45F0A4',
        //   700: '#17EC8D',
        //   800: '#11BE71',
        //   900: '#0D8D54',
        //   950: '#096441'
        // },

        // 'gray':{
        //   0: '#F0EFF2'
        // },

        // 'purple':{
        //   0: '#3F2A8C'
        // },

        // 'light':{
        //   0: '#F7FCFF'
        // },
        // 'dark': '#2B2B2B',
        // 'light-indigo': {
        //   50: '#DAF9FF',
        //   700: '#136CA3',
        //   900: '#12374F',
        // },
        // 'light-teal': {
        //   100: '#e6fff9',
        //   200: '#AFFFED',
        // },
        "dark-gray": "#495867",
        "dark-blue": "#1C4062",
        "darker-blue": "#1C364F",
        teal: "#287F8C",
        "teal-lite": "#CCD3C8",
        "darkest-blue": "#001F3B",
        "pale-blue": "#BDD5EA",
        "blue-green": "#328392",
        offWhite: "#F7F7FF",
        "sea-litest": "#E6E9E4",
        "reddish-orange": "#FE5F55",
        "reddish-dark": "#b8463e",
        "primary-border": "#D9D9D9",
        "sea-lightest": "#E6E9E4",

        black: "#000000",
        white: "#FFFFFF",
        button: {
          primary: "#136CA3",
          secondary: "#FFFFFF",
          tertiary: "#136CA3",
        },
        "primary-text": "#0d1c2a",
        "link-blue": "#136ca3",

        background: "var(--background)",
        foreground: "var(--foreground)",

        // Required tremor color customization
        // tremor: {
        //   brand: {
        //     faint: colors.blue[50],
        //     muted: colors.blue[200],
        //     subtle: colors.blue[400],
        //     DEFAULT: colors.blue[500],
        //     emphasis: colors.blue[700],
        //     inverted: colors.white,
        //   },
        //   background: {
        //     muted: colors.gray[50],
        //     subtle: colors.gray[100],
        //     DEFAULT: colors.white,
        //     emphasis: colors.gray[700],
        //   },
        //   border: {
        //     DEFAULT: colors.gray[200],
        //   },
        //   ring: {
        //     DEFAULT: colors.gray[200],
        //   },
        //   content: {
        //     subtle: colors.gray[400],
        //     DEFAULT: colors.gray[500],
        //     emphasis: colors.gray[700],
        //     strong: colors.gray[900],
        //     inverted: colors.white,
        //   },
        // },
      },
      fontFamily: {
        montserrat: ["Montserrat", "Jost", "sans-serif"],
      },
      fontSize: {
        "1.5xl": "22px",
        "5.5xl": "56px",
        "6.5xl": "64px",
        "7.5xl": "76px",
        "13px": "13px",
      },
      lineHeight: {
        "16": "64px",
        "21": "86px",
        "22": "88px",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          lg: "3rem",
          "3xl": "0rem",
        },
        screens: {
          "2xl": "1440px",
        },
      },
      borderRadius: {
        "26": "26px",
        "10xl": "40px",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      height: {
        400: "400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
