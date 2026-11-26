import { useLocale } from './Locale'
export function Experience() {
  const { t, locale, setLocale } = useLocale()

  return (
    <section
      className="wrap section reveal"
      id="experience"
    >
      <div className="split">
        <h2>{t('brandsTitle', 'Experience across brands')}</h2>
        <p className="intro">
          {t('brandsDesc', 'Brands Matheus has worked with as a freelancer or full-time employee.')}
        </p>
      </div>
      <div className="brand-grid">
        <img
          src="/preview/assets/iveco.svg"
          alt="IVECO"
        />
        <img
          src="/preview/assets/dazn.svg"
          alt="DAZN"
        />
        <img
          src="/preview/assets/hotmart.svg"
          alt="Hotmart"
        />
      </div>
    </section>
  )
}
