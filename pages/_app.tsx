import * as React from 'react'
import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { useRouter } from 'next/router'
import ProgressBar from '@/components/ProgressBar'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function useRouterProgress() {
  const [isAnimating, setIsAnimating] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return { isAnimating }
}

export default function App({ Component, pageProps }: AppProps) {
  const { isAnimating } = useRouterProgress()

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <ProgressBar isAnimating={isAnimating} />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
