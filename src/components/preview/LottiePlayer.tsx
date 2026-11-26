import { useEffect, useLayoutEffect, useState } from 'react'
import { useLottieLight } from 'lottie-react'

const rendererSettings = { preserveAspectRatio: 'xMidYMid meet' }
type Props = { asset: string; active: boolean; onReady: (ready: boolean) => void }

/** This module is lazy-loaded only after the illustration approaches the viewport. */
export default function LottiePlayer({ asset, active, onReady }: Props) {
  const [animation, setAnimation] = useState<object | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const version = asset.startsWith('process-') ? 2 : 4
    fetch(`/preview/assets/lottie/${asset}.json?v=${version}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Animation unavailable')
        return response.json()
      })
      .then((data: unknown) => {
        if (!data || typeof data !== 'object') throw new Error('Invalid animation data')
        if (!controller.signal.aborted) setAnimation(data)
      })
      .catch(() => {
        if (!controller.signal.aborted) onReady(false)
      })
    return () => controller.abort()
  }, [asset, onReady])

  return (
    animation && (
      <LoadedAnimation
        animation={animation}
        active={active}
        onReady={onReady}
      />
    )
  )
}

function LoadedAnimation({
  animation,
  active,
  onReady
}: {
  animation: object
  active: boolean
  onReady: (ready: boolean) => void
}) {
  const [renderFailed, setRenderFailed] = useState(false)
  const lottie = useLottieLight({ src: animation, loop: true, autoplay: false, rendererSettings })
  const { state, playableFrames, animationItem, play, pause, setDisplayRef } = lottie
  const ready = state !== 'loading' && state !== 'error' && playableFrames > 0 && !renderFailed

  useEffect(() => {
    onReady(ready)
  }, [onReady, ready])
  // The library destroys its animation in a passive-effect cleanup. A layout
  // cleanup removes this additional renderer-error listener before that happens.
  useLayoutEffect(() => {
    if (!animationItem) return
    const onError = () => {
      animationItem.pause()
      setRenderFailed(true)
    }
    animationItem.addEventListener('error', onError)
    return () => animationItem.removeEventListener('error', onError)
  }, [animationItem])
  useEffect(() => {
    if (!ready) return
    if (active) play()
    else pause()
  }, [active, ready, play, pause])

  return (
    <span
      className="lottie-stage"
      ref={setDisplayRef}
      aria-hidden="true"
    />
  )
}
