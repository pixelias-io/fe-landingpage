import { fireEvent, render, screen } from '@testing-library/react'
import { LocaleProvider } from './Locale'
import { Header } from './Header'
import { Contact } from './Contact'

test('language selection translates the page controls and existing validation errors', () => {
  process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN = 'test-destination'
  render(
    <LocaleProvider>
      <Header />
      <Contact />
    </LocaleProvider>
  )
  fireEvent.click(screen.getByRole('button', { name: 'Send message' }))
  expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: 'Name *' })).toHaveFocus()
  expect(screen.getByRole('textbox', { name: 'Name *' })).toHaveAccessibleDescription('Please enter your name.')
  fireEvent.click(screen.getByRole('button', { name: 'PT' }))
  expect(screen.getByRole('navigation', { name: 'Navegação principal' })).toBeInTheDocument()
  expect(screen.getByText('Informe seu nome.')).toBeInTheDocument()
  expect(screen.getByText('Informe um endereço de e-mail válido.')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'PT' })).toHaveAttribute('aria-pressed', 'true')
})

test('disables the contact form when its destination is not configured', () => {
  delete process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN
  render(
    <LocaleProvider>
      <Contact />
    </LocaleProvider>
  )
  expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()
  expect(screen.getByText('The contact form is currently unavailable.')).toBeInTheDocument()
})
