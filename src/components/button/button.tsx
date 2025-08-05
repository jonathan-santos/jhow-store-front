import { ReactNode } from 'react'

import styles from './button.module.scss'

interface IButton {
  children: ReactNode
  onClick?: () => void
  style?: 'danger' | 'confirm'
}

const Button = ({ onClick = () => {}, children, style = 'confirm' } : IButton) => (
  <button onClick={onClick} className={`${styles.button}  ${styles[style]}`}>
    {children}
  </button>
)

export default Button
