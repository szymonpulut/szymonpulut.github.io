import classNames from 'classnames'

import styles from './Burger.component.module.scss'

interface BurgerComponentProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerComponent: React.FC<BurgerComponentProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const onClickHandler = (): void => {
    setIsOpen((prevState) => !prevState)
  }

  const burgerClassName = classNames(styles.Burger, {
    [styles.Change]: isOpen,
  })

  return (
    <button
      className={burgerClassName}
      onClick={onClickHandler}
      aria-label="Open the menu"
      type="button"
    >
      <div className={styles.Bar1} />
      <div className={styles.Bar2} />
      <div className={styles.Bar3} />
    </button>
  )
}

export default BurgerComponent
