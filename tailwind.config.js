/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dash/**/*.html", "./login/**/*.html", "./cadastro/**/*.html", "./recuperar-senha/**/*.html", "./cadastro-limpa-nome/**/*.html", "./cadastro-rating/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#00FF66",
        "primary-dark": "#00cc52",
        "accent-teal": "#00f0ff",
        "background-light": "#f6f8f6",
        "background-dark": "#0A0A0A",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-bg": "rgba(20, 20, 20, 0.4)",
        "card-bg": "#111111",
        "track-red": "#FF3B30",
        "track-yellow": "#FFCC00",
        "track-blue": "#007AFF"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "full": "9999px"
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(0, 255, 102, 0.3)",
        "glow-text": "0 0 10px rgba(0, 255, 102, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 0% 0%, hsla(153,100%,50%,0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(253,16%,7%,1) 0px, transparent 50%)"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
