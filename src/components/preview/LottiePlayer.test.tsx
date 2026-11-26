import { act, render, waitFor } from '@testing-library/react'
import LottiePlayer from './LottiePlayer'

jest.mock('lottie-react', () => ({ useLottieLight: jest.fn() }))
const originalFetch = global.fetch

afterEach(() => {
  global.fetch = originalFetch
})

test('aborts an in-flight animation download on unmount', () => {
  let signal: AbortSignal | undefined
  global.fetch = jest.fn((_, options) => {
    signal = (options as RequestInit).signal as AbortSignal
    return new Promise<Response>(() => {})
  }) as jest.Mock
  const { unmount } = render(
    <LottiePlayer
      asset="service-build"
      active
      onReady={jest.fn()}
    />
  )
  expect(signal?.aborted).toBe(false)
  unmount()
  expect(signal?.aborted).toBe(true)
})

test('keeps the fallback visible when animation data cannot be loaded', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false })
  const onReady = jest.fn()
  const { container } = render(
    <LottiePlayer
      asset="service-build"
      active
      onReady={onReady}
    />
  )
  await waitFor(() => expect(onReady).toHaveBeenCalledWith(false))
  expect(container.querySelector('.lottie-stage')).toBeNull()
})

test('stops a running animation immediately when its renderer fails', async () => {
  const { useLottieLight } = require('lottie-react')
  let errorHandler: (() => void) | undefined
  const animationItem = {
    pause: jest.fn(),
    addEventListener: jest.fn((name: string, handler: () => void) => {
      if (name === 'error') errorHandler = handler
    }),
    removeEventListener: jest.fn()
  }
  useLottieLight.mockReturnValue({
    state: 'playing',
    playableFrames: 240,
    animationItem,
    play: jest.fn(),
    pause: jest.fn(),
    setDisplayRef: jest.fn()
  })
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ v: '5.0', layers: [] }) })
  const onReady = jest.fn()
  render(
    <LottiePlayer
      asset="service-build"
      active
      onReady={onReady}
    />
  )
  await waitFor(() => expect(errorHandler).toBeDefined())
  act(() => errorHandler?.())
  expect(animationItem.pause).toHaveBeenCalledTimes(1)
  await waitFor(() => expect(onReady).toHaveBeenLastCalledWith(false))
})
