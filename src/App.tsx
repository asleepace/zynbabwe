import { Container } from './components/Container'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { PalmTree } from './components/PalmTree'

export function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Zynbabwe™</title>
        <meta name="author" content="Zynodyne inc." />
        <meta name="description" content="The official store for Zynbabwe!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="favicon" content="./public/favicon.ico" />
        <link href="./public/output.css" rel="stylesheet"></link>
      </head>
      <body className="flex flex-1 mt-32 overflow-x-hidden">
        <Navigation />
        <Container className="gap-y-4">
          <Hero className="flex flex-1" />
        </Container>
        <PalmTree />
        <PalmTree className="scale-75 -right-[100px] top-[1000px]" />
      </body>
    </html>
  )
}
