/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        gunmetal: 'var(gunmetal)',
        darkBlue: 'var(--darkBlue)',
        borders: 'var(--borders)',
      },
      fontSize: {
        'heading-xl': 'var(--heading-xl)',
        'heading-lg': 'var(--heading-lg)',
        'heading-md': 'var(--heading-md)',
        'heading-sm': 'var(--heading-sm)',
        'body-md': 'var(--body-md)',
        'body-sm': 'var(--body-sm)',
      },
      borderRadius: {
        borderRadius: 'var(--borderRadius)',
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
