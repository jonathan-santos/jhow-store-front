import { ReactNode } from 'react'

import styles from './slideContainer.module.scss'

interface ISlideContainer {
  children: ReactNode[];
}

const SlideContainer = ({ children }: ISlideContainer) => (
  <ul className={styles.container}>
    {children.map(((child, i) => (
      <li key={i} className={styles.item}>
        {child}
      </li>
    )))}
  </ul>
)

export default SlideContainer
