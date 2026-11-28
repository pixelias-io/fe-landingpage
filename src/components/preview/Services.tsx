import { Illustration } from './Illustration'
import { useLocale } from './Locale'
export function Services() {
  const { t, locale, setLocale } = useLocale()

  return (
    <section
      className="wrap section split reveal"
      id="services"
    >
      <div>
        <h2>{t('navServices', 'What we do')}</h2>
        <p className="intro">
          {t(
            'servicesIntro',
            'From your first launch to your next product improvement, we work alongside your team to make it happen.'
          )}
        </p>
      </div>
      <div>
        <div className="service service-1">
          <Illustration
            className="service-art"
            asset="launch-prototype"
          >
            <svg className="service-illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100" aria-hidden="true" focusable="false"><defs>
<linearGradient id="growth-warm" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe2a3" stopOpacity=".95"/><stop offset=".48" stopColor="#ffa444" stopOpacity=".82"/><stop offset="1" stopColor="#ff7ca6" stopOpacity=".55"/></linearGradient>
<linearGradient id="growth-pink" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffc7aa" stopOpacity=".92"/><stop offset=".5" stopColor="#f679bd" stopOpacity=".78"/><stop offset="1" stopColor="#c17def" stopOpacity=".55"/></linearGradient>
<linearGradient id="growth-cool" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e8ccff" stopOpacity=".88"/><stop offset=".52" stopColor="#b28af5" stopOpacity=".76"/><stop offset="1" stopColor="#83a2f8" stopOpacity=".55"/></linearGradient>
<linearGradient id="growth-edge"><stop stopColor="#fff6db"/><stop offset=".5" stopColor="#ffc4e9"/><stop offset="1" stopColor="#dccfff"/></linearGradient>
<radialGradient id="growth-light"><stop stopColor="#fff7ed" stopOpacity=".6"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
</defs>
<ellipse cx="70" cy="86" rx="58" ry="9" fill="#cb9df3" opacity=".15"/>
<g className="service-part growth-bar growth-bar-1">
<path d="M15 62 L22 58 L39 58 L32 62 Z" fill="url(#growth-light)" stroke="url(#growth-edge)" strokeWidth=".8"/>
<path d="M32 62 L39 58 L39 81 L32 85 Z" fill="url(#growth-cool)" opacity=".7" stroke="url(#growth-edge)" strokeWidth=".7"/>
<path d="M15 62 L32 62 L32 85 L15 85 Z" fill="url(#growth-warm)" stroke="url(#growth-edge)" strokeWidth=".85"/>
<path d="M17 83 L17 65 L30 65" fill="none" stroke="#fff8f1" strokeWidth=".75" opacity=".7"/>
<path d="M18 67 L23 67 L23 83 L18 83 Z" fill="url(#growth-light)" opacity=".4"/>
</g>
<g className="service-part growth-bar growth-bar-2">
<path d="M40 50 L47 46 L64 46 L57 50 Z" fill="url(#growth-light)" stroke="url(#growth-edge)" strokeWidth=".8"/>
<path d="M57 50 L64 46 L64 81 L57 85 Z" fill="url(#growth-cool)" opacity=".7" stroke="url(#growth-edge)" strokeWidth=".7"/>
<path d="M40 50 L57 50 L57 85 L40 85 Z" fill="url(#growth-warm)" stroke="url(#growth-edge)" strokeWidth=".85"/>
<path d="M42 83 L42 53 L55 53" fill="none" stroke="#fff8f1" strokeWidth=".75" opacity=".7"/>
<path d="M43 55 L48 55 L48 83 L43 83 Z" fill="url(#growth-light)" opacity=".4"/>
</g>
<g className="service-part growth-bar growth-bar-3">
<path d="M65 36 L72 32 L89 32 L82 36 Z" fill="url(#growth-light)" stroke="url(#growth-edge)" strokeWidth=".8"/>
<path d="M82 36 L89 32 L89 81 L82 85 Z" fill="url(#growth-cool)" opacity=".7" stroke="url(#growth-edge)" strokeWidth=".7"/>
<path d="M65 36 L82 36 L82 85 L65 85 Z" fill="url(#growth-pink)" stroke="url(#growth-edge)" strokeWidth=".85"/>
<path d="M67 83 L67 39 L80 39" fill="none" stroke="#fff8f1" strokeWidth=".75" opacity=".7"/>
<path d="M68 41 L73 41 L73 83 L68 83 Z" fill="url(#growth-light)" opacity=".4"/>
</g>
<g className="service-part growth-bar growth-bar-4">
<path d="M90 19 L97 15 L114 15 L107 19 Z" fill="url(#growth-light)" stroke="url(#growth-edge)" strokeWidth=".8"/>
<path d="M107 19 L114 15 L114 81 L107 85 Z" fill="url(#growth-cool)" opacity=".7" stroke="url(#growth-edge)" strokeWidth=".7"/>
<path d="M90 19 L107 19 L107 85 L90 85 Z" fill="url(#growth-cool)" stroke="url(#growth-edge)" strokeWidth=".85"/>
<path d="M92 83 L92 22 L105 22" fill="none" stroke="#fff8f1" strokeWidth=".75" opacity=".7"/>
<path d="M93 24 L98 24 L98 83 L93 83 Z" fill="url(#growth-light)" opacity=".4"/>
</g>
</svg>
          </Illustration>
          <h3>{t('service1', 'Launch and grow')}</h3>
          <p>
            {t(
              'desc1',
              'Bring new ideas to market with high-performing websites, landing pages and digital experiences built around your business goals.'
            )}
          </p>
        </div>
        <div className="service service-2">
          <Illustration
            className="service-art"
            asset="service-build"
          >
            <svg
              className="service-illustration"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 100"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                {'\n '}
                <linearGradient
                  id="anim-build-warm"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ffe2a3"
                    stopOpacity=".96"
                  ></stop>
                  <stop
                    offset=".38"
                    stopColor="#ffa83e"
                    stopOpacity=".88"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ff8498"
                    stopOpacity=".49"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="anim-build-pink"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ffc0a0"
                    stopOpacity=".88"
                  ></stop>
                  <stop
                    offset=".47"
                    stopColor="#f768b5"
                    stopOpacity=".78"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#d16be8"
                    stopOpacity=".48"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="anim-build-cool"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#dec6ff"
                    stopOpacity=".82"
                  ></stop>
                  <stop
                    offset=".55"
                    stopColor="#a482f4"
                    stopOpacity=".7"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#82a2ff"
                    stopOpacity=".46"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient id="anim-build-line">
                  <stop stopColor="#ffb657"></stop>
                  <stop
                    offset=".52"
                    stopColor="#eb82ce"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#9d9df6"
                  ></stop>
                </linearGradient>
                {'\n '}
                <radialGradient
                  id="anim-build-sheen"
                  cx="40%"
                  cy="22%"
                  r="85%"
                >
                  <stop
                    stopColor="#fff8ec"
                    stopOpacity=".7"
                  ></stop>
                  <stop
                    offset=".35"
                    stopColor="#fff1f2"
                    stopOpacity=".24"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#fff"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                {'\n '}
                <radialGradient id="anim-build-glint">
                  <stop
                    stopColor="#fffdf2"
                    stopOpacity=".8"
                  ></stop>
                  <stop
                    offset=".3"
                    stopColor="#fff2e8"
                    stopOpacity=".3"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#fff"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                {'\n '}
                <filter
                  id="anim-build-ambient"
                  x="-100%"
                  y="-150%"
                  width="300%"
                  height="400%"
                >
                  <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                </filter>
              </defs>
              <ellipse
                cx="70"
                cy="78"
                rx="51"
                ry="13"
                fill="#c58dea"
                opacity=".28"
                filter="url(#anim-build-ambient)"
              ></ellipse>
              {'\n '}
              <g className="service-orbit">
                <path
                  d="M12 48 50 28 88 47 50 67Z M12 48v24 M88 47v24 M64 23 99 6 130 21 95 39Z M130 21v30"
                  fill="none"
                  stroke="url(#anim-build-line)"
                  strokeWidth=".8"
                  opacity=".48"
                ></path>
                <circle
                  cx="12"
                  cy="48"
                  r="2.5"
                  fill="#ffa21d"
                ></circle>
                <circle
                  cx="130"
                  cy="21"
                  r="2.5"
                  fill="#d34ae7"
                ></circle>
              </g>
              {'\n '}
              <path
                d="M13 71 69 43 128 70 72 98Z"
                fill="url(#anim-build-cool)"
                opacity=".38"
                stroke="url(#anim-build-line)"
                strokeWidth=".8"
                strokeOpacity=".7"
              ></path>
              {'\n '}
              <g className="service-part build-back">
                <path
                  d="M57 29 94 11 124 25 87 44Z"
                  fill="url(#anim-build-cool)"
                  stroke="url(#anim-build-line)"
                  strokeWidth=".8"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M57 29 87 44 87 79 57 65Z"
                  fill="url(#anim-build-pink)"
                  opacity=".62"
                ></path>
                <path
                  d="M87 44 124 25 124 60 87 79Z"
                  fill="url(#anim-build-cool)"
                  opacity=".6"
                ></path>
                <path
                  d="M57 29 87 44 87 79 57 65Z"
                  fill="url(#anim-build-sheen)"
                  opacity=".42"
                ></path>
                <path
                  d="M57 29 87 44 124 25 M87 44v35"
                  fill="none"
                  stroke="#f4ddff"
                  strokeWidth=".75"
                  opacity=".7"
                ></path>
                <path
                  d="M57 29 94 11 124 25"
                  fill="none"
                  stroke="#fff5fd"
                  strokeWidth=".8"
                  opacity=".75"
                ></path>
                <path
                  d="M57 29 94 11 124 25 87 44Z"
                  fill="url(#anim-build-sheen)"
                  opacity=".75"
                ></path>
                <circle
                  cx="88"
                  cy="39"
                  r="16"
                  fill="url(#anim-build-glint)"
                ></circle>
              </g>
              {'\n '}
              <g className="service-part build-front">
                <path
                  d="M23 53 53 38 84 52 53 68Z"
                  fill="url(#anim-build-warm)"
                  stroke="url(#anim-build-line)"
                  strokeWidth=".9"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M23 53 53 68 53 90 23 76Z"
                  fill="url(#anim-build-warm)"
                  opacity=".7"
                ></path>
                <path
                  d="M53 68 84 52 84 74 53 90Z"
                  fill="url(#anim-build-pink)"
                  opacity=".65"
                ></path>
                <path
                  d="M23 53 53 38 84 52 53 68Z"
                  fill="url(#anim-build-sheen)"
                ></path>
                <path
                  d="M23 53 53 68 53 90 23 76Z"
                  fill="url(#anim-build-sheen)"
                  opacity=".48"
                ></path>
                <path
                  d="M23 53 53 68 84 52 M53 68v22"
                  fill="none"
                  stroke="#ffedf1"
                  strokeWidth=".75"
                  opacity=".7"
                ></path>
                <path
                  d="M23 53 53 38 84 52"
                  fill="none"
                  stroke="#fff5e6"
                  strokeWidth=".8"
                  opacity=".7"
                ></path>
              </g>
              {'\n '}
              <g className="service-part build-panel">
                <path
                  d="M63 54 91 40 116 52 88 67Z"
                  fill="url(#anim-build-pink)"
                  stroke="url(#anim-build-line)"
                  strokeWidth=".8"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M63 54 88 67 88 84 63 73Z"
                  fill="url(#anim-build-pink)"
                  opacity=".62"
                ></path>
                <path
                  d="M88 67 116 52 116 69 88 84Z"
                  fill="url(#anim-build-cool)"
                  opacity=".56"
                ></path>
              </g>
            </svg>
          </Illustration>
          <h3>{t('service2', 'Build and evolve')}</h3>
          <p>
            {t(
              'desc2',
              'Build scalable web applications, develop new features and evolve existing products with hands-on engineering expertise.'
            )}
          </p>
        </div>
        <div className="service service-3">
          <Illustration
            className="service-art"
            asset="service-learn"
          >
            <svg
              className="service-illustration"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 100"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                {'\n '}
                <linearGradient
                  id="anim-learn-warm"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ffe2a3"
                    stopOpacity=".96"
                  ></stop>
                  <stop
                    offset=".38"
                    stopColor="#ffa83e"
                    stopOpacity=".88"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ff8498"
                    stopOpacity=".49"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="anim-learn-pink"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ffc0a0"
                    stopOpacity=".88"
                  ></stop>
                  <stop
                    offset=".47"
                    stopColor="#f768b5"
                    stopOpacity=".78"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#d16be8"
                    stopOpacity=".48"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="anim-learn-cool"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#dec6ff"
                    stopOpacity=".82"
                  ></stop>
                  <stop
                    offset=".55"
                    stopColor="#a482f4"
                    stopOpacity=".7"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#82a2ff"
                    stopOpacity=".46"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient id="anim-learn-line">
                  <stop stopColor="#ffb657"></stop>
                  <stop
                    offset=".52"
                    stopColor="#eb82ce"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#9d9df6"
                  ></stop>
                </linearGradient>
                {'\n '}
                <radialGradient
                  id="anim-learn-sheen"
                  cx="40%"
                  cy="22%"
                  r="85%"
                >
                  <stop
                    stopColor="#fff8ec"
                    stopOpacity=".7"
                  ></stop>
                  <stop
                    offset=".35"
                    stopColor="#fff1f2"
                    stopOpacity=".24"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#fff"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                {'\n '}
                <radialGradient id="anim-learn-glint">
                  <stop
                    stopColor="#fffdf2"
                    stopOpacity=".8"
                  ></stop>
                  <stop
                    offset=".3"
                    stopColor="#fff2e8"
                    stopOpacity=".3"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#fff"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                {'\n '}
                <filter
                  id="anim-learn-ambient"
                  x="-100%"
                  y="-150%"
                  width="300%"
                  height="400%"
                >
                  <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                </filter>
              </defs>
              <ellipse
                cx="69"
                cy="65"
                rx="50"
                ry="18"
                fill="#d19ce9"
                opacity=".27"
                filter="url(#anim-learn-ambient)"
              ></ellipse>
              {'\n '}
              <g className="service-part learn-back">
                <path
                  d="M23 67 23 35 Q23 27 31 24 L76 7 Q84 5 84 13 L84 43 Q84 51 76 54 L32 71 Q23 74 23 67Z"
                  fill="url(#anim-learn-cool)"
                  stroke="url(#anim-learn-line)"
                  strokeWidth=".8"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M23 67 23 35 Q23 27 31 24 L76 7 Q84 5 84 13 L84 43 Q84 51 76 54 L32 71 Q23 74 23 67Z"
                  fill="url(#anim-learn-sheen)"
                  opacity=".7"
                ></path>
              </g>
              {'\n '}
              <g className="service-part learn-middle">
                <path
                  d="M48 51 Q48 42 60 38 L104 23 Q114 20 114 30 L114 61 Q114 70 105 71 C92 70 78 63 64 59 Q48 56 48 51Z"
                  fill="url(#anim-learn-pink)"
                  stroke="url(#anim-learn-line)"
                  strokeWidth=".8"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M48 51 Q48 42 60 38 L104 23 Q114 20 114 30 L114 61 Q114 70 105 71 C92 70 78 63 64 59 Q48 56 48 51Z"
                  fill="url(#anim-learn-sheen)"
                  opacity=".6"
                ></path>
                <path
                  d="M48 51 C53 45 61 43 72 40 L103 29 Q111 27 112 31 L112 58 C94 54 77 49 62 47 Q52 46 48 51Z"
                  fill="url(#anim-learn-sheen)"
                  opacity=".45"
                ></path>
                <path
                  d="M51 48 Q55 43 63 41 L103 26"
                  fill="none"
                  stroke="#fff8fb"
                  strokeWidth=".75"
                  opacity=".7"
                ></path>
                <path
                  d="M50 51 C64 50 81 55 103 64"
                  fill="none"
                  stroke="#fff3fa"
                  strokeWidth=".8"
                  opacity=".65"
                ></path>
                <circle
                  cx="77"
                  cy="48"
                  r="17"
                  fill="url(#anim-learn-glint)"
                  opacity=".7"
                ></circle>
              </g>
              {'\n '}
              <g className="service-part learn-front">
                <path
                  d="M18 81 Q18 73 29 70 L78 55 Q93 51 97 47 L97 69 Q97 78 86 81 L29 96 Q18 99 18 90Z"
                  fill="url(#anim-learn-warm)"
                  opacity=".78"
                  stroke="url(#anim-learn-line)"
                  strokeWidth=".8"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M23 86 Q24 77 36 73 L77 60 Q88 57 96 51 L96 66 Q96 72 85 75 L37 88 Q27 91 23 86Z"
                  fill="url(#anim-learn-pink)"
                  opacity=".2"
                ></path>
                <path
                  d="M20 81 Q20 74 30 72 L78 57"
                  fill="none"
                  stroke="#fff5e7"
                  strokeWidth=".75"
                  opacity=".7"
                ></path>
              </g>
              {'\n '}
              <g className="service-orbit">
                <path
                  d="M12 76 C7 55 32 35 66 26 C91 19 112 21 124 31"
                  fill="none"
                  stroke="url(#anim-learn-line)"
                  strokeWidth="1.15"
                  opacity=".85"
                ></path>
                <circle
                  cx="12"
                  cy="76"
                  r="2.6"
                  fill="#ffa137"
                ></circle>
                <circle
                  cx="66"
                  cy="26"
                  r="2.5"
                  fill="#c858e8"
                ></circle>
                <circle
                  cx="124"
                  cy="31"
                  r="2.5"
                  fill="#b563ef"
                ></circle>
              </g>
            </svg>
          </Illustration>
          <h3>{t('service3', 'Learn and improve')}</h3>
          <p>
            {t(
              'desc3',
              'Validate ideas, test assumptions and turn real user insights into measurable product improvements.'
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
