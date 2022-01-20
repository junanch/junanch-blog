import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <div className="max-w-3xl px-4 mx-auto">{children}</div>
}
