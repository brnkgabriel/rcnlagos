import { all, el } from "~~/src/composables/index"
import { iProgram } from "../types";
import { Slider } from "./slider";

class ImageObserver {
  private images: NodeListOf<Element> | [];
  private preloaders: NodeListOf<Element> | [];

  constructor(parent: HTMLElement) {
    this.images = []
    this.preloaders = []
    this.initialize(parent)
  }

  initialize(parent: HTMLElement) {
    this.images = all(".lazy-image", parent)
    this.preloaders = all(".-preloader")

    this.images.forEach(this.lazyLoad.bind(this))
  }

  lazyLoad(el: Element) {
    const image = el as HTMLImageElement
    if (image.src !== undefined) {
      image.src = image.getAttribute("data-src") as string
      image.onload = () => this.afterLoad(image)
    } else this.afterLoad(image)
  }

  afterLoad(image: HTMLImageElement) {
    image.classList.add("loaded")
    const preloader = el(".-preloader", image.parentElement as HTMLElement)
    this.removeLoader(preloader as Element)
    this.preloaders.forEach(this.removeLoader.bind(this))
  }
  removeLoader(el: Element) {
    el.classList.remove("-loading")
    el.classList.add("-hide")
  }
}


export const vSelected = {
  updated: (ele: Element) => {
    // console.log("vSelected component updated")
  },
  mounted: (ele: Element) => {
    // const buttons = document.querySelectorAll(".card-buttons button");
    // const sections = document.querySelectorAll(".card-section");
    // const card = document.querySelector(".card");

    // const handleButtonClick = (e: Event) => {
    //   const target = e.target as HTMLElement
    //   const targetSection = target.getAttribute("data-section")
    //   const section = el(targetSection as string)
    //   targetSection !== "#about"
    //     ? ele.classList.add("is-active")
    //     : ele.classList.remove("is-active");
    //   ele.setAttribute("data-state", targetSection as string);
    //   sections.forEach((s) => s.classList.remove("is-active"));
    //   buttons.forEach((b) => b.classList.remove("is-active"));
    //   target.classList.add("is-active");
    //   section.classList.add("is-active");
    // };

    // buttons.forEach((btn) => {
    //   btn.addEventListener("click", handleButtonClick);
    // });

  },
  unmounted: (ele: Element) => {
    // console.log("vSelected component unmounted")
  }
}

// const compressImg = async (imgElement: HTMLImageElement) => {
//   const src = imgElement.getAttribute("src") 
//   const rect = imgElement.getBoundingClientRect()

//   const response = await fetch(src as string)
//   const blob = await response.blob()
//   const blobURL = URL.createObjectURL(blob)
//   const img: HTMLImageElement = new Image()
//   img.src = blobURL

  
//   const parent = imgElement.parentElement as HTMLElement
//   const canvas = document.createElement("canvas")
//   canvas.width = rect.width
//   canvas.height = rect.height

//   const mimeType = img.mimeType
//   const quality = 50

//   parent.innerHTML = ""
//   parent.appendChild(canvas)

// }

const loaded = (ele: Element) => {
  const img = ele as HTMLImageElement
  // compressImg(img)
  img.onload = () => img.classList.add("loaded")
}

export const vLoaded = {
  mounted: (ele: Element) => loaded(ele),
  updated: (ele: Element) => loaded(ele)
}

interface iData {
  maxItem: number;
  observer: IntersectionObserver | null;
  observation: (entries: IntersectionObserverEntry[]) => void
}

const data: iData = {
  maxItem: constants.MAXPROGRAMS,
  observer: null,
  observation: (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return
    loadMore()
    entry.target.classList.remove("-lastprogram")
    data.observer?.unobserve(entry.target)
  }
}

const loadMore = () => {
  const { globalState, addToRenderedPrograms } = useGlobals()
  const sLen = globalState.value.searchedPrograms.length
  const rLen = globalState.value.renderedPrograms.length
  const sIdx = rLen
  const eIdx = sIdx + data.maxItem
  const more = globalState.value.searchedPrograms.slice(sIdx, eIdx)

  // rLen === sLen ? unobserveAll() : addToRenderedPrograms(more)
  addToRenderedPrograms(more)
}

const unobserveAll = () => {
  const { globalState, setRenderedPrograms } = useGlobals()
  setRenderedPrograms((globalState.value.programs as iProgram[]).slice(0, constants.MAXPROGRAMS))
  const lastStudents = all(constants.LASTPROGRAMQUERY)
  lastStudents.forEach(lastStudent => data.observer?.unobserve(lastStudent))
  data.observer = null
}

const initializeObserver = (ele: Element, from: string) => {
  // not specifying root means the document is the root
  // basically your root is the element that scrolls
  const options = { threshold: .5 }
  data.observer = new IntersectionObserver(data.observation, options)
  const last = el(constants.LASTPROGRAMQUERY, ele as HTMLElement)
  if (last) data.observer.observe(last as Element)
}

export const vInfiniteScroll = {
  updated: (ele: Element) => initializeObserver(ele, "updated"),
  mounted: (ele: Element) => initializeObserver(ele, "mounted"),
  unmounted: () => unobserveAll()
}

// ======================================================================== new directives ==============================================================
let slider: Slider
if (process.client) {
  slider = new Slider()
}

export const vSlide = {
  mounted: (ele: Element) => {
    const images = all("img", ele as HTMLElement)
    slider.stop()
    slider.start(images)
  },
  updated: (ele: Element) => {
    const images = all("img", ele as HTMLElement)
    slider.stop()
    slider.start(images)
  },
  unmounted: () => {
    slider.stop()
  }
}

const copyReaction = (btn: HTMLElement, msg: string) => {
  const originalHTML = btn.innerHTML
  btn.innerHTML = msg
  setTimeout(() => btn.innerHTML = originalHTML, 1000);
}

const handleCopy = (btn: HTMLElement, textToCopy: string) => {
  return navigator.clipboard.writeText(textToCopy)
    .then(() => copyReaction(btn, "Copied!"))
    .catch(() => copyReaction(btn, "Copy Error :("));
}

const handleShare = (title: string, url: string) => {
  navigator.share({ title, text: title, url })
    .then(() => console.log("successful share"))
    .catch((err) => console.log("Error sharing", err))
}


export const vCopyToClipboard = {
  mounted: (ele: HTMLElement) => {
    const textToCopy = (el("p", ele) as HTMLElement).textContent as string
    const copyBtn = el(".-btn", ele) as HTMLElement
    copyBtn.addEventListener("click", () => handleCopy(copyBtn, textToCopy))
  },
  updated: (ele: HTMLElement) => {
    const textToCopy = (el("p", ele) as HTMLElement).textContent as string
    const copyBtn = el(".-btn", ele) as HTMLElement
    copyBtn.addEventListener("click", () => handleCopy(copyBtn, textToCopy))
  },
  unmounted: (ele: HTMLElement) => {
    const textToCopy = (el("p", ele) as HTMLElement).textContent as string
    const copyBtn = el(".-btn", ele) as HTMLElement
    copyBtn.removeEventListener("click", () => handleCopy(copyBtn, textToCopy))
  }
}


export const vShare = {
  mounted: (ele: HTMLElement) => {
    const copyBtn = ele as HTMLElement
    const url = copyBtn.getAttribute(constants.DATAURL) as string
    const title = copyBtn.getAttribute(constants.DATATITLE) as string
    copyBtn.addEventListener("click", () => handleShare(title, url))
  },
  updated: (ele: HTMLElement) => {
    const copyBtn = ele as HTMLElement
    const url = copyBtn.getAttribute(constants.DATAURL) as string
    const title = copyBtn.getAttribute(constants.DATATITLE) as string
    copyBtn.addEventListener("click", () => handleShare(title, url))
  },
  unmounted: (ele: HTMLElement) => {
    const copyBtn = ele as HTMLElement
    const url = copyBtn.getAttribute(constants.DATAURL) as string
    const title = copyBtn.getAttribute(constants.DATATITLE) as string
    copyBtn.removeEventListener("click", () => handleShare(title, url))
  }
}

export const vFabFilter = {

  mounted: (fabFilter: HTMLElement) => {
    const fab = el(".-fab .-clickable", fabFilter) as HTMLElement;
    const close = el(".-close", fabFilter) as HTMLElement;
    [fab, close].forEach((el: HTMLElement) => {
      el.addEventListener(constants.CLICKEVENT, (evt) => {
        fabFilter.classList.toggle(constants.SHOW)
      })
    })
  },
  updated: (fabFilter: HTMLElement) => {
    
  },
  unmounted: (fabFilter: HTMLElement) => {
    const fab = el(".-fab .-clickable", fabFilter) as HTMLElement;
    const close = el(".-close", fabFilter) as HTMLElement;
    [fab, close].forEach((el: HTMLElement) => {
      el.removeEventListener(constants.CLICKEVENT, () => {
        fabFilter.classList.toggle(constants.SHOW)
      })
    })
  }
}

const handlePlayEvent = (evt: Event) => {
  const target = evt.target as HTMLAudioElement
  const targetTitle = target.getAttribute(constants.DATATITLE)
  stopAllAudio(targetTitle as string)
}

export const stopAllAudio = (toPlayTitle?: string) => {

  const audioEls = all("audio") as NodeListOf<HTMLAudioElement>

  audioEls.forEach((audioEl: HTMLAudioElement) => {
    if (toPlayTitle === undefined) {
      audioEl.pause()
    } else {
      const title = audioEl.getAttribute(constants.DATATITLE)
      if (!audioEl.paused && title !== toPlayTitle) {
        audioEl.pause() 
      }
    }
  })
}

export const vAudio = {

  mounted: (audio: HTMLElement) => { 
    audio.addEventListener(constants.PLAYEVENT, handlePlayEvent)
  },
  updated: (audio: HTMLAudioElement) => {
    // const audioUrl = audio.getAttribute("data-audiourl")
    // audio.src = audioUrl as string
  },
  unmounted: (audio: HTMLElement) => {
    audio.removeEventListener(constants.PLAYEVENT, handlePlayEvent)
  }
}