import { mountMotion } from './motion'

test('leaves the page usable and artwork still when matchMedia is unavailable', () => {
  const original = window.matchMedia
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: undefined })
  document.body.classList.add('no-js')
  document.body.innerHTML = '<main><h1>Page remains available</h1></main>'
  const cleanup = mountMotion()
  expect(document.querySelector('h1')).toHaveTextContent('Page remains available')
  expect(document.documentElement).toHaveAttribute('data-motion-unavailable')
  cleanup()
  expect(document.documentElement).not.toHaveAttribute('data-motion-unavailable')
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: original })
})
