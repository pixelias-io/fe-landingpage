import { Illustration } from './Illustration'
import { useLocale } from './Locale'
export function Process() {
  const { t, locale, setLocale } = useLocale()

  return (
    <section
      className="wrap section reveal"
      id="process"
    >
      <div className="split">
        <h2>{t('navProcess', 'How we work')}</h2>
        <p className="intro">{t('processIntro', 'A flexible process that adapts to your project, team, and goals.')}</p>
      </div>
      <div className="process">
        <div className="step">
          <Illustration
            className="step-art"
            asset="process-understand"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 100"
            >
              <defs>
                {'\n '}
                <linearGradient
                  id="ref-under-warm"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ffbd56"
                    stopOpacity=".8"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ff7b9d"
                    stopOpacity=".18"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="ref-under-pink"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ff9772"
                    stopOpacity=".55"
                  ></stop>
                  <stop
                    offset=".53"
                    stopColor="#fa62c6"
                    stopOpacity=".45"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#b36bfb"
                    stopOpacity=".20"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="ref-under-cool"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#f188db"
                    stopOpacity=".5"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#8278f4"
                    stopOpacity=".43"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient id="ref-under-line">
                  <stop stopColor="#ffac38"></stop>
                  <stop
                    offset=".5"
                    stopColor="#ee8ccf"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#9c71f4"
                  ></stop>
                </linearGradient>
                {'\n '}
                <radialGradient id="ref-under-light">
                  <stop
                    stopColor="#fff6da"
                    stopOpacity=".76"
                  ></stop>
                  <stop
                    offset=".3"
                    stopColor="#ffb1c8"
                    stopOpacity=".3"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ee9bea"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                {'\n '}
                <linearGradient
                  id="ref-under-fade"
                  gradientUnits="userSpaceOnUse"
                  x1="23"
                  y1="0"
                  x2="44"
                  y2="0"
                >
                  <stop
                    stopColor="white"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="white"
                  ></stop>
                </linearGradient>
                <mask
                  id="ref-under-soft-edge"
                  maskUnits="userSpaceOnUse"
                  x="10"
                  y="0"
                  width="130"
                  height="100"
                >
                  <rect
                    x="10"
                    y="0"
                    width="130"
                    height="100"
                    fill="url(#ref-under-fade)"
                  ></rect>
                </mask>
                <filter
                  id="ref-under-node-glow"
                  x="-250%"
                  y="-250%"
                  width="600%"
                  height="600%"
                >
                  <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                </filter>
                <filter
                  id="ref-under-blur"
                  x="-40%"
                  y="-60%"
                  width="180%"
                  height="220%"
                >
                  <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                </filter>
                {'\n '}
              </defs>
              <ellipse
                cx="67"
                cy="56"
                rx="50"
                ry="29"
                fill="#ed86cf"
                opacity=".39"
                filter="url(#ref-under-blur)"
              ></ellipse>
              {'\n '}
              <path
                d="M29 30 C47 31 63 41 78 50 C94 60 109 58 125 18 C116 51 103 68 84 63 C65 58 49 48 29 50Z"
                fill="url(#ref-under-warm)"
                opacity=".55"
                filter="url(#ref-under-blur)"
              ></path>
              {'\n '}
              <path
                mask="url(#ref-under-soft-edge)"
                className="ambient-plane"
                d="M29 30 C47 31 62 39 78 49 C93 58 105 58 113 39 C107 59 99 68 84 63 C65 59 48 47 29 51Z"
                fill="url(#ref-under-pink)"
                opacity=".44"
              ></path>
              {'\n '}
              <path
                mask="url(#ref-under-soft-edge)"
                d="M29 32 C47 33 60 39 77 49 C62 48 46 43 29 49Z"
                fill="url(#ref-under-warm)"
                opacity=".48"
              ></path>
              {'\n '}
              <path
                mask="url(#ref-under-soft-edge)"
                d="M29 52 C48 46 61 56 80 65 C96 74 107 59 114 39 C110 67 105 78 94 79 C72 78 56 67 36 82 C40 67 35 60 29 52Z"
                fill="url(#ref-under-cool)"
                opacity=".38"
              ></path>
              {'\n '}
              <path
                d="M11 77 C24 58 33 49 43 53 C63 59 76 76 91 73 C111 70 120 38 128 17"
                fill="none"
                stroke="url(#ref-under-line)"
                strokeWidth=".9"
                opacity=".72"
              ></path>
              {'\n '}
              <path
                d="M29 34 C42 23 57 20 77 24"
                fill="none"
                stroke="#ffc695"
                strokeWidth=".75"
                opacity=".4"
              ></path>
              {'\n '}
              <path
                d="M37 82 C53 65 65 71 78 74"
                fill="none"
                stroke="#b899f1"
                strokeWidth=".65"
                opacity=".25"
              ></path>
              {'\n '}
              <circle
                cx="11"
                cy="77"
                r="6.5"
                fill="#ffae38"
                opacity=".5"
                filter="url(#ref-under-node-glow)"
              ></circle>
              <circle
                cx="43"
                cy="53"
                r="6.5"
                fill="#ff9e45"
                opacity=".45"
                filter="url(#ref-under-node-glow)"
              ></circle>
              <circle
                cx="91"
                cy="73"
                r="6.5"
                fill="#a064ff"
                opacity=".45"
                filter="url(#ref-under-node-glow)"
              ></circle>
              <circle
                cx="128"
                cy="17"
                r="6.5"
                fill="#f052e7"
                opacity=".5"
                filter="url(#ref-under-node-glow)"
              ></circle>
              <circle
                cx="11"
                cy="77"
                r="3.2"
                fill="#ff9e13"
              ></circle>
              <circle
                cx="43"
                cy="53"
                r="3.1"
                fill="#ff8826"
              ></circle>
              <circle
                cx="91"
                cy="73"
                r="3"
                fill="#a945fa"
              ></circle>
              <circle
                cx="128"
                cy="17"
                r="3.3"
                fill="#e52dec"
              ></circle>
              <circle
                cx="77"
                cy="24"
                r="2.5"
                fill="#ffa019"
              ></circle>
            </svg>
          </Illustration>
          <h3>{t('step1', 'Understand')}</h3>
          <p>{t('step1d', 'Get to know your goals and users.')}</p>
        </div>
        <div className="step">
          <Illustration
            className="step-art"
            asset="process-shape"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 100"
            >
              <defs>
                {'\n '}
                <linearGradient
                  id="ref-shape-warm"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ffd277"
                    stopOpacity=".96"
                  ></stop>
                  <stop
                    offset=".55"
                    stopColor="#ffb45c"
                    stopOpacity=".74"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ff9697"
                    stopOpacity=".48"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="ref-shape-pink"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ff9772"
                    stopOpacity=".55"
                  ></stop>
                  <stop
                    offset=".53"
                    stopColor="#fa62c6"
                    stopOpacity=".45"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#b36bfb"
                    stopOpacity=".20"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="ref-shape-cool"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#f188db"
                    stopOpacity=".5"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#8278f4"
                    stopOpacity=".43"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient id="ref-shape-line">
                  <stop stopColor="#ffac38"></stop>
                  <stop
                    offset=".5"
                    stopColor="#ee8ccf"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#9c71f4"
                  ></stop>
                </linearGradient>
                {'\n '}
                <radialGradient id="ref-shape-light">
                  <stop
                    stopColor="#fffdf0"
                    stopOpacity=".9"
                  ></stop>
                  <stop
                    offset=".3"
                    stopColor="#ffcf86"
                    stopOpacity=".38"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ee9bea"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                {'\n '}
                <filter
                  id="ref-shape-blur"
                  x="-40%"
                  y="-60%"
                  width="180%"
                  height="220%"
                >
                  <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                </filter>
                {'\n '}
              </defs>
              <ellipse
                cx="70"
                cy="79"
                rx="50"
                ry="13"
                fill="#c06ce9"
                opacity=".32"
                filter="url(#ref-shape-blur)"
              ></ellipse>
              {'\n '}
              <path
                className="ambient-plane"
                d="M19 69 68 44 121 68 70 95Z"
                fill="url(#ref-shape-cool)"
              ></path>
              {'\n '}
              <path
                className="ambient-plane"
                d="M17 51 69 24 122 49 70 76Z"
                fill="url(#ref-shape-pink)"
              ></path>
              {'\n '}
              <path
                className="ambient-plane"
                d="M29 34 69 14 109 34 70 54Z"
                fill="url(#ref-shape-warm)"
              ></path>
              {'\n '}
              <ellipse
                cx="70"
                cy="35"
                rx="34"
                ry="23"
                fill="url(#ref-shape-light)"
              ></ellipse>
              {'\n '}
              <path
                d="M13 28 69 3 126 27 70 53Z"
                fill="none"
                stroke="url(#ref-shape-line)"
                strokeWidth=".8"
                opacity=".7"
              ></path>
              {'\n '}
              <path
                d="M8 82 Q8 65 17 57"
                fill="none"
                stroke="#ffc269"
                strokeWidth=".8"
                opacity=".65"
              ></path>
              {'\n '}
              <circle
                cx="8"
                cy="82"
                r="2.5"
                fill="#ffa21d"
              ></circle>
              <circle
                cx="13"
                cy="28"
                r="2.2"
                fill="#ffac24"
              ></circle>
              <circle
                cx="126"
                cy="27"
                r="2.2"
                fill="#dc3af1"
              ></circle>
            </svg>
          </Illustration>
          <h3>{t('step2', 'Shape')}</h3>
          <p>{t('step2d', 'Agree on a practical direction.')}</p>
        </div>
        <div className="step">
          <Illustration
            className="step-art"
            asset="process-build"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 100"
            >
              <defs>
                <linearGradient
                  id="process-build-warm"
                  x2="1"
                  y2="1"
                >
                  <stop stopColor="#ffb52e"></stop>
                  <stop
                    offset="1"
                    stopColor="#ff777c"
                    stopOpacity=".35"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="process-build-pink"
                  x2="1"
                  y2="1"
                >
                  <stop stopColor="#ff4ca8"></stop>
                  <stop
                    offset="1"
                    stopColor="#ef42e8"
                    stopOpacity=".4"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="process-build-cool"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#dd3ff4"
                    stopOpacity=".8"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#6d8eff"
                    stopOpacity=".35"
                  ></stop>
                </linearGradient>
                <linearGradient id="process-build-line">
                  <stop stopColor="#ffae27"></stop>
                  <stop
                    offset=".5"
                    stopColor="#ff58a5"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#9c3cff"
                  ></stop>
                </linearGradient>
                <radialGradient id="process-build-glint">
                  <stop
                    stopColor="#fff"
                    stopOpacity=".85"
                  ></stop>
                  <stop
                    offset=".3"
                    stopColor="#fff4f7"
                    stopOpacity=".36"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#fff"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                <filter
                  id="process-build-glow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                </filter>
              </defs>
              <ellipse
                cx="70"
                cy="78"
                rx="52"
                ry="12"
                fill="#b67bef"
                opacity=".25"
                filter="url(#process-build-glow)"
              ></ellipse>
              <g
                fill="none"
                stroke="url(#process-build-line)"
                strokeWidth="1"
                opacity=".5"
              >
                <path d="M11 43 48 23 86 42 49 63Z M11 43v30l38 20V63 M86 42v31L49 93"></path>
                <path d="M58 22 96 2 132 20 95 41Z M132 20v36L95 76V41"></path>
              </g>
              <g className="build-block block-1">
                <path
                  d="M47 19 70 7 94 19 70 31Z"
                  fill="#c39aff"
                ></path>
                <path
                  d="M47 19 70 31 70 77 47 65Z"
                  fill="url(#process-build-cool)"
                  opacity=".75"
                ></path>
                <path
                  d="M70 31 94 19 94 65 70 77Z"
                  fill="#945af3"
                  opacity=".42"
                ></path>
                <circle
                  cx="71"
                  cy="34"
                  r="16"
                  fill="url(#process-build-glint)"
                ></circle>
              </g>
              <g className="build-block block-2">
                <path
                  d="M24 59 48 47 72 59 48 71Z"
                  fill="#ffb147"
                  opacity=".65"
                ></path>
                <path
                  d="M24 59 48 71 48 94 24 82Z"
                  fill="url(#process-build-warm)"
                ></path>
                <path
                  d="M48 71 72 59 72 82 48 94Z"
                  fill="#ff777b"
                  opacity=".45"
                ></path>
                <circle
                  cx="48"
                  cy="66"
                  r="14"
                  fill="url(#process-build-glint)"
                ></circle>
              </g>
              <g className="build-block block-3">
                <path
                  d="M70 52 94 40 118 52 94 64Z"
                  fill="#ef3cdb"
                  opacity=".6"
                ></path>
                <path
                  d="M70 52 94 64 94 88 70 76Z"
                  fill="url(#process-build-pink)"
                  opacity=".5"
                ></path>
                <path
                  d="M94 64 118 52 118 76 94 88Z"
                  fill="url(#process-build-cool)"
                  opacity=".55"
                ></path>
                <circle
                  cx="94"
                  cy="61"
                  r="14"
                  fill="url(#process-build-glint)"
                ></circle>
              </g>
              <circle
                cx="11"
                cy="43"
                r="3"
                fill="#aa39ec"
              ></circle>
              <circle
                cx="132"
                cy="20"
                r="3"
                fill="#ff8d38"
              ></circle>
            </svg>
          </Illustration>
          <h3>{t('step3', 'Build')}</h3>
          <p>{t('step3d', 'Design, develop, and review together.')}</p>
        </div>
        <div className="step">
          <Illustration
            className="step-art"
            asset="process-improve"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 100"
            >
              <defs>
                {'\n '}
                <linearGradient
                  id="ref-improve-warm"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ffb63d"
                    stopOpacity=".95"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ff8095"
                    stopOpacity=".45"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="ref-improve-pink"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#ff9772"
                    stopOpacity=".7"
                  ></stop>
                  <stop
                    offset=".53"
                    stopColor="#fa62c6"
                    stopOpacity=".62"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#b36bfb"
                    stopOpacity=".32"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient
                  id="ref-improve-cool"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    stopColor="#f188db"
                    stopOpacity=".5"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#8278f4"
                    stopOpacity=".43"
                  ></stop>
                </linearGradient>
                {'\n '}
                <linearGradient id="ref-improve-line">
                  <stop stopColor="#ffac38"></stop>
                  <stop
                    offset=".5"
                    stopColor="#ee8ccf"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#9c71f4"
                  ></stop>
                </linearGradient>
                {'\n '}
                <radialGradient id="ref-improve-light">
                  <stop
                    stopColor="#fff6da"
                    stopOpacity=".76"
                  ></stop>
                  <stop
                    offset=".3"
                    stopColor="#ffb1c8"
                    stopOpacity=".3"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor="#ee9bea"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                {'\n '}
                <filter
                  id="ref-improve-blur"
                  x="-40%"
                  y="-60%"
                  width="180%"
                  height="220%"
                >
                  <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                </filter>
                {'\n '}
              </defs>
              <ellipse
                cx="48"
                cy="66"
                rx="43"
                ry="28"
                fill="#ffbb86"
                opacity=".3"
                filter="url(#ref-improve-blur)"
              ></ellipse>
              {'\n '}
              <ellipse
                cx="91"
                cy="45"
                rx="43"
                ry="24"
                fill="#cd9bf3"
                opacity=".32"
                filter="url(#ref-improve-blur)"
              ></ellipse>
              {'\n '}
              <path
                className="ambient-plane"
                d="M24 47 52 55 52 94 24 85Z"
                fill="url(#ref-improve-warm)"
              ></path>
              {'\n '}
              <path
                className="ambient-plane"
                d="M42 38 69 45 69 83 42 75Z"
                fill="url(#ref-improve-pink)"
              ></path>
              {'\n '}
              <path
                className="ambient-plane"
                d="M60 29 86 36 86 72 60 65Z"
                fill="url(#ref-improve-pink)"
              ></path>
              {'\n '}
              <path
                className="ambient-plane"
                d="M78 20 102 27 102 62 78 55Z"
                fill="url(#ref-improve-cool)"
              ></path>
              {'\n '}
              <path
                className="ambient-plane"
                d="M95 12 119 18 119 51 95 45Z"
                fill="url(#ref-improve-cool)"
                opacity=".66"
              ></path>
              {'\n '}
              <path
                d="M7 80 C13 62 21 49 30 48 C48 45 59 48 72 41 C93 29 106 12 134 12"
                fill="none"
                stroke="url(#ref-improve-line)"
                strokeWidth=".9"
                opacity=".76"
              ></path>
              {'\n '}
              <circle
                cx="7"
                cy="80"
                r="2.8"
                fill="#ff9f15"
              ></circle>
              <circle
                cx="30"
                cy="48"
                r="2.6"
                fill="#ffaa22"
              ></circle>
              <circle
                cx="134"
                cy="12"
                r="3"
                fill="#ae35f1"
              ></circle>
            </svg>
          </Illustration>
          <h3>{t('step4', 'Improve')}</h3>
          <p>{t('step4d', 'Learn from feedback and iterate.')}</p>
        </div>
      </div>
    </section>
  )
}
