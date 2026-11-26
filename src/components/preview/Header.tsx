import { useLocale } from './Locale'
import { useMotion } from './MotionPreference'
export function Header() {
  const { t, locale, setLocale } = useLocale()
  const { paused, toggle } = useMotion()

  return (
    <header>
      <div className="wrap">
        <nav aria-label={locale === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          <a
            className="brand"
            href="#top"
          >
            <img
              src="/preview/assets/logo.svg"
              alt="Pixelias"
            />
          </a>
          <div className="links">
            <a href="#services">{t('navServices', 'What we do')}</a>
            <a href="#process">{t('navProcess', 'How we work')}</a>
            <a href="#about">{t('navAbout', 'About')}</a>
            <a href="#contact">{t('navContact', 'Contact')}</a>
            <button
              type="button"
              className="motion-control"
              onClick={toggle}
            >
              {locale === 'pt' ?
                paused ?
                  'Retomar animações'
                : 'Pausar animações'
              : paused ?
                'Resume motion'
              : 'Pause motion'}
            </button>
            <div
              className="lang"
              aria-label={locale === 'pt' ? 'Idioma' : 'Language'}
            >
              <button
                type="button"
                data-lang="en"
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
              >
                {'EN'}
              </button>
              <button
                type="button"
                data-lang="pt"
                onClick={() => setLocale('pt')}
                aria-pressed={locale === 'pt'}
              >
                {'PT'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
