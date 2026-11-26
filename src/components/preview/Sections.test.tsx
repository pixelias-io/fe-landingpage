import { fireEvent, render, screen, within } from '@testing-library/react'
import { LocaleProvider } from './Locale'
import { MotionProvider } from './MotionPreference'
import { Header } from './Header'
import { Hero } from './Hero'
import { Services } from './Services'
import { Experience } from './Experience'
import { Process } from './Process'
import { About } from './About'
import { Footer } from './Footer'
import type { ReactNode } from 'react'

// The animation lifecycle is exercised separately; this checks the section-to-asset mapping.
jest.mock('./Illustration', () => ({
  Illustration: ({ asset, children }: { asset: string; children: ReactNode }) => (
    <span
      data-testid="illustration"
      data-asset={asset}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}))
function renderWithPreferences(node: ReactNode) {
  return render(
    <LocaleProvider>
      <MotionProvider>{node}</MotionProvider>
    </LocaleProvider>
  )
}

describe('Header and locale', () => {
  test('links to the page sections and switches language and motion controls', () => {
    renderWithPreferences(
      <>
        <Header />
        <About />
      </>
    )
    expect(screen.getByRole('link', { name: 'Pixelias' })).toHaveAttribute('href', '#top')
    for (const [name, target] of [
      ['What we do', '#services'],
      ['How we work', '#process'],
      ['About', '#about'],
      ['Contact', '#contact']
    ]) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', target)
    }
    fireEvent.click(screen.getByRole('button', { name: 'PT' }))
    expect(document.documentElement).toHaveAttribute('lang', 'pt')
    expect(screen.getByRole('button', { name: 'PT' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('navigation', { name: 'Navegação principal' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Matheus Moreira, fundador da Pixelias' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Pausar animações' }))
    expect(screen.getByRole('button', { name: 'Retomar animações' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'EN' }))
    expect(document.documentElement).toHaveAttribute('lang', 'en')
    expect(screen.getByRole('button', { name: 'Resume motion' })).toBeInTheDocument()
  })
})

test('Hero contains the approved headline, contact and services navigation and decorative artwork', () => {
  const { container } = renderWithPreferences(<Hero />)
  expect(screen.getByRole('heading', { level: 1, name: 'Great things are built together.' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Let’s work together' })).toHaveAttribute('href', '#contact')
  expect(screen.getByRole('link', { name: 'What we do' })).toHaveAttribute('href', '#services')
  expect(container.querySelector('.art')).toHaveAttribute('aria-hidden', 'true')
})

test('Services associates the three distinct offerings with their decorative animations', () => {
  renderWithPreferences(<Services />)
  for (const name of ['Launch and grow', 'Build and evolve', 'Learn and improve'])
    expect(screen.getByRole('heading', { name })).toBeInTheDocument()
  expect(screen.getAllByTestId('illustration').map((el) => el.getAttribute('data-asset'))).toEqual([
    'launch-prototype',
    'service-build',
    'service-learn'
  ])
  expect(screen.getAllByTestId('illustration').every((el) => el.getAttribute('aria-hidden') === 'true')).toBe(true)
})

test('Process presents four steps with their corresponding decorative animations', () => {
  renderWithPreferences(<Process />)
  for (const name of ['Understand', 'Shape', 'Build', 'Improve'])
    expect(screen.getByRole('heading', { name })).toBeInTheDocument()
  expect(screen.getAllByTestId('illustration').map((el) => el.getAttribute('data-asset'))).toEqual([
    'process-understand',
    'process-shape',
    'process-build',
    'process-improve'
  ])
})

test('Experience identifies the three brands without implying a client relationship', () => {
  renderWithPreferences(<Experience />)
  expect(screen.getByText(/freelancer or full-time employee/i)).toBeInTheDocument()
  for (const name of ['IVECO', 'DAZN', 'Hotmart'])
    expect(screen.getByRole('img', { name })).toHaveAttribute('src', expect.stringContaining('/preview/assets/'))
})

test('About preserves founder attribution and an accessible portrait', () => {
  renderWithPreferences(<About />)
  expect(screen.getByRole('heading', { name: 'Meet Matheus Moreira' })).toBeInTheDocument()
  expect(screen.getByText('Founder')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Matheus Moreira, founder of Pixelias' })).toHaveAttribute(
    'src',
    '/preview/assets/founder.png'
  )
})

test('Footer exposes correctly named social links and destination URLs', () => {
  renderWithPreferences(<Footer />)
  const footer = screen.getByRole('contentinfo')
  expect(within(footer).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/company/pixelias/'
  )
  expect(within(footer).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/pixelias-io')
})
