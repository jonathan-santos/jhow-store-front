import Link from 'next/link'

import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>
      Jhow Store
    </div>

    <ul className={styles.list}>
      <li>
        <Link href="/me">My purchases</Link>
      </li>
    </ul>
  </header>
)

export default Header
