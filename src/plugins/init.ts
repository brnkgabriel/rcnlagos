import { iGlobal } from "~~/src/types"
import { constants } from "../composables"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  useState<iGlobal>(constants.globals, () => ({ 
    departments: [],
    pastorates: [],
    prayercells: [], 
    sliders: [],
    programs: [],
    blogs: [],
    testimonials: [],
    accounts: [],
    selectedProgram: {},
    showProgramModal: false
  }))
})
