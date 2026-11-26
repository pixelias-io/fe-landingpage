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
                  id="anim-launch-warm"
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
                  id="anim-launch-pink"
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
                  id="anim-launch-cool"
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
                <linearGradient id="anim-launch-line">
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
                  id="anim-launch-sheen"
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
                <radialGradient id="anim-launch-glint">
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
                  id="anim-launch-ambient"
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
                cy="64"
                rx="50"
                ry="20"
                fill="#e9a5df"
                opacity=".27"
                filter="url(#anim-launch-ambient)"
              ></ellipse>
              {'\n '}
              <g className="service-part launch-back">
                <path
                  d="M20 88 C29 76 28 57 29 47 Q29 40 36 37 L111 10 Q121 7 119 18 C113 54 78 80 20 88Z"
                  fill="url(#anim-launch-cool)"
                  stroke="url(#anim-launch-line)"
                  strokeWidth="1"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M20 88 C29 76 28 57 29 47 Q29 40 36 37 L111 10 Q121 7 119 18 C113 54 78 80 20 88Z"
                  fill="url(#anim-launch-sheen)"
                ></path>
                <path
                  d="M30 47 Q30 42 36 39 L110 12 Q118 9 117 18 C108 42 85 58 63 69 C76 52 75 37 69 26 L36 39Z"
                  fill="url(#anim-launch-pink)"
                  opacity=".35"
                ></path>
                <path
                  d="M25 77 Q28 62 35 53 L90 30 Q101 26 98 35 C88 52 64 69 25 77Z"
                  fill="url(#anim-launch-warm)"
                  opacity=".29"
                ></path>
                <path
                  d="M32 51 C43 42 72 30 108 15"
                  fill="none"
                  stroke="#fff7ff"
                  strokeWidth="1"
                  opacity=".6"
                ></path>
                <path
                  d="M28 79 C57 74 91 54 113 23"
                  fill="none"
                  stroke="#cbb8ff"
                  strokeWidth="1"
                  opacity=".55"
                ></path>
                <path
                  d="M30 46 Q31 41 37 39 L109 12"
                  fill="none"
                  stroke="#fff6fb"
                  strokeWidth=".75"
                  opacity=".75"
                ></path>
              </g>
              {'\n '}
              <g className="service-part launch-middle">
                <path
                  d="M20 88 C27 76 25 66 25 60 Q25 54 32 51 L80 31 Q90 28 88 37 C80 61 52 82 20 88Z"
                  fill="url(#anim-launch-pink)"
                  stroke="url(#anim-launch-line)"
                  strokeWidth=".9"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M20 88 C27 76 25 66 25 60 Q25 54 32 51 L80 31 Q90 28 88 37 C80 61 52 82 20 88Z"
                  fill="url(#anim-launch-sheen)"
                  opacity=".6"
                ></path>
                <path
                  d="M26 61 Q26 56 32 53 L79 33 Q87 30 86 37 C82 51 68 64 54 72 C61 58 61 48 56 42 L32 53Z"
                  fill="url(#anim-launch-warm)"
                  opacity=".2"
                ></path>
                <path
                  d="M26 83 C49 76 70 61 84 40"
                  fill="none"
                  stroke="#ffe0ea"
                  strokeWidth=".9"
                  opacity=".65"
                ></path>
                <path
                  d="M27 60 Q28 56 33 54 L78 33"
                  fill="none"
                  stroke="#fff4eb"
                  strokeWidth=".7"
                  opacity=".7"
                ></path>
                <circle
                  cx="51"
                  cy="58"
                  r="17"
                  fill="url(#anim-launch-glint)"
                  opacity=".7"
                ></circle>
              </g>
              {'\n '}
              <g className="service-part launch-front">
                <path
                  d="M20 88 C24 79 22 74 22 70 Q22 66 27 63 L52 53 Q62 50 60 57 C55 70 38 82 20 88Z"
                  fill="url(#anim-launch-warm)"
                  stroke="url(#anim-launch-line)"
                  strokeWidth=".8"
                  strokeOpacity=".7"
                ></path>
                <path
                  d="M23 70 Q24 67 28 65 L51 55"
                  fill="none"
                  stroke="#fff7de"
                  strokeWidth=".8"
                  opacity=".75"
                ></path>
              </g>
              {'\n '}
              <g className="service-orbit">
                <path
                  d="M11 72 C21 54 35 44 50 41 C73 36 94 44 124 19"
                  fill="none"
                  stroke="url(#anim-launch-line)"
                  strokeWidth=".9"
                  opacity=".72"
                ></path>
                <circle
                  cx="11"
                  cy="72"
                  r="2.6"
                  fill="#ffa31e"
                ></circle>
                <circle
                  cx="50"
                  cy="41"
                  r="2.3"
                  fill="#ff8c39"
                ></circle>
                <circle
                  cx="124"
                  cy="19"
                  r="2.6"
                  fill="#cf40e8"
                ></circle>
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
