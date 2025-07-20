import Link from 'next/link'

import Section from '@/components/section/section'

const cart = [
  { id: 0, quantity: 2, price: 5.0 },
]

const getCartTotal = () => {
  let total = 0;

  cart.forEach(i => {
    total += i.quantity * i.price
  })

  return total
}

const Cart = () => (
  <Section>
    <h1>Your cart</h1>

    <ul className="items">
      {cart.map(p => (
        <li key={p.id} className='item' >
          $ {p.quantity * p.price}
        </li>
      ))}
    </ul>

    <div>
      Total: $ {getCartTotal()}
    </div>

    <Link href="/me">
      Buy all
    </Link>
  </Section>
)

export default Cart
