import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    // const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbyfzPAdPy80AY8-qPIgBr5y30_WOMYNnT6OvE4fHZJ5v1cyWZQ0NC99p3cxYprrenyC0A/exec`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
}) 