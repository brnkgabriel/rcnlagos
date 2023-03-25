import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    // const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbxMAx8GD8Ak8MwI-0L0prHDSNZyHdKhwJntyRSfAZxZtgB-HAIVv115kIhGZTSXkBtjLA/exec`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
}) 