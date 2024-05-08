


const server = Bun.serve({
  port: 69420,
  hostname: "localhost",
  fetch(req) {
    return new Response("404!");
  },
})

console.log(`[zynbabwe] now running on ${server.url}`)
