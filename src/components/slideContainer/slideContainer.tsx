import styles from './slideContainer.module.css'

const SlideContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode[];
}>) => (
  <ul className={styles.container}>
    {children.map(((child, i) => (
      <li key={i} className={styles.item}>
        {child}
      </li>
    )))}
  </ul>
)

export default SlideContainer
