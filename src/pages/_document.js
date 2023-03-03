import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-light flex flex-col items-center mx-auto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
