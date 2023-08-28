import { render } from "@testing-library/react";
import CookieConsent from "./CookieConsent";
import { useAcceptedCookieConsent } from "./CookieConsent.hooks";

jest.mock("./CookieConsent.hooks.ts", () => ({
  useAcceptedCookieConsent: jest.fn(),
  useCookieConsentActions: jest.fn().mockReturnValue({
    acceptCookies: jest.fn(),
    declineCookies: jest.fn(),
  }),
}));

describe("CookieConsent", () => {
  const text = "Cookie Consent";

  test("renders CookieConsent component when accepted is false", () => {
    (useAcceptedCookieConsent as jest.Mock).mockReturnValue(false);
    const { queryByRole } = render(<CookieConsent />);
    expect(queryByRole("heading", { level: 3 })).toHaveTextContent(text);
  });

  test("renders null when accepted is true", () => {
    (useAcceptedCookieConsent as jest.Mock).mockReturnValue(true);
    const { queryByRole } = render(<CookieConsent />);
    expect(queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
  });
});
