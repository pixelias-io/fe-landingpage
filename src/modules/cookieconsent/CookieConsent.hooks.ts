import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CookieConsentState {
  accepted: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
}

const useCookieConsentStore = create(
  persist<CookieConsentState>(
    (set) => ({
      accepted: true,
      acceptCookies: () => set({ accepted: true }),
      declineCookies: () => set({ accepted: false }),
    }),
    {
      name: "cookieconsent-storage",
    }
  )
);

export const useAcceptedCookieConsent = () => useCookieConsentStore((state) => state.accepted);
export const useCookieConsentActions = () => useCookieConsentStore((state) => ({
  acceptCookies: state.acceptCookies,
  declineCookies: state.declineCookies,
}));
