import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fdeaea',
          100: '#facbcb',
          200: '#f59b9b',
          300: '#f06c6d',
          400: '#ea3c3d',
          500: '#c42b2f',
          600: '#b1272a',
          700: '#962124',
          800: '#7b1b1d',
          900: '#631616',
          950: '#4e1111'
        }
      }
    }
  }
}
