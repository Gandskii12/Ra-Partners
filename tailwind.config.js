/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101b30",
        "ink-2": "#182643",
        paper: "#f4efe2",
        parchment: "#eae3d1",
        brass: "#a9803e",
        "brass-light": "#c9a25e",
        seal: "#7a2e2e",
        charcoal: "#201d18",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
