import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script src="bower_components/aos/dist/aos.js"></script> 
      <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
