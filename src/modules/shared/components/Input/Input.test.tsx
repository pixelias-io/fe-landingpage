import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from './Input'
import { InputGroup } from './InputGroup'
import { Label } from './Label'
import { TextArea } from './TextArea'

test('Input forwards validation and interaction props', () => {
  const onChange = jest.fn()
  render(
    <Input
      id="email"
      name="email"
      type="email"
      required
      onChange={onChange}
    >
      Email address
    </Input>
  )
  const input = screen.getByRole('textbox', { name: 'Email address' })
  expect(input).toBeRequired()
  expect(input).toHaveAttribute('type', 'email')
  expect(screen.getByText('Email address')).toHaveAttribute('for', 'email')
  fireEvent.change(input, { target: { value: 'person@example.test' } })
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(input).toHaveValue('person@example.test')
})

test('TextArea forwards its name, required state and value', () => {
  render(
    <TextArea
      id="details"
      name="details"
      required
      defaultValue="Initial details"
    >
      Project details
    </TextArea>
  )
  expect(screen.getByRole('textbox', { name: 'Project details' })).toHaveValue('Initial details')
  expect(screen.getByRole('textbox', { name: 'Project details' })).toBeRequired()
  expect(screen.getByText('Project details')).toHaveAttribute('for', 'details')
})

test('Label and InputGroup preserve label associations and children', () => {
  render(
    <InputGroup>
      <Label htmlFor="topic">Topic</Label>
      <input id="topic" />
    </InputGroup>
  )
  expect(screen.getByLabelText('Topic')).toHaveAttribute('id', 'topic')
})

test('Input and TextArea bind their labels to explicit or default IDs', () => {
  render(
    <>
      <Input
        id="contact-email"
        name="email"
      >
        Email address
      </Input>
      <TextArea name="details">Project details</TextArea>
    </>
  )
  const email = screen.getByRole('textbox', { name: 'Email address' })
  const details = screen.getByRole('textbox', { name: 'Project details' })
  expect(screen.getByText('Email address')).toHaveAttribute('for', 'contact-email')
  expect((screen.getByText('Email address') as HTMLLabelElement).control).toBe(email)
  expect(screen.getByText('Project details')).toHaveAttribute('for', details.id)
  expect((screen.getByText('Project details') as HTMLLabelElement).control).toBe(details)
})

test('Input and TextArea generate label associations when neither name nor id is supplied', () => {
  render(
    <>
      <Input>Search terms</Input>
      <TextArea>Notes</TextArea>
    </>
  )
  expect((screen.getByText('Search terms') as HTMLLabelElement).control).toBe(
    screen.getByRole('textbox', { name: 'Search terms' })
  )
  expect((screen.getByText('Notes') as HTMLLabelElement).control).toBe(screen.getByRole('textbox', { name: 'Notes' }))
})

test('fields with the same name receive distinct generated IDs and can supply an explicit accessible name', () => {
  render(
    <>
      <Input name="topic">First topic</Input>
      <Input
        name="topic"
        aria-label="Alternate topic"
      >
        Second topic
      </Input>
    </>
  )
  const first = screen.getByRole('textbox', { name: 'First topic' })
  const second = screen.getByRole('textbox', { name: 'Alternate topic' })
  expect(first.id).not.toBe(second.id)
  expect((screen.getByText('First topic') as HTMLLabelElement).control).toBe(first)
  expect((screen.getByText('Second topic') as HTMLLabelElement).control).toBe(second)
})
