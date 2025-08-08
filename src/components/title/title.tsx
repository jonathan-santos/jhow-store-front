import { ReactNode, JSX } from 'react'

import styles from './title.module.scss'

interface ITitle {
  level: '1' | '2' | '3' | '4' | '5' | '6'
  children: ReactNode
}

const Title = ({ level, children }: ITitle) => {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Heading className={styles.title}>{children}</Heading>
  )
}

export default Title
