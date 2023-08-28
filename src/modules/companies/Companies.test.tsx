import { render } from "@testing-library/react";
import { companies } from "./constants";
import { Companies } from "./Companies";

describe("Companies", () => {
  test.each(companies)(
    "$name img should be pointing to $logoSrc",
    (company) => {
      const { getByAltText } = render(<Companies />);

      const altName = `${company.name} Logo`;
      const logo = getByAltText(altName);

      expect(logo).toHaveAttribute("src", company.logoSrc);
    }
  );
});
