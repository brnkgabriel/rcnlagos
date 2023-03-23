import { H3Event, getQuery } from "h3"
import { iQuery } from "~~/src/types"
import { queryByCollection } from "../lib/firestore"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as iQuery
    const docs = await queryByCollection(query.col as string)
    return { result: docs }
  } catch (error: any) {
    return { result: [], error: error.message }
  }
}) 