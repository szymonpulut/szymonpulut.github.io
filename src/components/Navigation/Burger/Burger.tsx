import React, { useState } from 'react'

import * as styles from './Burger.module.scss'

interface Props {
  toggleSidebar: () => void
}

const Burger: React.FC<Props> = ({ toggleSidebar }) => {
  const [burgerStyles, setBurgerStyles] = useState([styles.Burger])

  const onClickHandler = (): void => {
    if (!burgerStyles.includes(styles.Change)) {
      setBurgerStyles([styles.Burger, styles.Change])
    } else {
      setBurgerStyles([styles.Burger])
    }

    toggleSidebar()
  }

  return (
    <button className={burgerStyles.join(' ')} onClick={onClickHandler} aria-label="Open the menu" type="button">
      <div className={styles.Bar1} />
      <div className={styles.Bar2} />
      <div className={styles.Bar3} />
    </button>
  )
}

export default Burger
