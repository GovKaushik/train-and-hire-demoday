import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cardy: {
          ink: "var(--cardy-ink)",
          cloud: "var(--cardy-cloud)",
          border: "var(--cardy-border)",
          red: "var(--cardy-red)",
          orange: "var(--cardy-orange)",
          yellow: "var(--cardy-yellow)",
          green: "var(--cardy-green)",
          blue: "var(--cardy-blue)",
          indigo: "var(--cardy-indigo)",
          purple: "var(--cardy-purple)",
          pink: "var(--cardy-pink)",
        },
        track: {
          waiStart: "var(--cardy-wai-start)",
          waiEnd: "var(--cardy-wai-end)",
          baStart: "var(--cardy-ba-start)",
          baEnd: "var(--cardy-ba-end)",
        },
      },
      backgroundImage: {
        "cardy-brand-sweep": "var(--cardy-brand-sweep)",
      },
      transitionTimingFunction: {
        cardy: "var(--cardy-ease)",
      },
      transitionDuration: {
        cardySm: "var(--cardy-dur-sm)",
        cardyMd: "var(--cardy-dur-md)",
        cardyLg: "var(--cardy-dur-lg)",
      },
      boxShadow: {
        frosted: "0 24px 60px -24px rgba(0,0,0,.25)",
      },
      borderRadius: {
        plate: "24px",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        text: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-up': 'slideUp 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-in': 'scaleIn 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

export default config