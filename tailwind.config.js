/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FBFAF7',
        wash: '#F1EEE7',
        rule: '#DFDBD2',
        ink: '#12191F',
        slate: '#5B6770',
        signal: '#C8442A',
        // Same accent, lifted for legibility on the ink-coloured closing section.
        flare: '#F2795C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        label: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.14em' }],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '3px',
      },
      maxWidth: {
        measure: '46ch',
        shell: '78rem',
      },
    },
  },
  plugins: [],
}
