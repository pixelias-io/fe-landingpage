import { render, screen } from '@testing-library/react'
import { Layout } from './Layout'
import { useAcceptedCookieConsent } from '@/modules/cookieconsent/CookieConsent.hooks'

jest.mock('@/modules/cookieconsent/CookieConsent.hooks', () => ({ useAcceptedCookieConsent: jest.fn() }))
jest.mock('next/script', () => ({
  __esModule: true,
  default: ({ src, id }: { src?: string; id?: string }) => (
    <span
      data-testid="analytics-script"
      data-src={src}
      data-script-id={id}
    />
  )
}))

test('legacy layout never adds analytics without consent and adds it after consent', () => {
  ;(useAcceptedCookieConsent as jest.Mock).mockReturnValue(false)
  const { rerender } = render(
    <Layout>
      <p>Page content</p>
    </Layout>
  )
  expect(screen.getByRole('main')).toHaveTextContent('Page content')
  expect(screen.queryByTestId('analytics-script')).not.toBeInTheDocument()
  ;(useAcceptedCookieConsent as jest.Mock).mockReturnValue(true)
  rerender(
    <Layout>
      <p>Page content</p>
    </Layout>
  )
  const scripts = screen.getAllByTestId('analytics-script')
  expect(scripts).toHaveLength(2)
  expect(scripts[0]).toHaveAttribute(
    'data-src',
    expect.stringContaining('https://www.googletagmanager.com/gtag/js?id=')
  )
  expect(scripts[1]).toHaveAttribute('data-script-id', 'google-analytics')
})
