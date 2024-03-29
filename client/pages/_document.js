import Document, { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "../stitches.config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ogImageLink: ``,
      ogTitle: "Milo",
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" name="og:title" content={this.props.ogTitle} key="tester" />
          <meta property="og:type" name="og:type" content="website" key="tester" />
          <meta property="og:url" name="og:url" content="website" key="tester" />
          <meta property="og:image" name="og:image" content={this.props.ogImageLink} key="tester" />
          <meta name="twitter:image" content={this.props.ogImageLink} />

          <link
            rel="preload"
            href="/fonts/CircularStd/CircularStd-Book.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/CircularStd/CircularStd-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/CircularStd/CircularStd-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
