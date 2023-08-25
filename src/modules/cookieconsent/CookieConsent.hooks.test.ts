import { act, renderHook } from "@testing-library/react";
import { useAcceptedCookieConsent, useCookieConsentActions } from "./CookieConsent.hooks";

describe("Cookie Consent", () => {
  it("accepted should be true by default", () => {
    const { result } = renderHook(() => useAcceptedCookieConsent());
    expect(result.current).toBe(true);
  });

  it("acceptCookies should set accepted to true", () => {
    const { result: resultAcceptedConsent } = renderHook(() => useAcceptedCookieConsent());
    const { result: resultConsentActions } = renderHook(() => useCookieConsentActions());

    act(() => {
      resultConsentActions.current.acceptCookies();
    })

    expect(resultAcceptedConsent.current).toBe(true);
  });

  it("declineCookies should set accepted to false", () => {
    const { result: resultAcceptedConsent } = renderHook(() => useAcceptedCookieConsent());
    const { result: resultConsentActions } = renderHook(() => useCookieConsentActions());

    act(() => {
      resultConsentActions.current.declineCookies();
    })

    expect(resultAcceptedConsent.current).toBe(false);
  })
})
