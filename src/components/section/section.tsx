import { ReactNode } from 'react';

import styles from './section.module.scss'

interface ISection {
  children: ReactNode;
}

const Section = ({ children }: ISection) => (
  <section className={styles.section}>
    {children}
  </section>
)

export default Section
