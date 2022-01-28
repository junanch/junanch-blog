import * as React from 'react'
import { useNProgress } from '@tanem/react-nprogress'
import { useRouter } from 'next/router'

const Container = ({ animationDuration, children, isFinished }) => (
  <div
    className="pointer-events-none"
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`
    }}
  >
    {children}
  </div>
)

const Bar = ({ animationDuration, progress }) => (
  <div
    className="bg-gray-900 dark:bg-gray-100 h-2 w-full left-0 top-0 fixed z-20"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`
    }}
  ></div>
)

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

export const RouterProgressBar = () => {
  const { isAnimating } = useRouterProgress()
  const { animationDuration, isFinished, progress } = useNProgress({ isAnimating })

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  )
}

export const ScrollProgressBar = () => {
  const [scroll, setScroll] = React.useState(0)
  const ticking = React.useRef(false)

  React.useEffect(() => {
    document.addEventListener('scroll', updateProgressBar)
    updateProgressBar()
    return () => document.removeEventListener('scroll', updateProgressBar)
  }, [])

  const updateProgressBar = () => {
    if (!ticking.current) {
      const windowHeight = document.documentElement.offsetHeight - window.innerHeight

      window.requestAnimationFrame(() => {
        setScroll((window.pageYOffset / windowHeight) * 100)
        ticking.current = false
      })
    }
    ticking.current = true
  }

  return (
    <div className="w-full left-0 top-0 fixed z-20">
      <div className="h-2 bg-gray-900 dark:bg-gray-100" style={{ width: `${scroll}%` }}></div>
    </div>
  )
}
