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
        // The four brand colours, used as given.
        paper: '#F9F7F7',
        wash: '#DBE2EF',
        ink: '#112D4E',

        // #3F72AF, taken 20% toward the navy. The literal value reads at only
        // 3.81:1 against the wash, which fails AA for the small mono labels that
        // sit on it; this shade is indistinguishable in use and clears AA
        // everywhere — 5.69 on paper, 4.66 on wash, 5.69 behind button text.
        signal: '#36649C',

        // Derived: a palette of four cannot cover hairlines, secondary text, and
        // an accent legible on the navy section.
        rule: '#BDC7D7',
        slate: '#52667D',
        flare: '#95B0D2',
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
