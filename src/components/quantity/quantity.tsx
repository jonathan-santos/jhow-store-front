import styles from './quantity.module.scss'

interface IQuantity {
  value: number;
  update: (n: number) => void;
}

const Quantity = ({ value, update } : IQuantity) => (
  <div className={styles.quantity}>
    <button onClick={() => update(value - 1)}>-</button>
  
    <input id='quantity' type="number" value={value} />

    <button onClick={() => update(value + 1)}>+</button>

  </div>
)

export default Quantity
