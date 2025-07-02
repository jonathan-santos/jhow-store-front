import Link from 'next/link'

const Header = () => (
  <header>
    Jhow Store

    <ul>
      <li>
        <Link href="/me">My purchases</Link>
      </li>
    </ul>
  </header>
)

export default Header
