import { Component, lazy, ReactNode, Suspense, useCallback, useEffect, useRef, useState } from 'react'

const LottiePlayer = lazy(() => import('./LottiePlayer'))

type Asset =
  | 'launch-prototype'
  | 'service-build'
  | 'service-learn'
  | 'process-understand'
  | 'process-shape'
  | 'process-build'
  | 'process-improve'
type Props = { asset: Asset; className: 'service-art' | 'step-art'; children: ReactNode }

/** Keep the original SVG if the optional animation chunk fails to load or render. */
class AnimationBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() {
    this.props.onFailure()
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

export function Illustration({ asset, className, children }: Props) {
  const artRef = useRef<HTMLSpanElement>(null)
  const [nearViewport, setNearViewport] = useState(false)
  // Start with the static SVG for server rendering and until the preference is known.
  const [reducedMotion, setReducedMotion] = useState(true)
  const [pageHidden, setPageHidden] = useState(true)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [ready, setReady] = useState(false)
  const onReady = useCallback((value: boolean) => setReady(value), [])
  const onFailure = useCallback(() => setReady(false), [])

  useEffect(() => {
    if (!window.matchMedia || !('IntersectionObserver' in window) || !artRef.current) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setReducedMotion(preference.matches)
      if (preference.matches) {
        setReady(false)
        setShouldLoad(false)
      }
    }
    const updateVisibility = () => setPageHidden(document.hidden)
    const observer = new IntersectionObserver(([entry]) => setNearViewport(entry.isIntersecting), {
      rootMargin: '100px'
    })
    updatePreference()
    updateVisibility()
    observer.observe(artRef.current)
    document.addEventListener('visibilitychange', updateVisibility)
    if (preference.addEventListener) preference.addEventListener('change', updatePreference)
    else preference.addListener(updatePreference)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', updateVisibility)
      if (preference.removeEventListener) preference.removeEventListener('change', updatePreference)
      else preference.removeListener(updatePreference)
    }
  }, [])

  const active = nearViewport && !reducedMotion && !pageHidden
  useEffect(() => {
    if (active) setShouldLoad(true)
  }, [active])

  return (
    <span
      ref={artRef}
      className={`${className}${ready && !reducedMotion ? ' lottie-ready' : ''}`}
      aria-hidden="true"
    >
      {children}
      {shouldLoad && !reducedMotion && (
        <AnimationBoundary onFailure={onFailure}>
          <Suspense fallback={null}>
            <LottiePlayer
              asset={asset}
              active={active}
              onReady={onReady}
            />
          </Suspense>
        </AnimationBoundary>
      )}
    </span>
  )
}
