import { useAcceptedCookieConsent } from "@/modules/cookieconsent/CookieConsent.hooks";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { FC } from "react";

const GA_MEASUREMENT_ID = "G-SSSNBCX2RF";

interface MetaTagsProps {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords: string;
  author: string;
}

const MetaTags: FC<MetaTagsProps> = (props) => {
  const properties = ["title", "description", "url", "image"];
  const prefixes = ["og", "twitter"];

  const metaTags = prefixes
    .map((prefix) =>
      properties.map((property) => {
        const content = props[property as keyof MetaTagsProps];
        return (
          <meta
            key={property}
            property={`${prefix}:${property}`}
            content={content}
          />
        );
      })
    )
    .concat([
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />,
      <meta key="description" name="description" content={props.description} />,
      <meta key="keywords" name="keywords" content={props.keywords} />,
      <meta key="author" name="author" content={props.author} />,
    ]);

  return metaTags;
};

const GoogleAnalytics: FC = () => {
  const acceptedCookies = useAcceptedCookieConsent();

  if (!acceptedCookies) {
    return null
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <MetaTags
          title="Pixelias - Digital Agency"
          description="Transforming ideas into exceptional digital experiences"
          url="https://pixelias.io/"
          image="https://pixelias.io/og-image.png"
          author="Pixelias"
          keywords="pixelias, digital agency, web development, web design, product development, software development, software engineering, software architecture, landing pages, experiments, a/b, digital agency"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics />
      </body>
    </Html>
  );
}
