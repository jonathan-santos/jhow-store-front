import Link from 'next/link'
import Image from 'next/image'

import home from '../data/home.json'

const Home = () => (
  <>
    <header>
      Jhow Store

      <ul>
        <li>
          <Link href="/me">My purchases</Link>
        </li>
      </ul>
    </header>

    <main>
      <ul>
        {home.banners.map(item => (
          <li key={item.id}>
            <Link href="/product/1">
              <Image src={item.src} alt={item.alt} width={1080} height={480} />
            </Link>
          </li>
        ))}
      </ul>
    </main>

    <footer>
      Created by Jhow
    </footer>
  </>
);

export default Home;
