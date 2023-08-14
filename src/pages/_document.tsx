import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-SSSNBCX2RF';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </Html>
  )
}
