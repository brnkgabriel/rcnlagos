import {iAccount, iBlog, iDynamicObject, iProgram, iGlobal, iPastorate, iPrayercell, iProgramCategory} from "../types"

export const imgSrc = (url: string) => url.length > 0 ? url : '/icons/avatar.svg'
export const num2List = (num: number) => Array.from(Array(num).keys())
 

export const obj2Str = (obj: iDynamicObject) => Object.keys(obj)
  .reduce((acc, cur) => acc + `${cur}:${obj[cur]};`, "")

export const constants = {
  API: "/api/g-data",
  POSTAPI: "/api/p-data",
  SUBSCRIBEAPI: "/api/subscribe",
  globals: "globals",
  MOBILELINKTYPE: "mobile-link",
  CONTENTTYPE: "content",
  HAMBURGERTYPE: "hamburger",
  CLOSEMOBILEMENUTYPE: "close mobile menu",
  MOBILENAVIGATIONTYPE: "mobile navigation",
  CLICKEVENT: "click",
  PLAYEVENT: "play",
  SHOW: "show",
  FABTYPE: "fab",
  DATATYPE: "data-type",
  OPEN: "open",
  SOCIALLINK: "social link",
  ACTIVE: "active",
  BLOG: "blog",
  BUTTON: "button",
  TESTIMONIALBTN: "testimonialbtn",
  DATADIR: "data-dir",
  NEXT: "next",
  PREV: "prev",
  SUBSCRIBE: "subscribe",
  POST: "post",
  SUCCESS: "success",
  ERROR: "error",
  INTERNALSERVERERROR: "500 Internal Server Error (/api/p-data)",
  FAILEDTOFETCH: "Failed to fetch",
  SUBSCRIPTIONSTATUSQUERY: ".-subscription-upcoming .-subup .-status",
  SUBSCRIPTION: "email subscription",
  TESTIMONIALQUERY: ".-testimonial",
  SELECTEDBLOGIMGWRAPQUERY: ".-blog .-content .-selected .-imgwrap",
  SUBSCRIPTIONWRAPQUERY: ".-subscription-upcoming .-subup",
  SELECTEDBLOGQUERY: ".-blog .-content .-selected",
  SUBSCRIBEINPUTQUERY: ".-subscription-upcoming .-subup input",
  SELECTEDPOSTCONTENT: ".-blog .-content .-selected .-postcontent",
  SITECONTENT: "#__nuxt",
  BLOGTHUMBNAILSQUERY: ".-blog .-content .-thumbnails",
  DEFAULTVIDEO: "",
  DEFAULTAUDIO: "",
  DATAURL: "data-url",
  DATATITLE: "data-title",
  MAXPROGRAMS: 4,
  LASTPROGRAMQUERY: `.-lastprogram`,
  PROGRAMS: "programs"
}

export const operatingSystem = () => {
  // @ts-ignore
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  // @ts-ignore
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

export const all = (query: string, parent?: HTMLElement) => parent ? parent.querySelectorAll(query) : document.querySelectorAll(query)
export const el = (query: string, parent?: HTMLElement) => parent ? parent.querySelector(query) : document.querySelector(query)

export const useGlobals = () => {
  const globalState = useState<iGlobal>(constants.globals)

  const setGlobals = (value: iGlobal) => globalState.value = value
  const addToRenderedPrograms = (value: iProgram[]) => {
    globalState.value.renderedPrograms = [
      ...globalState.value.renderedPrograms,
      ...value
    ]
  }

  const setSearchedPrograms = (value: iProgram[]) => globalState.value.searchedPrograms = value

  const setRenderedPrograms = (value: iProgram[]) => globalState.value.renderedPrograms = value

  return { globalState, setGlobals, setRenderedPrograms, addToRenderedPrograms, setSearchedPrograms }
}
 
interface iHead {
  name?: string;
  description?: string;
}

export const head = (headOptions: iHead) => {
  const name = (headOptions.name as string).length > 0 ? headOptions.name : 'Home | RCN Lagos'

  const description = (headOptions.description as string) ? headOptions.description : 'Towards the rebirth of Apostolic Christianity. We are a ministry with a single minded focus on restoring the prayer commission of the church in fulfillment of Jesus proclamation in Matthew 21:13 that My house shall be called the house of prayer'

  return {
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', content: "https://rcnlagos.netlify.app/banner_1920x1080.jpg" },
      { hid: 'og:title', property: 'og:title', content: "RCN Lagos" },
      { hid: 'og:name', property: 'og:name', content: "RCN Lagos" },
      { hid: 'og:name', property: 'og:name', content: "RCN Lagos" },
      { hid: 'og:type', property: 'og:type', content: "website" },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image:type', property: 'og:image:type', content: 'JPEG' },
      { hid: 'og:url', property: 'og:url', content: "https://rcnlagos.netlify.app/" },
      { hid: 'keywords', name: 'keywords', content: 'rcn, rcnlagos, rcn lagos, apostolic, rebirth, transformation, christianity, Matthew 21:13, remnant, network, voice of one, the convergence, threshing floor, 10 hours' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: "CK4Vos3X1FaRfpLVkmu4rlgRX0qlUQiI6vE47Kt5mPg" },
      { hid: "robots", name: "robots", content: "index,follow" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/css/styles.css"
      }
    ]
  } 
}

export const getMachineId = () => {
    
  let machineId = localStorage.getItem('MachineId');
  
  if (!machineId) {
      machineId = Date.now().toString()
      localStorage.setItem('MachineId', machineId);
  }

  return machineId;
}

export const skeletonProgramCategories: iProgramCategory[] = num2List(6).map((num: number) => ({
  about: " ",
  image: "/images/359x205.png",
  name: " ",
  status: " ",
  time: " "
}))
export const skeletonBlogs: iBlog[] = num2List(3).map((num: number) => ({
  banner: "/images/680x680.png",
  datetime: " ",
  htmlContent: " ",
  status: " ",
  subline: " ",
  thumbnail: "/images/680x680.png",
  title: " "
}))
export const skeletonPastors: iPastorate[] = num2List(6).map((num: number) => ({
  image: "/images/680x680.png",
  name: " ",
  profile: " ",
  role: " ",
  status: " "
}))

export const skeletonAccounts: iAccount[] = num2List(4).map((num: number) => ({
  accountName: " ",
  accountNumber: " ",
  bank: " ",
  currencyName: " ",
  currencySymbol: " ",
  status: " "
}))

export const skeletonPrayercells: iPrayercell[] = num2List(8).map((num: number) => ({
  address: " ",
  coordinator: " ",
  location: " ",
  name: " ",
  phoneNumber: " ",
  status: " "
}))

export const skeletonPrograms: iProgram[] = num2List(8).map((num: number) => ({ 
  audiourl: "",
  datetime: "",
  image: "",
  minister: "",
  status: "",
  title: "",
  type: "",
  videourl: ""
}))

export const reorder = (list:any[]) => { 
  return list.sort((a:any, b:any) => +new Date(b.datetime) - +new Date(a.datetime))
}

export const youTubeThumbnail = (link: string) => {
  const id = obtainYouTubeID(link)
  return `https://img.youtube.com/vi/${id}/0.jpg`
}

const obtainYouTubeID = (link:string) => {
  const url = new URL(link)
  const search = url.search.split("?v=")
  let searchTarget = ""
  if (search[1] && search[1].length > 0) {
    searchTarget = search[1].split("&t=")[0]
  }
  const pieces = url.pathname.split("/")

  let id = ""
  if (searchTarget && searchTarget.length > 0) id = searchTarget
  if (pieces[2] && pieces[2].length > 0) id = pieces[2]
  return id
}

export const youTubeLinkToEmbedLink = (link: string) => {
  if (link.length > 0) {
    const id = obtainYouTubeID(link)
    return `https://www.youtube.com/embed/${id}`
  }
  return ""
}

export const slug = (pastor: iPastorate) => pastor.name?.toLowerCase().split(" ").join("-")

export const phone = (number: string) => {
  if (!number) return "tel:"
  switch (number[0]) {
    case "0": return "tel:+234" + number.slice(1, number.length)
    case "1": return "tel:+1" + number.slice(1, number.length)
    case "2": return "tel:+234" + number.slice(3, number.length)
    case "+": return number[1] === "2" ? "tel:+234" + number.slice(4, number.length) : "tel:+1" + number.slice(4, number.length)
    default: return "tel:" + number
  }
}

export const whatsappIcon = (number: string) => {
  
  const num = phone(number)
  number = num.slice(1, num.length)

  return `https://api.whatsapp.com/send?phone=${number}&text=Hello`
}
export const setSearchedAndRenderedPrograms = (programs: iProgram[]) => {
  const { setSearchedPrograms, setRenderedPrograms } = useGlobals()
  setSearchedPrograms(programs)
  setRenderedPrograms(programs.slice(0, constants.MAXPROGRAMS))
}
