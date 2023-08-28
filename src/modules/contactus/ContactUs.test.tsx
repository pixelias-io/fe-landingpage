import { fireEvent, render } from "@testing-library/react";
import { ContactUs } from "./ContactUs";
import { randomBytes } from "crypto";

const inputs = [
  { role: "textbox", name: "name" },
  { role: "textbox", name: "company" },
  { role: "textbox", name: "email" },
  { role: "textbox", name: "message" },
];

describe("Contact Us", () => {
  test.each(inputs)("should have a form with a $name $role", (input) => {
    const { getByLabelText } = render(<ContactUs />);

    const textbox = getByLabelText(input.name);
    expect(textbox).toHaveAttribute('required');
  });
  
  test("should submit the form values", () => {
    const { getByLabelText, getByRole } = render(<ContactUs />);

    const values = inputs.map(input => ({
      name: input.name,
      value: randomBytes(10).toString('hex')
    }))

    values.forEach(({ name, value }) => {
      fireEvent.change(getByLabelText(name), { target: { value } })
    })

    fireEvent.click(getByRole('button', { name: /send message/i }))

    const mapValues = values.reduce((acc: Record<string, string>, { name, value }) => {
      acc[name] = value
      return acc
    }, {})

    expect(getByRole('form')).toHaveFormValues(mapValues)
  })
});
