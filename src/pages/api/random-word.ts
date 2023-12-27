export function POST() {
  return new Response('<span>some span</span>')
}

let words = []

export async function GET() {

  if(words.length <= 0) {
    const data = await fetch('https://api.urbandictionary.com/v0/random')
    .then(res => res.json())
    words = data.list
  }

  const { word, definition } = words.pop()


  return new Response(`<details><summary>${word}</summary><p>${definition}<p></details>`)
}