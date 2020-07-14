import Document, { Head, Main, NextScript, Html } from "next/document";
import { TypographyStyle } from "react-typography";

import typography from "utils/typography";
import { getSiteMetaData } from "utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-X47H18WLG2"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-X47H18WLG2');
            </script>
              `,
          }}
        />
          <TypographyStyle typography={typography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
