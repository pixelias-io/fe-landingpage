/* The SVG artwork is React-owned; these controllers animate its decorative layers. */
let playerPromise
function loadPlayer() {
  if (!playerPromise)
    playerPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = '/preview/assets/lottie/lottie-light-5.13.0.min.js'
      script.onload = () => (window.lottie ? resolve(window.lottie) : reject(new Error('Player unavailable')))
      script.onerror = reject
      document.head.append(script)
    })
  return playerPromise
}

function mountLottie() {
  if (!('IntersectionObserver' in window) || !window.matchMedia) return () => {}
  let disposed = false
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  const names = [
    'launch-prototype',
    'service-build',
    'service-learn',
    'process-understand',
    'process-shape',
    'process-build',
    'process-improve'
  ]
  const illustrations = [...document.querySelectorAll('.service-art, #process .step-art')]
  const states = illustrations
    .map((art, i) => {
      const stage = art.querySelector('.lottie-stage')
      if (!stage) return null
      return {
        art,
        stage,
        name: names[i],
        visible: false,
        animation: null,
        loading: false,
        failed: false,
        generation: 0
      }
    })
    .filter((state) => state && state.name)
  function destroy(state) {
    state.generation++
    state.art.classList.remove('lottie-ready')
    if (state.animation) state.animation.destroy()
    state.animation = null
  }
  function eligible(state) {
    return !disposed && state.visible && !reduced.matches && !document.hidden
  }
  async function sync(state) {
    if (reduced.matches) {
      destroy(state)
      return
    }
    if (!eligible(state)) {
      if (state.animation) state.animation.pause()
      return
    }
    if (state.animation) {
      state.animation.play()
      return
    }
    if (state.loading || state.failed) return
    state.loading = true
    const version = state.generation
    try {
      const player = await loadPlayer()
      if (version !== state.generation || !eligible(state)) return
      const instance = player.loadAnimation({
        container: state.stage,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: `/preview/assets/lottie/${state.name}.json?v=${state.name.startsWith('process-') ? 2 : 4}`,
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
      })
      state.animation = instance
      instance.addEventListener('DOMLoaded', () => {
        if (state.animation !== instance || reduced.matches) return
        state.art.classList.add('lottie-ready')
        if (eligible(state)) instance.play()
      })
      const fallback = () => {
        if (state.animation === instance) {
          state.failed = true
          destroy(state)
        }
      }
      instance.addEventListener('data_failed', fallback)
      instance.addEventListener('error', fallback)
    } catch (_) {
      state.failed = true
      destroy(state)
    } finally {
      state.loading = false
      if (version !== state.generation && eligible(state) && !state.animation && !state.failed) sync(state)
    }
  }
  const byElement = new Map(states.map((state) => [state.art, state]))
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const state = byElement.get(entry.target)
        state.visible = entry.isIntersecting
        sync(state)
      }
    },
    { rootMargin: '100px' }
  )
  states.forEach((state) => observer.observe(state.art))
  const syncAll = () => states.forEach(sync)
  document.addEventListener('visibilitychange', syncAll)
  if (reduced.addEventListener) reduced.addEventListener('change', syncAll)
  else if (reduced.addListener) reduced.addListener(syncAll)

  return () => {
    disposed = true
    observer.disconnect()
    document.removeEventListener('visibilitychange', syncAll)
    if (reduced.removeEventListener) reduced.removeEventListener('change', syncAll)
    else if (reduced.removeListener) reduced.removeListener(syncAll)
    states.forEach(destroy)
  }
}
function mountHero() {
  if (!('IntersectionObserver' in window)) return () => {}
  const art = document.querySelector('.art')
  const svg = art.querySelector('.hero-illustration')
  const warm = svg.querySelector('.hero-system-warm'),
    cool = svg.querySelector('.hero-system-cool')
  const paths = [...svg.querySelectorAll('.hero-connections path')]
  const pulses = [...svg.querySelectorAll('.hero-energy circle')]
  const lowerNode = svg.querySelector('.node-lower-curve'),
    upperNode = svg.querySelector('.node-upper-curve')
  const anchorPlanes = ['.warm-one', '.warm-three', '.cool-two', '.cool-three'].map((selector) =>
    svg.querySelector(selector)
  )
  const lightWarm = svg.querySelector('.hero-light-warm'),
    lightCool = svg.querySelector('.hero-light-cool')
  const reduce = matchMedia('(prefers-reduced-motion: reduce)')
  const fine = matchMedia('(hover: hover) and (pointer: fine)')
  const animated = [art, ...document.querySelectorAll('#services,#process,#about,#contact')]
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        entry.target.classList.toggle('motion-offscreen', !entry.isIntersecting)
        if (entry.target === art) {
          inView = entry.isIntersecting
          sync()
        }
      }),
    { rootMargin: '100px' }
  )
  let inView = false,
    frame = 0,
    last = 0,
    elapsed = 0,
    pointerX = 0,
    pointerY = 0,
    targetX = 0,
    targetY = 0
  let previousWarm = { x: 0, y: 0 },
    previousCool = { x: 0, y: 0 }
  function bezier(a, b, c, d, t) {
    const u = 1 - t
    return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d
  }
  function pointOn(p, t) {
    return { x: bezier(p[0], p[2], p[4], p[6], t), y: bezier(p[1], p[3], p[5], p[7], t) }
  }
  function movePulse(el, segments, t) {
    const point = pointOn(segments[t < 0.5 ? 0 : 1], t < 0.5 ? t * 2 : (t - 0.5) * 2)
    el.setAttribute('cx', point.x)
    el.setAttribute('cy', point.y)
  }
  function moveNode(el, segment, t) {
    const point = pointOn(segment, t)
    el.setAttribute('x', point.x - 5)
    el.setAttribute('y', point.y - 5)
  }
  function pathData(parts) {
    const a = parts[0],
      b = parts[1]
    return `M${a[0]} ${a[1]} C${a[2]} ${a[3]} ${a[4]} ${a[5]} ${a[6]} ${a[7]} C${b[2]} ${b[3]} ${b[4]} ${b[5]} ${b[6]} ${b[7]}`
  }
  function segments(aw, ac, bw, bc) {
    const x = 327,
      y = 148
    return [
      [
        [aw.x, aw.y, aw.x + 67, aw.y - 61, x - 70, y - 70, x, y],
        [x, y, x + 48, y + 42, ac.x - 48, ac.y + 20, ac.x, ac.y]
      ],
      [
        [bw.x, bw.y, bw.x + 50, bw.y + 38, x - 75, y + 72, x, y],
        [x, y, x + 45, y - 50, bc.x - 60, bc.y - 26, bc.x, bc.y]
      ]
    ]
  }
  // Read geometry together before any writes. The parent-system delta is
  // applied below so connections follow the new position in the same frame.
  function anchor(plane, x, y, inverse, previous, next) {
    try {
      const matrix = plane.getScreenCTM()
      if (!inverse || !matrix) throw new Error('SVG matrix unavailable')
      const point = svg.createSVGPoint()
      point.x = x
      point.y = y
      const position = point.matrixTransform(inverse.multiply(matrix))
      return { x: position.x + next.x - previous.x, y: position.y + next.y - previous.y }
    } catch (_) {
      return { x: x + next.x, y: y + next.y }
    }
  }
  function render(now) {
    if (!last) last = now
    const delta = Math.min(now - last, 50)
    last = now
    elapsed += delta
    const time = elapsed / 1000,
      blend = 1 - Math.exp(-delta / 300)
    pointerX += (targetX - pointerX) * blend
    pointerY += (targetY - pointerY) * blend
    const phase = Math.sin((time * 2 * Math.PI) / 15),
      phase2 = Math.sin((time * 2 * Math.PI) / 22 + 0.8)
    const wx = Number((phase * 9 + pointerX * 6).toFixed(2)),
      wy = Number((phase2 * 5 + pointerY * 4).toFixed(2))
    const cx = Number((-phase * 9 + pointerX * 9).toFixed(2)),
      cy = Number((-phase2 * 5 + pointerY * 6).toFixed(2))
    const nextWarm = { x: wx, y: wy },
      nextCool = { x: cx, y: cy }
    let inverse = null
    try {
      const root = svg.getScreenCTM()
      if (root) inverse = root.inverse()
    } catch (_) {}
    const aw = anchor(anchorPlanes[0], 143, 161, inverse, previousWarm, nextWarm),
      ac = anchor(anchorPlanes[2], 465, 185, inverse, previousCool, nextCool)
    const bw = anchor(anchorPlanes[1], 156, 190, inverse, previousWarm, nextWarm),
      bc = anchor(anchorPlanes[3], 492, 116, inverse, previousCool, nextCool)
    warm.style.setProperty('--system-x', wx + 'px')
    warm.style.setProperty('--system-y', wy + 'px')
    cool.style.setProperty('--system-x', cx + 'px')
    cool.style.setProperty('--system-y', cy + 'px')
    previousWarm = nextWarm
    previousCool = nextCool
    const [a, b] = segments(aw, ac, bw, bc)
    paths[0].setAttribute('d', pathData(a))
    paths[1].setAttribute('d', pathData(b))
    moveNode(lowerNode, b[0], 0.7)
    moveNode(upperNode, b[1], 0.55)
    const t = (time % 13) / 13,
      u = ((time + 6.5) % 17) / 17
    movePulse(pulses[0], a, t)
    movePulse(pulses[1], b, 1 - u)
    pulses[0].style.opacity = String(time > 1.8 ? Math.sin(Math.PI * t) * 0.8 : 0)
    pulses[1].style.opacity = String(time > 1.8 ? Math.sin(Math.PI * u) * 0.65 : 0)
    lightWarm.style.setProperty('--light-x', (wx * 0.5).toFixed(2) + 'px')
    lightWarm.style.setProperty('--light-y', (wy * 0.5).toFixed(2) + 'px')
    lightCool.style.setProperty('--light-x', (cx * 0.5).toFixed(2) + 'px')
    lightCool.style.setProperty('--light-y', (cy * 0.5).toFixed(2) + 'px')
    lightWarm.style.setProperty('--light-opacity', String(0.9 + 0.1 * Math.sin(Math.PI * t)))
    lightCool.style.setProperty('--light-opacity', String(0.9 + 0.1 * Math.sin(Math.PI * u)))
    frame = requestAnimationFrame(render)
  }
  function reset() {
    previousWarm = { x: 0, y: 0 }
    previousCool = { x: 0, y: 0 }
    ;[warm, cool].forEach((e) => {
      e.style.removeProperty('--system-x')
      e.style.removeProperty('--system-y')
    })
    ;[lightWarm, lightCool].forEach((e) => {
      e.style.removeProperty('--light-x')
      e.style.removeProperty('--light-y')
      e.style.removeProperty('--light-opacity')
    })
    const [a, b] = segments({ x: 143, y: 161 }, { x: 465, y: 185 }, { x: 156, y: 190 }, { x: 492, y: 116 })
    paths[0].setAttribute('d', pathData(a))
    paths[1].setAttribute('d', pathData(b))
    moveNode(lowerNode, b[0], 0.7)
    moveNode(upperNode, b[1], 0.55)
    pulses.forEach((p) => (p.style.opacity = '0'))
    art.classList.remove('motion-running')
  }
  function sync() {
    if (inView && !reduce.matches && !document.hidden) {
      if (!frame) {
        last = 0
        art.classList.add('motion-running')
        frame = requestAnimationFrame(render)
      }
    } else {
      if (frame) cancelAnimationFrame(frame)
      frame = 0
      last = 0
      if (reduce.matches) reset()
    }
  }
  const onPointerMove = (e) => {
    if (!fine.matches || reduce.matches) return
    const r = art.getBoundingClientRect()
    targetX = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1))
    targetY = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1))
  }
  const onPointerLeave = () => {
    targetX = 0
    targetY = 0
  }
  art.addEventListener('pointermove', onPointerMove, { passive: true })
  art.addEventListener('pointerleave', onPointerLeave, { passive: true })
  animated.forEach((e) => observer.observe(e))
  document.addEventListener('visibilitychange', sync)
  reduce.addEventListener('change', sync)

  return () => {
    observer.disconnect()
    document.removeEventListener('visibilitychange', sync)
    reduce.removeEventListener('change', sync)
    art.removeEventListener('pointermove', onPointerMove)
    art.removeEventListener('pointerleave', onPointerLeave)
    if (frame) cancelAnimationFrame(frame)
  }
}
export function mountMotion() {
  document.body.classList.remove('no-js')
  let observer
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
  } else document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'))
  const stopHero = mountHero(),
    stopLottie = mountLottie()
  return () => {
    if (observer) observer.disconnect()
    stopHero()
    stopLottie()
  }
}
