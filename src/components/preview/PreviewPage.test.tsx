import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import PreviewPage from './PreviewPage'
import { mountMotion } from './motion'

jest.mock('./motion', () => ({ mountMotion: jest.fn(() => jest.fn()) }))
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => require('react-dom').createPortal(children, document.head)
}))

test('composes the page and updates the localized title and metadata', async () => {
  const { unmount } = render(<PreviewPage />)
  expect(screen.getByRole('main')).toHaveAttribute('id', 'top')
  for (const name of [
    'What we do',
    'Experience across brands',
    'How we work',
    'Meet Matheus Moreira',
    'Let’s build together.'
  ]) {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument()
  }
  expect(document.title).toBe('Pixelias — Great things are built together')
  fireEvent.click(screen.getByRole('button', { name: 'PT' }))
  await waitFor(() => expect(document.title).toBe('Pixelias — Juntos, construímos coisas grandiosas'))
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    'content',
    expect.stringContaining('estúdio de produtos')
  )
  const cleanup = (mountMotion as jest.Mock).mock.results[0].value
  unmount()
  expect(cleanup).toHaveBeenCalled()
})
