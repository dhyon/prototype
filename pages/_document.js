import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from "@chakra-ui/react"

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Titan app." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <ColorModeScript />
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
