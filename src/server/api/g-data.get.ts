import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    // const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbyHcKzUKnpmc7yzz_6C_duR6qRcQjSXaSMxUH0Qh3zyGJOLhMptYzwCz9xGC1cVbQWp-w/exec`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
}) 