import Image from 'next/image'

import data from '../../../data/home.json'

const Product = async ({ params }) => {
  const { id: productId } = await params

  const product = data.banners.find(p => p.id === Number(productId))

  if (!product) {
    return (
      <>
        <h1>Not Found</h1>
      </>
    )
  }
  
  return (
    <>
      <h1>{product.alt}</h1>

      <Image src={product.src} alt={product.alt} width={1080} height={480} />
    </>
  )
}

export default Product
