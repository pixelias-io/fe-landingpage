import { useLocale } from './Locale'
export function About() {
  const { t, locale, setLocale } = useLocale()

  return (
    <section
      className="wrap section founder reveal"
      id="about"
    >
      <span
        className="founder-accent"
        aria-hidden="true"
      >
        <i></i>
        <i></i>
      </span>
      <div className="portrait">
        <img
          src="/preview/assets/founder.png"
          alt={locale === 'pt' ? 'Matheus Moreira, fundador da Pixelias' : 'Matheus Moreira, founder of Pixelias'}
        />
      </div>
      <div>
        <h2>{t('founderTitle', 'Meet Matheus Moreira')}</h2>
        <div className="eyebrow">{t('founderLabel', 'Founder')}</div>
        <p>
          {t(
            'bio',
            'Matheus Moreira is a senior software engineer and founder of Pixelias, with over a decade of web development experience, including work with international teams at DAZN and Hotmart.'
          )}
        </p>
        <p>
          {t(
            'bio2',
            'His experience spans content management and video streaming platforms, as well as financial and invoicing products. He has helped evolve established applications in production and improve automated testing and engineering quality.'
          )}
        </p>
      </div>
    </section>
  )
}
