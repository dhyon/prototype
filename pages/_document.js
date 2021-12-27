import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../public/theme';

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Titan app." />
          <link rel="icon" href="/titan-logo.png" />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
