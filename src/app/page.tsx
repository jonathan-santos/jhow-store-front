import Link from 'next/link'
import Image from 'next/image'

import home from '../data/home.json'

import SlideContainer from '@/components/slideContainer/slideContainer'

const Home = () => (
  <>
    <SlideContainer>
      {home.banners.map(item => (
        <Link key={item.id} href="/product/1">
          <Image src={item.src} alt={item.alt} width={1080} height={480} />
        </Link>
      ))}
    </SlideContainer>
    {/* <ul>
      {home.banners.map(item => (
        <li key={item.id}>
          <Link href="/product/1">
            <Image src={item.src} alt={item.alt} width={1080} height={480} />
          </Link>
        </li>
      ))}
    </ul> */}
  </>
);

export default Home;
