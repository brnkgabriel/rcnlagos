import { H3Event, readBody } from "h3"

export default defineEventHandler(async (event: H3Event) => { 

  const body = await readBody(event)
  const donateRef = body as any
  try {
    const response = {}
    return response
  } catch (err: any) {
    console.log(err.code);
    console.log(err.response.body);
    return err.response.body
  }
})