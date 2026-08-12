/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          orange: '#FF4103',
          deep: '#001621',
          sunken: '#000E15',
          surface: '#052430',
          bone: '#EDF2F4',
          muted: '#7A8D95',
          signal: '#35D6A4',
        },
        // Hairline ladder. Bone-tinted so lines belong to the surface, never grey.
        // DEFAULT/strong/bright are decorative separation. `field` is the only
        // rung that clears WCAG 1.4.11 (3:1 on brand-surface) — use it wherever a
        // border is the sole thing marking an interactive boundary, i.e. inputs.
        line: {
          DEFAULT: 'rgba(237, 242, 244, 0.08)',
          strong: 'rgba(237, 242, 244, 0.14)',
          bright: 'rgba(237, 242, 244, 0.22)',
          field: 'rgba(237, 242, 244, 0.36)',
        },
      },
      animation: {
        'terminal-blink': 'terminal-blink 1s step-end infinite',
        'reveal': 'reveal 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'line-grow': 'line-grow 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
      },
      keyframes: {
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        reveal: {
          '0%': { transform: 'translateY(28px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(110%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333333%)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
