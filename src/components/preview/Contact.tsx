import { useLocale } from './Locale'
import { useContactForm } from './useContactForm'
export function Contact() {
  const { t, locale, setLocale } = useLocale()
  const { formRef, formAction, errors, handleBlur, handleInput, handleSubmit } = useContactForm(locale)
  return (
    <section
      className="contact"
      id="contact"
    >
      <span
        className="contact-accent"
        aria-hidden="true"
      >
        <i></i>
        <i></i>
      </span>
      <div className="wrap contact-grid">
        <div>
          <h2>{t('contactTitle', 'Let’s build together.')}</h2>
          <p>
            {t(
              'contactDesc',
              'Have an idea or a project in progress? Tell us what you’re working on and how we can help.'
            )}
          </p>
        </div>
        <form
          id="contactForm"
          action={formAction}
          method="POST"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="formgrid">
            <div className="form-field">
              <label>
                <span>{t('name', 'Name')}</span>
                {' *'}
                <input
                  name="name"
                  autoComplete="name"
                  required={true}
                  aria-describedby="name-error"
                  onBlur={handleBlur}
                  onInput={handleInput}
                  aria-invalid={Boolean(errors.name)}
                />
              </label>
              <span
                className="field-error"
                id="name-error"
                aria-live="polite"
              >
                {errors.name || ''}
              </span>
            </div>
            <label>
              <span>{t('company', 'Company (optional)')}</span>
              <input
                name="company"
                autoComplete="organization"
              />
            </label>
            <div className="form-field full">
              <label>
                <span>{t('email', 'Email')}</span>
                {' *'}
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required={true}
                  aria-describedby="email-error"
                  onBlur={handleBlur}
                  onInput={handleInput}
                  aria-invalid={Boolean(errors.email)}
                />
              </label>
              <span
                className="field-error"
                id="email-error"
                aria-live="polite"
              >
                {errors.email || ''}
              </span>
            </div>
            <div className="form-field full">
              <label>
                <span>{t('message', 'Project details')}</span>
                {' *'}
                <textarea
                  name="message"
                  required={true}
                  aria-describedby="message-hint message-error"
                  onBlur={handleBlur}
                  onInput={handleInput}
                  aria-invalid={Boolean(errors.message)}
                ></textarea>
              </label>
              <span
                className="field-error"
                id="message-error"
                aria-live="polite"
              >
                {errors.message || ''}
              </span>
              <small id="message-hint">
                {t('messageHint', 'What are you building or improving, and where could you use support?')}
              </small>
            </div>
          </div>
          <button
            className="btn formbtn"
            type="submit"
            disabled={!formAction}
          >
            {t('send', 'Send message')}
          </button>
          {!formAction && (
            <p role="status">
              {locale === 'pt' ?
                'O formulário está indisponível no momento.'
              : 'The contact form is currently unavailable.'}
            </p>
          )}
          <p className="required-note">{t('requiredNote', '* Required fields')}</p>
          <p
            className="form-status"
            role="status"
            aria-live="polite"
          ></p>
        </form>
      </div>
    </section>
  )
}
