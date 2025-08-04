'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Section from '@/components/section/section'
import Quantity from '@/components/quantity/quantity'

import data from '../../../data/home.json'

interface IProductPage {
  params: {
    id: string
  }
}

const Product = ({ params }: IProductPage) => {
  const { id: productId } = params

  const [quantity, setQuantity] = useState(0)

  const product = data.banners.find(p => p.id === Number(productId))

  if (!product) {
    return <h1>Not Found</h1>
  }
  
  return (
    <Section>
      <h1>{product.alt}</h1>

      <Image src={product.src} alt={product.alt} width={1080} height={480} />

      <div>
        <Quantity value={quantity} update={v => setQuantity(v)} />
      </div>

      <Link href="/cart">Buy</Link>
    </Section>
  )
}

export default Product
