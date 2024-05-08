import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

import { App } from './src/App'
import { stream } from './src/utils/stream'

// Bundle Client Code
// make sure the bootstrap script has the same name (except .js)
// as the entrypoint, and add multiple entrypoints if needed.
await Bun.build({ entrypoints: ['./client.tsx'], outdir: './public' })

// Server Side Code
// entry point for the backend server which will listen for requests
// and render the react app to a readable stream.
const backend = new Elysia()
  .use(staticPlugin())
  .get('/', stream(App))
  .listen(3000)

// Debugging
// output the server url to the console for easy access, as well as
// any other items you may want to debug.
console.log(`[zynbabwe] running on ${backend.server?.url}`)
