import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './SingleProject.module.scss'

const SingleProject = ({ headerImage, projectName, technologiesUsed, clicked, children }) => {
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
    <div className={styles.SingleProject} onClick={clicked} role="button" tabIndex={-1}>
      <div className={styles.Image}>
        <GatsbyImage className={styles.Img} image={headerImage} />
      </div>
      <div className={styles.ProjectName}>{projectName}</div>

      <div className={styles.Information}>
        <div className={styles.ShortDescription}>{children}</div>
        <div className={styles.TechnologiesUsed}>{technologiesUsed}</div>
      </div>
    </div>
  )
}

SingleProject.propTypes = {
  headerImage: PropTypes.objectOf(PropTypes.any).isRequired,
  projectName: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default SingleProject
