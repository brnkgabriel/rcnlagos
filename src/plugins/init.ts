import { iGlobal } from "~~/src/types"
import { constants } from "../composables"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  useState<iGlobal>(constants.globals, () => ({ 
    departments: [],
    pastorates: [],
    prayercells: [],
    events: [],
    sliders: [],
    programs: [],
    blogs: [],
    testimonials: []
  }))
})
