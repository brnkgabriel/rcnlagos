import { iGlobal, iTool } from "~~/src/types"
import { constants } from "../composables"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  useState<iGlobal>(constants.globals, () => ({ 
  }))
})
