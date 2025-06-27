import Link from 'next/link'

import home from '../../data/home.json'

const Me = () => (
  <>
    <h1>Me</h1>

    <div>
      <h2>Purchases</h2>

      <ul>
        {home.banners.map(b => (
          <li key={b.id} className='purchase'>
            <Link href="/product/1">
              <span>Purchase 1</span>
            </Link>
          </li>        
        ))}
      </ul>
    </div>
  </>
)

export default Me
