import { iBlog, iError, iSubscribe } from "../types";

export class Controller {
  private selectedBlogImgWrap: HTMLElement;
  private selectedBlog: HTMLElement;
  private selectedPostContent: HTMLElement;
  private siteContent: HTMLElement;
  private subscriptionWrap: HTMLElement;
  private subscribeInput: HTMLInputElement;
  private subscriptionStatus: HTMLElement;
  private testimonialIdx: number = 0

  constructor() {

    this.selectedBlogImgWrap = el(constants.SELECTEDBLOGIMGWRAPQUERY) as HTMLElement
    this.selectedBlog = el(constants.SELECTEDBLOGQUERY) as HTMLElement
    this.selectedPostContent = el(constants.SELECTEDPOSTCONTENT) as HTMLElement
    this.siteContent = el(constants.SITECONTENT) as HTMLElement
    this.subscriptionWrap = el(constants.SUBSCRIPTIONWRAPQUERY) as HTMLElement
    this.subscribeInput = el(constants.SUBSCRIBEINPUTQUERY) as HTMLInputElement
    this.subscriptionStatus = el(constants.SUBSCRIPTIONSTATUSQUERY) as HTMLElement
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
      case constants.TESTIMONIALBTN: return this.updateTestimonials(target)
      case constants.SUBSCRIBE: return this.subscribeToNewsletter()
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

  updateTestimonials(target: HTMLElement) {
    const direction = target.getAttribute(constants.DATADIR);
    this.testimonialIdx = direction === constants.NEXT ? this.testimonialIdx + 1 : this.testimonialIdx - 1

    const testimonials = all(constants.TESTIMONIALQUERY)

    if (this.testimonialIdx === testimonials.length) {
      this.testimonialIdx = 0
    }

    if (this.testimonialIdx < 0) {
      this.testimonialIdx = testimonials.length - 1
    }

    testimonials.forEach((testimonial: Element) => testimonial.classList.remove(constants.ACTIVE))
    testimonials[this.testimonialIdx].classList.add(constants.ACTIVE)

    console.log("testimonial idx is", this.testimonialIdx)

  } 

  async subscribeToNewsletter() {
    const email = this.subscribeInput.value
    this.subscriptionWrap.classList.add("-loading")
    const options = {
      // headers: { "Content-type": "multipart/form-data" },
      headers: { "Content-type": "application/json" },
      method: 'POST',
      body: {
        date: new Date().toLocaleString(),
        email,
        type: constants.SUBSCRIPTION
      },
      params: {
        col: "rcnlagos",
        id: "subscribers"
      }
    }

    const response = await useFetch(constants.SUBSCRIBEAPI, options) 

    this.subscriptionWrap.classList.remove("-loading") 
    this.handleResponse(response)
  }

  handleResponse(response: any) {
    let data: iSubscribe

    if (response.data.value) {
      data = response.data.value as iSubscribe
    } else {
      console.log("response.error.value", response.error.value)
      data = { error: false, message: "Successfully subscribed", success: true }
    } 
    this.subscriptionWrap.classList.remove("-loading")
    this.subscriptionStatus.textContent = data.message as string
    this.subscriptionStatus.setAttribute("data-type", data.error ? constants.ERROR : constants.SUCCESS)

    this.subscriptionWrap.classList.add("-show-status")
    setTimeout(() => this.subscriptionWrap.classList.remove("-show-status"), 4000);
  } 
}