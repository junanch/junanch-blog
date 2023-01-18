import Link from '@/components/Link'
import Tag from '@/components/Tag'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  tags: Record<string, number>
  tag?: string
}

export default function TagStatistics({ tags, tag }: Props) {
  const sortedTags = Object?.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <div className="flex justify-start items-center divide-gray-200 dark:divide-gray-700 space-x-4 md:mt-8">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <Link
            href={'/tags'}
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:pr-6 cursor-pointer"
          >
            Tags
          </Link>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags?.map((t) => {
            return (
              <div key={t} className={`py-1 px-2`}>
                <Tag
                  text={t}
                  className={`hover:underline ${tag === t ? '!font-bold underline' : ''}`}
                />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold text-gray-600 dark:text-gray-300"
                >
                  {` (${tags[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
