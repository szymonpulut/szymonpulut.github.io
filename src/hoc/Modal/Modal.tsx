import React, { useCallback, useEffect } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import Backdrop from './Backdrop/Backdrop'

import * as styles from './Modal.module.scss'

interface Props {
  show: boolean
  closeModal: () => void
  innerHtml: string
  headerImage: IGatsbyImageData
  projectName: string
  technologies: string
}

const Modal: React.FC<Props> = ({ show, closeModal, innerHtml, headerImage, projectName, technologies }) => {
  const escapeKeyCloseModal = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escapeKeyCloseModal)

    return () => {
      document.removeEventListener('keydown', escapeKeyCloseModal)
    }
  })

  return show ? (
    <>
      <Backdrop show={show} closeModal={closeModal} />

      <div
        className={styles.Modal}
        id="modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.Image}>
          <GatsbyImage className={styles.Image} image={headerImage} alt={`Screenshot of project ${projectName}`} />
        </div>

        <h3>{projectName}</h3>
        <h4>{technologies}</h4>

        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: innerHtml }} />
      </div>
    </>
  ) : null
}

export default Modal
