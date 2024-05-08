import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Zynbabwe™</title>
        <meta name="author" content="Zynodyne inc." />
        <meta name="description" content="The official store for Zynbabwe inspired products, tech and more!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="./public/output.css" rel="stylesheet"></link>
      </head>
      <body>
        <h1>Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </body>
    </html>
  )
}
