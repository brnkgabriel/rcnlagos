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
      case constants.WITHSUBMENUTYPE: return this.handleSubmenu(target)
      case constants.BACKBUTTONTYPE: return this.updateLinks(constants.HOME)
      default: return this.reset()
    }
  }

  handleSubmenu(target: HTMLElement) {
    const menuName = target.getAttribute(constants.DATANAME)
    this.updateLinks(menuName as string)
  }

  updateLinks(selection: string) {
    const links = all(constants.MOBILENAVIGATIONLINKSQUERY)
    const selectedLink = el(`.-links[data-name="${selection}"]`)
    links.forEach(link => link.classList.remove(constants.ACTIVE))
    selectedLink?.classList.add(constants.ACTIVE)

    const topMenu = el(constants.MOBILENAVIGATIONTOPQUERY)
    const fxn = topMenu?.classList
    selection === constants.HOME ? fxn?.add(constants.HIDEBACKBTN) : fxn?.remove(constants.HIDEBACKBTN)
  }

  reset() {

  }
}