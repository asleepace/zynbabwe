import { useState } from 'react'
import { Text } from './components/Text'

export function App() {
  const [count, setCount] = useState(0)
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
      <body className="h-full">
        <div className="flex flex-1 p-8 flex-col">
          <Text variant="heading-1">
            <span className="text-z-green">ZYN</span>
            <span className="text-z-yellow">BAB</span>
            <span className="text-z-red">WE</span>
          </Text>
          <Text className="text-red-500" variant="body">
            The official store for Zynbabwe inspired products, tech and more!
          </Text>
        </div>
      </body>
    </html>
  )
}
