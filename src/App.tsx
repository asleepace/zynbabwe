import { Navigation } from './components/Navigation'

export function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Zynbabwe™</title>
        <meta name="author" content="Zynodyne inc." />
        <meta
          name="description"
          content="The official store for Zynbabwe inspired products, tech and more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="./public/output.css" rel="stylesheet"></link>
      </head>
      <body className="h-full mt-80">
        <Navigation />
      </body>
    </html>
  )
}
