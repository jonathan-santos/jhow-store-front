import Link from 'next/link'
import Image from 'next/image'

import home from '../data/home.json'

import SlideContainer from '@/components/slideContainer/slideContainer'
import Product from '@/components/product/Product';

const Home = () => (
  <>
    {home.banners.map(item => (
      <Link key={item.id} href="/product/1">
        <Image src={item.src} alt={item.alt} width={1080} height={480} />
      </Link>
    ))}

    <SlideContainer>
      {home.products.map((item) => (
        <Link key={item.id} href={`/product/${item.id}`}>
          <Product {...item} />
        </Link>
      ))}
    </SlideContainer>
  </>
);

export default Home;
