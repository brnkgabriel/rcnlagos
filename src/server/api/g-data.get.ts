import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbwNMhE0g1kz3fb-KoTAfC4McOiC8ciQ-dYsYvI1M3gSYAlTvcbTIMpwPtJXJZBENVrVeA/exec`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
}) 