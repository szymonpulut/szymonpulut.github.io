import React from 'react'

import * as styles from './Backdrop.module.scss'

interface Props {
  show: boolean
  closeModal: () => void
}

const Backdrop: React.FC<Props> = ({ show = false, closeModal }) => {
  return show ? (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    <div className={styles.Backdrop} onClick={closeModal} />
  ) : null
}

export default Backdrop
