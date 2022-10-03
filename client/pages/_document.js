import Document, { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "../stitches.config";

const establishHost = ({ host }) => {
  if (host.includes("localhost")) return `http://${host}`;
  else return `https://${host}`;
};

const establishOGImageHost = ({ host }) => {
  if (host.includes("localhost")) return `http://localhost:5000`;
  else return `https://images.milo.sh`;
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ogImageLink: ``,
      ogTitle: "milo",
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
