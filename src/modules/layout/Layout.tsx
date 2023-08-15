import { useAcceptedCookieConsent } from "@/modules/cookieconsent/CookieConsent.hooks";
import Script from "next/script";
import { FC, ReactNode } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const GoogleAnalytics: FC = () => {
  const acceptedCookies = useAcceptedCookieConsent();

  if (!acceptedCookies) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
};

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <GoogleAnalytics />
    </>
  )
}