import { H3Event, getQuery, readBody } from "h3"
import { iQuery } from "~~/src/types"
import { add } from "../lib/firestore"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as iQuery
    const body = await readBody(event)

    const docRef = await add(query.col as string, body)

    return { result: docRef }
  } catch (error: any) {
    return { error: error.message }
  }
}) 