import { act, render, screen, waitFor } from '@testing-library/react'
import { Illustration } from './Illustration'

jest.mock('./LottiePlayer', () => {
  const React = require('react')
  function MockPlayer({ active, onReady }: { active: boolean; onReady: (ready: boolean) => void }) {
    React.useEffect(() => {
      onReady(true)
    }, [onReady])
    return (
      <span
        data-testid="player"
        data-active={String(active)}
      />
    )
  }
  return { __esModule: true, default: MockPlayer }
})

let intersect: (visible: boolean) => void
let setPreference: (reduced: boolean) => void
beforeEach(() => {
  let listener: (() => void) | undefined
  const preference = {
    matches: false,
    addEventListener: (_: string, callback: () => void) => {
      listener = callback
    },
    removeEventListener: () => {
      listener = undefined
    }
  }
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: () => preference })
  setPreference = (reduced) => {
    preference.matches = reduced
    listener?.()
  }
  class Observer {
    constructor(callback: IntersectionObserverCallback) {
      intersect = (visible) =>
        callback([{ isIntersecting: visible } as IntersectionObserverEntry], this as unknown as IntersectionObserver)
    }
    observe() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', { configurable: true, value: Observer })
})

test('loads near the viewport, pauses offscreen, and restores the SVG for reduced motion', async () => {
  const { container } = render(
    <Illustration
      asset="service-build"
      className="service-art"
    >
      <svg data-testid="fallback" />
    </Illustration>
  )
  expect(screen.queryByTestId('player')).not.toBeInTheDocument()
  act(() => intersect(true))
  await waitFor(() => expect(container.firstChild).toHaveClass('lottie-ready'))
  expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'true')
  act(() => intersect(false))
  expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'false')
  act(() => setPreference(true))
  expect(screen.queryByTestId('player')).not.toBeInTheDocument()
  expect(container.firstChild).not.toHaveClass('lottie-ready')
  expect(screen.getByTestId('fallback')).toBeInTheDocument()
  act(() => {
    intersect(true)
    setPreference(false)
  })
  await waitFor(() => expect(container.firstChild).toHaveClass('lottie-ready'))
})

test('pauses when the document is hidden and resumes when visible', async () => {
  const hidden = Object.getOwnPropertyDescriptor(document, 'hidden')
  Object.defineProperty(document, 'hidden', { configurable: true, value: false })
  render(
    <Illustration
      asset="service-learn"
      className="service-art"
    >
      <svg />
    </Illustration>
  )
  act(() => intersect(true))
  await waitFor(() => expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'true'))
  act(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true })
    document.dispatchEvent(new Event('visibilitychange'))
  })
  expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'false')
  act(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: false })
    document.dispatchEvent(new Event('visibilitychange'))
  })
  expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'true')
  if (hidden) Object.defineProperty(document, 'hidden', hidden)
  else delete (document as { hidden?: boolean }).hidden
})

test('the page motion control pauses and resumes a loaded illustration', async () => {
  const { MotionProvider, useMotion } = require('./MotionPreference')
  function Control() {
    const { paused, toggle } = useMotion()
    return <button onClick={toggle}>{paused ? 'Resume motion' : 'Pause motion'}</button>
  }
  render(
    <MotionProvider>
      <Control />
      <Illustration
        asset="service-build"
        className="service-art"
      >
        <svg />
      </Illustration>
    </MotionProvider>
  )
  act(() => intersect(true))
  await waitFor(() => expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'true'))
  act(() => screen.getByRole('button', { name: 'Pause motion' }).click())
  expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'false')
  expect(document.documentElement).toHaveAttribute('data-motion-paused')
  act(() => screen.getByRole('button', { name: 'Resume motion' }).click())
  expect(screen.getByTestId('player')).toHaveAttribute('data-active', 'true')
  expect(document.documentElement).not.toHaveAttribute('data-motion-paused')
})
