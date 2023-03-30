

export interface iCropperOptions {
  viewMode: number;
  dragMode: string;
  aspectRatio: number
}


export interface iColor {
  100: string;
  200: string;
  600: string;
  700: string;
}

export interface iObserver {
  pLabel: string; // parent label
  cLabel: string; // child label
  direction: string; // direction of scroll 
}

export interface iUpload {
  path: string;
  name: string;
  file: string;
  type: string;
}

export interface iRoute {
  fromRoute: string;
  toRoute: string;
}

export interface iDynamicObject {
  // 👇️ key         value
  [key: string]: string | number;
}

export interface iDepartment {
  about?: string;
  name?: string;
  image?: string;
  prop?: string;
  status?: string;
}

export interface iPastorate {
  image?: string;
  name?: string;
  profile?: string;
  role?: string;
  status?: string;
  title?: string;
}

export interface iPrayercell {
  address?: string;
  location?: string;
  name?: string;
  status?: string;
  coordinator?: string;
  phoneNumber?: string;
}

export interface iProgram {
  audiourl?: string;
  datetime?: string;
  image?: string;
  minister?: string;
  status?: string;
  title?: string;
  videourl?: string;
  type?: string;
}

export interface iSlider {
  image?: string;
  slideNo?: string;
  status?: string;
  uploadDate?: string;
  page?: string;
}

export interface iProgramCategory {
  about?: string;
  image?: string;
  name?: string;
  status?: string;
  time?: string;
}

export interface iBlog {
  banner?: string;
  datetime?: string;
  htmlContent?: string;
  status?: string;
  subline?: string;
  thumbnail?: string;
  title?: string
}

export interface iTestimonial {
  name?: string;
  quote?: string;
  image?: string;
}

export interface iAccount {
  accountName?: string;
  accountNumber?: string;
  bank?: string;
  currencyName?: string;
  currencySymbol?: string;
  status?: string;
}

export interface iGlobal {
  departments?: iDepartment[];
  pastorates?: iPastorate[];
  prayercells?: iPrayercell[];
  programs?: iProgram[];
  sliders?: iSlider[];
  programCategories?: iProgramCategory[];
  blogs?: iBlog[];
  testimonials?: iTestimonial[];
  accounts?: iAccount[];
  renderedPrograms: iProgram[];
  searchedPrograms: iProgram[];
}

export interface iSubscribe {
  error?: boolean;
  message?: string;
  success?: boolean
}

export interface iPartnerDetails {
  address?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
}

export interface iError {
  message?: string;
}

export interface iQuery {
  col?: string;
  id?: string;
}

export interface iOptions extends iQuery {
  data?: any;
}

export interface iApiOptions {
  collection?: string;
  id?: string;
  dataToStore?: any;
  wrapperHTML?: HTMLElement;
  statusHTML?: HTMLElement
}