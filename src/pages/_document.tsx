import { Head, Html, Main, NextScript } from 'next/document';

export const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.cdnfonts.com/css/pokemon-solid"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
