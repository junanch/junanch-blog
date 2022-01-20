import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
  className?: string
}

const Tag = ({ text, className }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a
        className={`mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 ${className}`}
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
