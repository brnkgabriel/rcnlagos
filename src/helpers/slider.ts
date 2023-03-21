export class Slider {
  private currentIdx: number = 0;
  private interval: any;
  private elements: NodeListOf<Element>
  constructor() {
    this.interval = null
    this.elements = all("no-element")
  }

  start(elements: NodeListOf<Element>) {
    this.elements = elements
    this.interval = setInterval(this.slide.bind(this), 4000)
  }

  slide() {
    this.currentIdx++
    if (this.currentIdx === this.elements.length) {
      this.currentIdx = 0
    }
    this.elements?.forEach((ele: Element) => ele.classList.remove(constants.ACTIVE))
    this.elements[this.currentIdx].classList.add(constants.ACTIVE) 
  }

  stop() {
    this.currentIdx = 0
    clearInterval(this.interval)
    this.elements
  }
}