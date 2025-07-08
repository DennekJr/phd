import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use the CSS variable defined in globals.css
        sans: ['var(--font-grotesk)'],
        // Optionally, keep a separate mono font if needed
        mono: ['var(--font-geist-mono)'], // Assuming Geist Mono is still desired
      },
      fontWeight: {
        '900': '900',
      },
      animation: {},
      keyframes: {},
      // You can extend other theme properties here if needed
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config 