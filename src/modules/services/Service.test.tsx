import { render, within } from "@testing-library/react";
import { Service } from "./Service";
import { PiAtomLight } from "react-icons/pi";
import { randomBytes } from "crypto";

describe("Service", () => {
  const Icon = PiAtomLight;
  const title = randomBytes(5).toString("hex");
  const description = randomBytes(10).toString("hex");

  test("should render with title and description", () => {
    const { getByRole, getByText } = render(
      <Service title={title} icon={Icon} description={description} />
    );

    expect(getByRole("heading")).toHaveTextContent(title);
    expect(getByText(description)).toBeInTheDocument();
  });

  describe("ServiceIcon", () => {
    test("should render the icon with title", () => {
      const { getByRole } = render(
        <Service title={title} icon={Icon} description={description} />
      );

      const img = getByRole("img")
      expect(within(img).getByTitle(title)).toBeInTheDocument()
    });
  });
});
