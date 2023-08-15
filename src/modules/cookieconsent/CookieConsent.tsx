import { FC } from "react";
import { PrimaryButton } from "../shared/components/Button/PrimaryButton";
import { SecondaryButton } from "../shared/components/Button/SecondaryButton";
import { Heading } from "../shared/components/Heading/Heading";
import { useAcceptedCookieConsent, useCookieConsentActions } from "./CookieConsent.hooks";

export const CookieBanner: FC = () => {
  const { acceptCookies, declineCookies } = useCookieConsentActions();
  const acceptedCookies = useAcceptedCookieConsent();

  if (acceptedCookies) {
    return
  }
  

  return (
    <aside className="fixed bottom-0 right-0 md:bottom-8 md:right-8 p-8 bg-white max-w-xl rounded-lg shadow-2xl shadow-midnight-blue/25">
      <Heading as="h3">Cookie Consent</Heading>

      <div className="flex flex-col gap-4">
        <p>
          We use cookies and other tracking technologies to analyze our website traffic, and to understand
          where our visitors are coming from.
        </p>

        <p>
          Rest assured, all data collected is anonymized and used solely for
          analytical purposes.
        </p>

        <p>
          By clicking &quot;Got it!&quot; you consent to the use of cookies and other
          tracking technologies.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <PrimaryButton onClick={acceptCookies}>Got it!</PrimaryButton>
        <SecondaryButton onClick={declineCookies}>Nah...</SecondaryButton>
      </div>
    </aside>
  );
};

export default CookieBanner;
