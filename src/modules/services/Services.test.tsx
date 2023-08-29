import { render, within } from '@testing-library/react';
import { services } from './constants'
import { Services } from './Services';

describe.each(Object.values(services))("$title Services", ({ items }) => {
  test.each(items)('renders $title service with heading, description and title', ({ title, description }) => {
    const { getByRole } = render(<Services />)

    const listitem = getByRole('listitem', { name: `service-${title}` });
    
    expect(within(listitem).getByRole('heading', { name: title })).toBeInTheDocument()
    expect(within(listitem).getByText(description)).toBeInTheDocument()
    expect(within(listitem).getByRole('img', { name: title })).toBeInTheDocument()
  })
});