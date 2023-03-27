import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    // const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbytBGJOL0y9aQ2GlVviFOPHlehcrO0PJU0LAJn5Lm0wPwGOuEOgCvpcSvfN8n6x-oMHAQ/exec`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
}) 