import { render } from '@testing-library/react'
import HeroAnimation from './HeroAnimation'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

jest.mock('@lottiefiles/dotlottie-react', () => ({ DotLottieReact: jest.fn(() => null) }))

test('legacy animation configures the player when it becomes ready', () => {
  render(<HeroAnimation />)
  const props = (DotLottieReact as jest.Mock).mock.calls[0][0]
  expect(props).toEqual(expect.objectContaining({ src: 'animation_lottie_hero_v2.lottie', loop: true, autoplay: true }))
  const player = { addEventListener: jest.fn(), resize: jest.fn(), setLayout: jest.fn() }
  props.dotLottieRefCallback(null)
  props.dotLottieRefCallback(player)
  expect(player.addEventListener).toHaveBeenCalledWith('ready', expect.any(Function))
  player.addEventListener.mock.calls[0][1]()
  expect(player.resize).toHaveBeenCalledTimes(1)
  expect(player.setLayout).toHaveBeenCalledWith({ fit: 'contain', align: [0.5, 0.5] })
})
