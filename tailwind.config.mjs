/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C2715B',
          50:  '#FFF5F2',
          100: '#FEEAE4',
          200: '#FDD5C9',
          300: '#F0B5A0',
          400: '#D4937D',
          500: '#C2715B',
          600: '#A85A45',
          700: '#8B4535',
          800: '#6E3329',
          900: '#52241E',
        },
        cream: {
          DEFAULT: '#FFF8F0',
          dark: '#F5EDE3',
        },
        charcoal: {
          DEFAULT: '#2D2926',
          light: '#4A4543',
        },
        sage: {
          DEFAULT: '#8FA68A',
          light: '#B5C9B1',
          dark: '#6B8067',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: '12px',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
