import { H3Event, getQuery } from "h3"
import { iQuery } from "~~/src/types"
import { del } from "../lib/firestore"

export default defineEventHandler(async (event: H3Event) => {
  try {

    const { col, id } = getQuery(event) as iQuery
    await del(col as string, id as string)

    return { result: id }
  } catch (error: any) {
    return { error: error.message }
  }
}) 