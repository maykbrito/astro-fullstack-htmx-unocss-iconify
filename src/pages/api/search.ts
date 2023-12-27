import type { APIRoute } from "astro"

export const GET: APIRoute = async ({request}) => {
  const username = new URL(request.url).searchParams.get('username')

  const img = `<img src="https://wsrv.nl/?url=https://github.com/${username}.png&w=500&output=webp" />`
  return new Response(img)
}