export class MobileNavigationController { 
  private mainContainer: HTMLElement; 
  
  constructor() { 
    this.mainContainer = document.querySelector(".-main") as HTMLElement 

    this.start()
  }
  
  start() { 
    this.mainContainer.addEventListener(constants.CLICKEVENT, this.handleEvent.bind(this))
  }

  handleEvent(evt: Event) {
    const target = evt.target as HTMLElement
    const type = target.getAttribute(constants.DATATYPE) 

    switch (type) {
      case constants.MOBILELINKTYPE: return this.mainContainer.classList.remove(constants.OPEN)
      case constants.HAMBURGERTYPE: return this.mainContainer.classList.add(constants.OPEN)
      case constants.CLOSEMOBILEMENUTYPE: return this.mainContainer.classList.remove(constants.OPEN)
      case constants.MOBILENAVIGATIONTYPE: return this.mainContainer.classList.remove(constants.OPEN) 
      default: return this.reset()
    }
  }



  reset() {

  }
}