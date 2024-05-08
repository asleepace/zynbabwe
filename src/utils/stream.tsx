import { createElement } from "react"

// @ts-ignore
import { renderToReadableStream } from "react-dom/server.browser"

/**
 * Converts a React element to a readable stream and returns as a response.
 */
export async function stream(element: () => JSX.Element) {
  const page = createElement(element)
  const data = await renderToReadableStream(page, {
    bootstrapScripts: ['/public/client.js'],
  })

  return new Response(data, {
    headers: { 'Content-Type': 'text/html' },
  })
}
