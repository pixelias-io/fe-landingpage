import { useLocale } from './Locale'
export function Footer() {
  const { t, locale, setLocale } = useLocale()

  return (
    <footer className="footer">
      <div className="wrap">
        <span>{'© Pixelias · Belo Horizonte, Brazil'}</span>
        <span>
          <a
            className="social-link"
            href="https://www.linkedin.com/company/pixelias/"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3ZM6.5 7.65a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-5.35c0-1.28-.46-2.15-1.59-2.15-1.24 0-1.91.83-1.91 2.15V19h-3V9h2.88v1.37h.04a3.15 3.15 0 0 1 2.84-1.56C18.3 8.81 19 10.77 19 13.32Z"
              ></path>
            </svg>
            <span>{'LinkedIn'}</span>
          </a>{' '}
          <a
            className="social-link"
            href="https://github.com/pixelias-io"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              ></path>
            </svg>
            <span>{'GitHub'}</span>
          </a>
        </span>
      </div>
    </footer>
  )
}
