import { ReactNode } from 'react'

import styles from './button.module.scss'

interface IButton {
  children: ReactNode
  onClick: () => void;
}

const Button = ({ onClick, children } : IButton) => (
  <button onClick={() => onClick()} className={styles.button}>
    {children}
  </button>
)

export default Button
