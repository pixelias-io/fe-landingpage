import { render, screen, within } from '@testing-library/react'
import { Hero } from './Hero'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ priority, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => (
    <img {...props} />
  )
}))

jest.mock(
  'next/dynamic',
  () => () =>
    function DynamicArtwork() {
      return <div data-testid="hero-artwork" />
    }
)

test('legacy hero presents its brand and rotating service categories', () => {
  render(<Hero />)
  expect(screen.getByRole('img', { name: 'Pixelias Logo' })).toBeInTheDocument()
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toHaveTextContent('Transforming Ideas into Exceptional')
  for (const service of ['Web Applications', 'E-commerces', 'Features'])
    expect(within(heading).getByText(service)).toBeInTheDocument()
  expect(screen.getByTestId('hero-artwork')).toBeInTheDocument()
})
