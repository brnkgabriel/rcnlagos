import VueGtag from "vue-gtag-next"
import { getMachineId } from "../composables"

export default defineNuxtPlugin(nuxtApp => {

  const router = useRouter()
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-938QWQ7WFN",
      params: {
        user_id: getMachineId(),
        send_page_view: false,
        linker: {
          domain: ['rcnlagos.org']
        }
      }
    }
  }, router)
})
