import { Html, Head, Main, NextScript } from "next/document";
// font-family: "Rum Raisin", sans-serif;
// font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande","Lucida Sans Unicode", Geneva, Verdana, sans-serif;


export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Libre+Barcode+39+Text&family=Megrim&family=Rum+Raisin&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}