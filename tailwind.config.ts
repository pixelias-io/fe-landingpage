import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': `radial-gradient(at 70% 79%, hsla(219,74%,62%,.4) 0px, transparent 50%),
                        radial-gradient(at 84% 89%, hsla(300,65%,75%,.4) 0px, transparent 50%),
                        radial-gradient(at 77% 93%, hsla(9,69%,72%,.4) 0px, transparent 50%),
                        radial-gradient(at 0% 39%, hsla(336,99%,79%,.4) 0px, transparent 50%),
                        radial-gradient(at 90% 75%, hsla(224,88%,61%,.4) 0px, transparent 50%),
                        radial-gradient(at 73% 32%, hsla(221,68%,61%,.4) 0px, transparent 50%),
                        radial-gradient(at 60% 13%, hsla(188,90%,71%,.4) 0px, transparent 50%);`
      },
      colors: {
        'sky-mist': '#99b8ff',
        'midnight-blue': '#0D1C4B',
        'crimson-pink': {
          100: '#ffe6ea',
          200: '#ffb3bf',
          300: '#fe8094',
          400: '#fe4764',
          DEFAULT: '#fe4764'
        }
      },
      animation: {
        'text-slide': 'text-slide 3s linear infinite'
      },
      keyframes: {
        'text-slide': {
          '0%': { transform: 'translateY(100%)', opacity: '10%' },
          '15%': { transform: 'translateY(0)', opacity: '100%' },
          '30%': { transform: 'translateY(0)', opacity: '100%' },
          '45%': { transform: 'translateY(-100%)', opacity: '100%' },
          '100%': { transform: 'translateY(-100%)', opacity: '10%' }
        }
      }
    }
  }
}
export default config
