import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface SingleProjectModel {
  headerImage: IGatsbyImageData
  projectName: string
  technologiesUsed: string
  onClick: () => void
  slug: string
  shortDesc: string
  innerHtml: string
}
