import { H3Event, getQuery, readBody } from "h3"
import { iOptions, iQuery, iSubscribe } from "~~/src/types"
import { checkAndStoreDoc } from "../lib/firestore"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as iQuery
    const data = await readBody(event) as any

    const options: iOptions = { ...query, data }

    const response = await checkAndStoreDoc(options)

    return response
  } catch (error: any) {
    const response: iSubscribe = {
      error: true,
      success: false,
      message: error.message
    }
    return response
  }
}) 