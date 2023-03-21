export class MobileNavigationController {

  private closeMobileNavigationBtn: HTMLElement;
  private mainContainer: HTMLElement;
  private hamburgerBtn: HTMLElement;
  
  constructor() {
    this.closeMobileNavigationBtn = document.querySelector(".-close-btn") as HTMLElement
    this.mainContainer = document.querySelector(".-main") as HTMLElement
    this.hamburgerBtn = document.querySelector(".-hamburger") as HTMLElement

    this.start()
  }
  
  start() {
    this.hamburgerBtn.addEventListener("click", () => this.mainContainer.classList.add("open"))
    this.closeMobileNavigationBtn.addEventListener("click", () => this.mainContainer.classList.remove("open"))
  }
}