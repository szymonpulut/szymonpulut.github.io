import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import * as styles from './SingleProject.module.scss'

interface Props {
  headerImage: IGatsbyImageData
  projectName: string
  technologiesUsed: string
  onClick: () => void
}

const SingleProject: React.FC<Props> = ({ headerImage, projectName, technologiesUsed, onClick, children }) => {
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
    <div className={styles.SingleProject} onClick={onClick} role="button" tabIndex={-1}>
      <div className={styles.Image}>
        <GatsbyImage className={styles.Img} image={headerImage} alt={`Screenshot of project ${projectName}`} />
      </div>

      <div className={styles.ProjectName}>{projectName}</div>

      <div className={styles.Information}>
        <div className={styles.ShortDescription}>{children}</div>
        <div className={styles.TechnologiesUsed}>{technologiesUsed}</div>
      </div>
    </div>
  )
}

export default SingleProject
