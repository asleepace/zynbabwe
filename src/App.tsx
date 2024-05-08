import { AfricanTrees } from './components/AfricanTrees'
import { Container } from './components/Container'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { PalmTree } from './components/PalmTree'

export function App() {
  return (
    <html className="bg-accent flex flex-col flex-1">
      <head>
        <meta charSet="utf-8" />
        <title>Zynbabwe™</title>
        <meta name="author" content="Zynbabwe™ Co." />
        <meta name="description" content="The official store for Zynbabwe!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./public/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./public/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./public/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="./public/site.webmanifest"></link>
        <link href="./public/output.css" rel="stylesheet"></link>
      </head>
      <body className="flex flex-col w-full flex-grow py-32 fixed overflow-x-hidden bg-z-dark">
        <AfricanTrees className='opacity-20' />
        <Navigation />
        <Container className="flex-col flex flex-1 z-10">
          <Hero className="flex flex-1" />
        </Container>
      </body>
    </html>
  )
}
