import {iBlog, iDynamicObject, iGlobal, iProgram} from "../types"

export const imgSrc = (url: string) => url.length > 0 ? url : '/icons/avatar.svg'
export const num2List = (num: number) => Array.from(Array(num).keys())
 

export const obj2Str = (obj: iDynamicObject) => Object.keys(obj)
  .reduce((acc, cur) => acc + `${cur}:${obj[cur]};`, "")

export const constants = {
  API: "/api/g-data",
  globals: "globals",
  maxItemsToLoad: 10,
  MOBILELINKTYPE: "mobile-link",
  CONTENTTYPE: "content",
  HAMBURGERTYPE: "hamburger",
  CLOSEMOBILEMENUTYPE: "close mobile menu",
  MOBILENAVIGATIONTYPE: "mobile navigation",
  CLICKEVENT: "click",
  DATATYPE: "data-type",
  OPEN: "open",
  SOCIALLINK: "social link",
  ACTIVE: "active",
  BLOG: "blog",
  BUTTON: "button",
  SELECTEDBLOGIMGWRAPQUERY: ".-blog .-content .-selected .-imgwrap",
  SELECTEDBLOGQUERY: ".-blog .-content .-selected",
  SELECTEDPOSTCONTENT: ".-blog .-content .-selected .-postcontent",
  SITECONTENT: "#__nuxt",
  BLOGTHUMBNAILSQUERY: "#blog .-content .-thumbnails",
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

  return { globalState, setGlobals }
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
    ]
  } 
}

export const getMachineId = () => {
    
  let machineId = localStorage.getItem('MachineId');
  
  if (!machineId) {
      machineId = crypto.randomUUID();
      localStorage.setItem('MachineId', machineId);
  }

  return machineId;
}

export const skeletonPrograms: iProgram[] = num2List(6).map((num: number) => ({
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

export const reorder = (list:any[]) => { 
  return list.sort((a:any, b:any) => +new Date(b.datetime) - +new Date(a.datetime))
}