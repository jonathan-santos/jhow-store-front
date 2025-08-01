import { ReactNode } from 'react'

interface IButton {
  children: ReactNode
  onClick: () => void;
}

const Button = ({ onClick, children } : IButton) => (
  <button onClick={() => onClick()} style={{ backgroundColor: '#ff0' }}>
    {children}
  </button>
)

export default Button
