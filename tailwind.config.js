/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFC',
          blueSection: '#F0F9FF',
          card: '#FFFFFF',
          hover: '#F0F9FF',
          surface: '#F8FAFC',
          subtle: '#F1F5F9',
        },
        border: {
          DEFAULT: '#E2E8F0',
          subtle: '#F1F5F9',
          accent: '#0EA5E9',
          skyLight: '#BAE6FD',
          active: '#0284C7',
        },
        accent: {
          DEFAULT: '#0EA5E9', // Primary Sky Blue
          hover: '#0284C7',
          light: '#38BDF8',
          subtle: '#F0F9FF',
          border: '#BAE6FD',
          dark: '#0369A1',
        },
        text: {
          primary: '#0F172A',   // Dark Navy / Slate-900
          secondary: '#475569', // Slate-600
          muted: '#64748B',     // Slate-500
          light: '#94A3B8',     // Slate-400
          faint: '#CBD5E1',     // Slate-300
        },
        success: {
          DEFAULT: '#16A34A',
          subtle: '#F0FDF4',
          border: '#BBF7D0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        signature: ['Caveat', 'cursive', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card': '0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 1px 4px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 8px 20px -4px rgba(14, 165, 233, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.05)',
        'sky-glow': '0 0 16px -2px rgba(14, 165, 233, 0.25)',
      },
    },
  },
  plugins: [],
}
