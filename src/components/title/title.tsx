import { ReactNode, JSX } from 'react'

interface ITitle {
  level: '1' | '2' | '3' | '4' | '5' | '6'
  children: ReactNode
}

const Title = ({ level, children }: ITitle) => {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Heading>{children}</Heading>
  )
}

export default Title
