import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'input-shadow': '0 63px 59px rgba(26,33,188,.1)',
        'course-shadow': '0 40px 20px rgba(0,0,0,.15)',
        'testimonial-brown': '0px 8px 20px rgba(78, 52, 46, 0.15)', // coklat lembut
        'testimonial-green': '0px 8px 20px rgba(46, 125, 50, 0.15)', // hijau lembut
      },
      colors: {
        primary: "#4E342E",       // warna kakao
        secondary: "#2E7D32",     // hijau daun
        grey: "#6B7280",          // abu netral
        slateGray: "#F1F5F9",     // background terang
        deepSlate: "#D7CCC8",     // netral natural
        success: "#388E3C",       // hijau sukses
        midnight_text: "#1E293B", // teks gelap profesional
        darkgray: '#4B5563',
        darkbrown: '#5D4037',
        lightgray: '#9CA3AF',
      },
      spacing: {
        '75%': '75%',
      },
      backgroundImage: {
        'newsletter-bg': `url('/images/newsletter/bgFile.png')`,
        'newsletter-bg-2': `url('/E-learning/images/newsletter/bgFile.png')`,
      },
    },
  },
  plugins: [],
};
export default config;
