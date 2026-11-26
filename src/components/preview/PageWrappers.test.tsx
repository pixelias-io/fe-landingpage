import { render, screen } from '@testing-library/react'
const { renderToStaticMarkup } = require('react-dom/server.node') as typeof import('react-dom/server')
import type { AppProps } from 'next/app'
import App from '../../pages/_app'
import Document from '../../pages/_document'
import Home from '../../pages/index'
import PreviewPage from './PreviewPage'

jest.mock('next/document', () => ({
  Html: ({ children, lang }: { children: React.ReactNode; lang: string }) => <html lang={lang}>{children}</html>,
  Head: ({ children }: { children: React.ReactNode }) => <head>{children}</head>,
  Main: () => <main id="next-content" />,
  NextScript: () => <script id="next-scripts" />
}))

test('the Next app wrapper forwards page props to its component', () => {
  function Page({ message }: { message: string }) {
    return <p>{message}</p>
  }
  render(<App {...({ Component: Page, pageProps: { message: 'Forwarded content' } } as AppProps)} />)
  expect(screen.getByText('Forwarded content')).toBeInTheDocument()
})

test('the home route exports the studio preview', () => {
  expect(Home).toBe(PreviewPage)
})

test('the document has an English baseline and no-JavaScript fallback hook', () => {
  const html = renderToStaticMarkup(<Document />)
  expect(html).toContain('<html lang="en">')
  expect(html).toContain('<body class="no-js">')
  expect(html).toContain('id="next-content"')
  expect(html).toContain('id="next-scripts"')
})

test('the document links to the Pixelias favicon', () => {
  const html = renderToStaticMarkup(<Document />)
  expect(html).toContain('<link rel="icon" href="/favicon.ico?v=1" sizes="any"/>')
})
