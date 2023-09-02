
import { render } from "@testing-library/react"
import { Heading } from "./Heading"
import { HeadingEnum, headingSizeMap } from "./constants"


const headings = Object.entries(headingSizeMap)

describe('Heading', () => {
  const children = 'Heading';

  test.each(headings)('renders %s with expected classNames', (headingKey, { size, margin }) => {
    const { getByText } = render(<Heading as={headingKey as HeadingEnum}>{children}</Heading>)
    
    expect(getByText(children)).toHaveClass(size);
    expect(getByText(children)).toHaveClass(margin);
  })
})