'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Section from '@/components/section/section'
import Button from '@/components/button/button'

import data from '../../../data/home.json'

interface IProductParams {
  id: string
}

const Product = ({ params }: { params: IProductParams}) => {
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
        <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
      
        <input id='quantity' type="number" value={quantity} />

        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>

      </div>

      <Link href="/cart">Buy</Link>
    </Section>
  )
}

export default Product
