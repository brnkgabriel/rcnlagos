import { iBlog } from "../types";

export class Controller {  
  private selectedBlogImgWrap: HTMLElement;
  private selectedBlog: HTMLElement;
  private selectedPostContent: HTMLElement; 
  private siteContent: HTMLElement;  
 
  constructor() {

    this.selectedBlogImgWrap = el(constants.SELECTEDBLOGIMGWRAPQUERY) as HTMLElement
    this.selectedBlog = el(constants.SELECTEDBLOGQUERY) as HTMLElement
    this.selectedPostContent = el(constants.SELECTEDPOSTCONTENT) as HTMLElement
    this.siteContent = el(constants.SITECONTENT) as HTMLElement
  }


  start() {
    this.siteContent.addEventListener(constants.CLICKEVENT, this.handleClick.bind(this))
  }

  stop() {
    this.siteContent.removeEventListener(constants.CLICKEVENT, this.handleClick.bind(this))
  }

  handleClick(evt: Event) {
    const target = evt.target as HTMLElement
    const type = target.getAttribute("data-type") 

    switch (type) {
      case constants.BLOG: return this.updateBlog(target)
      case constants.BUTTON: return this.selectedBlog.classList.toggle(constants.ACTIVE)
    }
  }

  updateBlog(target: HTMLElement) {
    const blogTitle = target.getAttribute("data-blog")
    const { globalState } = useGlobals()

    const blogObject = globalState.value.blogs?.filter((blog: iBlog) => blog.title === blogTitle)[0] as iBlog
    this.chooseBlog(blogObject)
  }

  chooseBlog(blog: iBlog) {
    this.selectedBlogImgWrap.innerHTML = `<img src=${blog.banner} alt="${blog.title}" />`
    this.selectedPostContent.innerHTML = blog.htmlContent as string
  }
}