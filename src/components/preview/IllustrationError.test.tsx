import { act, render, screen, waitFor } from '@testing-library/react'
import { Illustration } from './Illustration'

jest.mock('./LottiePlayer', () => ({
  __esModule: true,
  default: () => {
    throw new Error('Player unavailable')
  }
}))

test('a player render failure keeps the original illustration visible', async () => {
  let notify: IntersectionObserverCallback = () => {}
  const previousObserver = window.IntersectionObserver
  const previousMatchMedia = window.matchMedia
  class Observer {
    constructor(callback: IntersectionObserverCallback) {
      notify = callback
    }
    observe() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', { configurable: true, value: Observer })
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: () => ({ matches: false, addEventListener() {}, removeEventListener() {} })
  })
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
  try {
    const { container } = render(
      <Illustration
        asset="launch-prototype"
        className="service-art"
      >
        <svg data-testid="fallback" />
      </Illustration>
    )
    act(() => notify([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver))
    await waitFor(() =>
      expect(consoleError.mock.calls.flat().some((value) => String(value).includes('Player unavailable'))).toBe(true)
    )
    expect(screen.getByTestId('fallback')).toBeVisible()
    expect(container.firstChild).not.toHaveClass('lottie-ready')
  } finally {
    consoleError.mockRestore()
    Object.defineProperty(window, 'IntersectionObserver', { configurable: true, value: previousObserver })
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: previousMatchMedia })
  }
})
