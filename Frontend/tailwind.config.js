const brandBlue = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#142b4f',
  900: '#0b1426',
  950: '#050b16',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: brandBlue[600], ...brandBlue },
        blue: brandBlue,
        sky: brandBlue,
        cyan: brandBlue,
        indigo: brandBlue,
        label: brandBlue[400],
        brand: { DEFAULT: brandBlue[600], dark: brandBlue[900] },
        navy: { DEFAULT: brandBlue[900], mid: brandBlue[800] },
      },
    },
  },
  plugins: [],
}
