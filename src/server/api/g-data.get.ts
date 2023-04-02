import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    // const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbwf8U1aEal8_PwuTDujpRaZDv8-SbefiwJyxinVKPcD4zNFaQC-T7HxXPISSUa8sSZoeA/exec`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
}) 