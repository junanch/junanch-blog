import SectionContainer from './SectionContainer'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SectionContainer>
        {/* <div className="flex flex-col justify-between min-h-screen"> */}
        <div className="flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 72px)' }}>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
