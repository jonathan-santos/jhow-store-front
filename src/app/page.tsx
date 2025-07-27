import Link from 'next/link'
import Image from 'next/image'

import home from '../data/home.json'
import products from '../data/products.json'

import Section from '@/components/section/section'
import SlideContainer from '@/components/slideContainer/slideContainer'
import Product from '@/components/product/Product';
import Faq from '@/components/faq/faq';

const Home = () => (
  <>
    <Section>
      {home.banners.map(item => (
        <Link key={item.id} href="/product/1">
          <Image src={item.src} alt={item.alt} width={1080} height={480} />
        </Link>
      ))}
    </Section>

    <section>
      <SlideContainer>
        {products.slice(0, 9).map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <Product {...item} />
          </Link>
        ))}
      </SlideContainer>
    </section>

    <Section>
      <Faq title='FAQ' questions={home.questions} />
    </Section>
  </>
);

export default Home;
