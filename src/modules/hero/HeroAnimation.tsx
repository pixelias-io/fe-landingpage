import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const HeroAnimation = () => (
  <DotLottieReact
    dotLottieRefCallback={(dotLottie) => {
      if (!dotLottie) return

      dotLottie.addEventListener('ready', () => {
        dotLottie.resize()
        dotLottie.setLayout({
          fit: 'contain',
          align: [0.5, 0.5]
        })
      })
    }}
    src="animation_lottie_hero_v2.lottie"
    loop
    autoplay
  />
)

export default HeroAnimation
