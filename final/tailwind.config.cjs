/**** Tailwind Config (ref: meteor-starter) ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@mieweb/ui/tailwind-preset')],
  darkMode: ['class', '.dark &'],
  content: [
    './client/**/*.{js,ts,jsx,tsx,html}',
    './imports/**/*.{js,ts,jsx,tsx,html}',
    './node_modules/@mieweb/ui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius, 0.75rem)',
        sm: 'var(--radius-sm, 0.5rem)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
    },
  },
  plugins: [],
};
