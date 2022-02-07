import SectionContainer from './SectionContainer'
import Header from './Header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SectionContainer>
        <div className="flex flex-col justify-between min-h-screen">
          <main className="mb-auto">{children}</main>
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
