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
        cardi: {
          ink: '#0B0B0C',
          cloud: '#F8FAFC',
          border: '#E5E7EB',
          red: '#E11D48',
          orange: '#FB923C',
          yellow: '#F59E0B',
          green: '#10B981',
          blue: '#3B82F6',
          indigo: '#6366F1',
          slate: '#64748B',
        }
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