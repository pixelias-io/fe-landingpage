import { fireEvent, render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import { Header } from './Header'
import { LocaleProvider } from './Locale'

const originalToken = process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN
afterEach(() => {
  if (originalToken === undefined) delete process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN
  else process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN = originalToken
})

test('validates on blur, clears corrected errors, and accepts valid input without sending it', () => {
  process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN = 'test-destination'
  const { container } = render(
    <LocaleProvider>
      <Contact />
    </LocaleProvider>
  )
  const email = screen.getByRole('textbox', { name: 'Email *' })
  fireEvent.input(email, { target: { value: 'invalid' } })
  fireEvent.blur(email)
  expect(email).toHaveAttribute('aria-invalid', 'true')
  expect(email).toHaveAccessibleDescription('Please enter a valid email address.')
  fireEvent.input(email, { target: { value: 'person@example.test' } })
  expect(email).toHaveAttribute('aria-invalid', 'false')
  fireEvent.input(screen.getByRole('textbox', { name: 'Name *' }), { target: { value: 'Test Person' } })
  fireEvent.input(screen.getByRole('textbox', { name: 'Project details *' }), { target: { value: 'A test project' } })
  const form = container.querySelector('form')!
  expect(form).toHaveAttribute('action', 'https://formsubmit.co/test-destination')
  // Dispatching a synthetic event verifies validation without making a network request.
  expect(fireEvent.submit(form)).toBe(true)
})

test('localizes displayed errors and blocks direct submission without a destination', () => {
  process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN = 'test-destination'
  const { container, unmount } = render(
    <LocaleProvider>
      <Header />
      <Contact />
    </LocaleProvider>
  )
  fireEvent.submit(container.querySelector('form')!)
  fireEvent.click(screen.getByRole('button', { name: 'PT' }))
  const name = screen.getByRole('textbox', { name: 'Nome *' })
  expect(name).toHaveAccessibleDescription('Informe seu nome.')
  expect(name).toHaveAttribute('aria-invalid', 'true')
  unmount()
  delete process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN
  const missing = render(
    <LocaleProvider>
      <Contact />
    </LocaleProvider>
  )
  expect(fireEvent.submit(missing.container.querySelector('form')!)).toBe(false)
  expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()
})
