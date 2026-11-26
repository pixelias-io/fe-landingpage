import { fireEvent, render, screen } from '@testing-library/react'
import { ContactUs } from './ContactUs'

const fields = [
  { label: 'Name', name: 'name', value: 'Test Person' },
  { label: 'Company', name: 'company', value: 'Test Company' },
  { label: 'Email', name: 'email', value: 'person@example.test' },
  { label: 'Message', name: 'message', value: 'Test project' }
]

test.each(fields)('legacy form requires the $label field', ({ label }) => {
  render(<ContactUs />)
  expect(screen.getByRole('textbox', { name: label })).toBeRequired()
})

test('legacy form retains entered values without sending a message', () => {
  render(<ContactUs />)
  for (const field of fields)
    fireEvent.change(screen.getByRole('textbox', { name: field.label }), { target: { value: field.value } })
  expect(screen.getByRole('form', { name: 'form-contact-us' })).toHaveFormValues(
    Object.fromEntries(fields.map(({ name, value }) => [name, value]))
  )
})
