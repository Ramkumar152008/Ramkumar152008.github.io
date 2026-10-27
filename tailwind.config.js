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
        offwhite: '#F9FAFB',
        charcoal: {
          DEFAULT: '#111827',
          light: '#1F2937',
          muted: '#4B5563',
          faint: '#9CA3AF',
          border: '#E5E7EB',
        },
        techblue: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
          subtle: '#EFF6FF',
          border: '#BFDBFE',
        },
        bg: {
          DEFAULT: '#F9FAFB',
          offwhite: '#F9FAFB',
          secondary: '#F3F4F6',
          blueSection: '#EFF6FF',
          card: '#FFFFFF',
          hover: '#F8FAFC',
          surface: '#F9FAFB',
          subtle: '#F3F4F6',
        },
        border: {
          DEFAULT: '#E5E7EB',
          subtle: '#F3F4F6',
          accent: '#2563EB',
          skyLight: '#BFDBFE',
          active: '#1D4ED8',
        },
        accent: {
          DEFAULT: '#2563EB', // Tech Blue
          hover: '#1D4ED8',
          light: '#3B82F6',
          subtle: '#EFF6FF',
          border: '#BFDBFE',
          dark: '#1E40AF',
        },
        text: {
          primary: '#111827',   // Charcoal gray (30%)
          secondary: '#4B5563', // Gray-600
          muted: '#6B7280',     // Gray-500
          light: '#9CA3AF',     // Gray-400
          faint: '#D1D5DB',     // Gray-300
        },
        success: {
          DEFAULT: '#16A34A',
          subtle: '#F0FDF4',
          border: '#BBF7D0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
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
