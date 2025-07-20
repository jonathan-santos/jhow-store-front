import { ReactNode } from 'react';

import styles from './section.module.scss'

const Section = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <section className={styles.section}>
    {children}
  </section>
)

export default Section
