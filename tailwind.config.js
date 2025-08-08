module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          500: '#0064d7',
          600: '#1976d2',
          900: '#0d47a1',
        },
        secondary: {
          500: '#ffd700',
        },
        border: 'rgb(var(--border))',
      },
      fontFamily: {
        sans: ['Geist', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}