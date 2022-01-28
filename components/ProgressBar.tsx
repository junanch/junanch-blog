import { useNProgress } from '@tanem/react-nprogress'

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
    className="bg-gray-900 h-1 w-full left-0 top-0 fixed z-50"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`
    }}
  ></div>
)

const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({ isAnimating })

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  )
}

export default Progress
