import { fireEvent, render } from "@testing-library/react";
import { BaseButton } from "./BaseButton";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

const components = {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
};

const componentsKey = Object.keys(components) as Array<keyof typeof components>;

describe.each(componentsKey)("%s component", (componentKey) => {
  const label = "Click me";
  const Button = components[componentKey];

  test(`renders a button with a "${label}" label`, () => {
    const { getByRole } = render(<Button>{label}</Button>);

    expect(getByRole("button", { name: label })).toBeInTheDocument();
  });

  test("renders a button with an onClick handler", () => {
    const mockFunction = jest.fn();
    const { getByRole } = render(
      <Button onClick={mockFunction}>{label}</Button>
    );

    fireEvent.click(getByRole("button", { name: label }));

    expect(mockFunction).toHaveBeenCalled();
  });

  test("renders a button with className", () => {
    const className = "bg-red-500";
    const { getByRole } = render(
      <Button className={className}>{label}</Button>
    );

    expect(getByRole("button", { name: label })).toHaveClass(className);
  });
});
