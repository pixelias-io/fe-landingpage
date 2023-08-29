import { render, waitFor } from "@testing-library/react";
import { Footer } from "./Footer";

const socials = [
  { link: "LinkedIn", href: "https://www.linkedin.com/company/pixelias" },
  { link: "Github", href: "https://github.com/pixelias-io" },
];

describe("Footer", () => {
  test("should have a Pixelias logo", async () => {
    const { getByRole } = render(<Footer />);
    const expectedSrc = encodeURIComponent("/pixelias.png");

    expect(getByRole("img", { name: "Pixelias Logo" })).toHaveAttribute(
      "src",
      expect.stringContaining(expectedSrc)
    );
  });

  describe("Social Media", () => {
    test.each(socials)(
      "should have a $link anchor pointing to $href",
      ({ link, href }) => {
        const { getByRole } = render(<Footer />);

        expect(getByRole("link", { name: link })).toHaveAttribute("href", href);
      }
    );
  });
});
