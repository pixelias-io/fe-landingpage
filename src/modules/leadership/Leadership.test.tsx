import { render, screen } from '@testing-library/react'
import { Leadership } from './Leadership'

test('legacy leadership section identifies the founder and portrait', () => {
  render(<Leadership />)
  expect(screen.getByRole('heading', { level: 2, name: 'Meet Matheus Moreira' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Me' })).toBeInTheDocument()
})
