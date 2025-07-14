import Image from 'next/image'

import styles from './product.module.css'

interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Product = ({ name, image, description }: IProduct) => (
  <div className={styles.product}>
    <Image src={image} alt={description} width={200} height={200} />

    <span>{name}</span>

    <p>{description}</p>
  </div>
)

export default Product
