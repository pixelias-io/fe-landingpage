import { render } from '@testing-library/react'
import { Hero } from './Hero'
import { LocaleProvider } from './Locale'
import { mountMotion } from './motion'

test('hero motion runs in view, pauses in a hidden tab, resumes, and cleans up', () => {
  const originalObserver = window.IntersectionObserver
  const originalMatchMedia = window.matchMedia
  const hidden = Object.getOwnPropertyDescriptor(document, 'hidden')
  const callbacks: IntersectionObserverCallback[] = []
  let nextFrame: FrameRequestCallback | undefined
  class Observer {
    constructor(callback: IntersectionObserverCallback) {
      callbacks.push(callback)
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', { configurable: true, value: Observer })
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: () => ({ matches: false, addEventListener() {}, removeEventListener() {} })
  })
  Object.defineProperty(document, 'hidden', { configurable: true, value: false })
  const request = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    nextFrame = callback
    return 1
  })
  const cancel = jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {})
  const { container, unmount } = render(
    <LocaleProvider>
      <Hero />
    </LocaleProvider>
  )
  const cleanup = mountMotion()
  const art = container.querySelector('.art')!
  callbacks[1]([{ target: art, isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
  expect(art).toHaveClass('motion-running')
  expect(request).toHaveBeenCalled()
  nextFrame?.(1000)
  const path = art.querySelector('.hero-connections path')!
  const first = path.getAttribute('d')
  nextFrame?.(1050)
  expect(path.getAttribute('d')).not.toBe(first)
  Object.defineProperty(document, 'hidden', { configurable: true, value: true })
  document.dispatchEvent(new Event('visibilitychange'))
  expect(cancel).toHaveBeenCalledWith(1)
  const calls = request.mock.calls.length
  Object.defineProperty(document, 'hidden', { configurable: true, value: false })
  document.dispatchEvent(new Event('visibilitychange'))
  expect(request.mock.calls.length).toBeGreaterThan(calls)
  cleanup()
  expect(cancel).toHaveBeenCalled()
  unmount()
  request.mockRestore()
  cancel.mockRestore()
  Object.defineProperty(window, 'IntersectionObserver', { configurable: true, value: originalObserver })
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
  if (hidden) Object.defineProperty(document, 'hidden', hidden)
  else delete (document as { hidden?: boolean }).hidden
})
