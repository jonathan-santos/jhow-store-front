import styles from './slideContainer.module.css'

const SlideContainer = (props) => (
  // <>{String(Array.isArray(props.children))}</>
  <ul className={styles.container}>
    {props.children.map(((child, i) => (
      <li key={i} className={styles.item}>
        {child}
      </li>
    )))}
  </ul>
)

export default SlideContainer
