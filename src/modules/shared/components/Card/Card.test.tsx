import { render, screen } from '@testing-library/react'
import { Card } from './Card'

test('Card defaults to a div and can render a named semantic section', () => {
  const { container, rerender } = render(<Card className="card">Summary</Card>)
  expect(container.firstElementChild?.tagName).toBe('DIV')
  expect(container.firstElementChild).toHaveClass('card')
  rerender(
    <Card
      as="section"
      aria-label="Project summary"
    >
      Summary
    </Card>
  )
  expect(screen.getByRole('region', { name: 'Project summary' })).toHaveTextContent('Summary')
})
