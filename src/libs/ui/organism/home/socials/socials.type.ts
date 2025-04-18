export const iconList = {
  librarybooks: '\\e928',
  email: '\\e900',
  locationon: '\\e902',
  settings: '\\e929',
  imagesearchroller: '\\e901',
  bedtime: '\\e92a',
  fire: '\\e92b',
  facebook2: '\\e92c',
  tag: '\\e92d',
  book: '\\e92e',
  arond: '\\e903',
  briefcase: '\\e904',
  coffee: '\\e905',
  downloadcl: '\\e906',
  facebook: '\\e907',
  file: '\\e908',
  filetext: '\\e909',
  github: '\\e90a',
  home: '\\e90b',
  image1: '\\e90c',
  link1: '\\e90d',
  linkedin: '\\e90e',
  mail: '\\e90f',
  messagec: '\\e910',
  messages: '\\e911',
  paperclip: '\\e92f',
  phone: '\\e912',
  save: '\\e913',
  tool: '\\e930',
  home2: '\\f015',
  image3: '\\f03e',
  photo: '\\f03e',
  picture2: '\\f03e',
  cogs: '\\f085',
  gears: '\\f085',
  bookmark: '\\f097',
  facebook1: '\\f09a',
  facebook3: '\\f09a',
  github1: '\\f09b',
  linkedin1: '\\f0e1',
  envelopeo: '\\e914',
  envelopec: '\\e915',
  envelopec1: '\\e916',
  flag: '\\e917',
  flag1: '\\e918',
  star: '\\e919',
  star1: '\\e91a',
  information: '\\e91b',
  information1: '\\e91c',
  clipboardtext: '\\e91d',
  clipboardtext1: '\\e91e',
  folderdownload: '\\e91f',
  apparel: '\\e931',
  bookmark2: '\\e932',
  envelope: '\\e921',
  heart: '\\e922',
  home1: '\\e923',
  lightbulb: '\\e924',
  location: '\\e925',
  notifications: '\\e926',
  Notificationoutline: '\\e927',
  photo1: '\\e933',
  usersolidcircle: '\\e934',
  wrench: '\\e935',
  zoomin: '\\e936',
  zoomout: '\\e937',
} as const

export type IconType = keyof typeof iconList

export type SocialsType = {
  icon?: IconType
}
