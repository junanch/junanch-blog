import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useCallback, useMemo } from 'react'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'

interface Props {
  posts: PostFrontMatter[]
  searchValue?: string
  showTags?: boolean
  showGroupByYear?: boolean
}

export default function ListLayout({
  posts,
  searchValue,
  showTags = false,
  showGroupByYear = true
}: Props) {
  const filteredPosts = useMemo(
    () =>
      posts?.filter?.((frontMatter) => {
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
        return searchValue
          ?.split(' ')
          ?.some((key) => searchContent.toLowerCase().includes(key?.toLowerCase()))
      }),
    [posts, searchValue]
  )

  const groupByYear = useCallback((array: PostFrontMatter[]) => {
    return array?.reduce?.((pre, cur, index, arr) => {
      const curYear = formatDate(cur?.date, 'YYYY')
      const firstIndex = arr?.findIndex?.((v) => formatDate(v?.date, 'YYYY') === curYear)
      if (index === firstIndex) {
        return [...pre, curYear, cur]
      }
      return [...pre, cur]
    }, []) as (PostFrontMatter | string)[]
  }, [])

  const displayPosts = useMemo(() => {
    const list = !searchValue ? posts : filteredPosts
    return showGroupByYear ? groupByYear(list) : list
  }, [posts, filteredPosts, searchValue, showGroupByYear, groupByYear])

  return (
    <>
      <ul>
        {!displayPosts?.length && 'No posts found.'}
        {displayPosts?.map?.((frontMatter) => {
          if (typeof frontMatter === 'string') {
            return (
              <h2 key={frontMatter} className="pt-4 text-2xl font-bold leading-8 tracking-tight">
                <Link
                  id={frontMatter}
                  href={`/blog/#${frontMatter}`}
                  className="text-gray-900 dark:text-gray-100"
                >
                  {frontMatter}
                </Link>
              </h2>
            )
          }
          const { date, title, slug, tags } = frontMatter
          return (
            <li key={slug} className="py-4 flex space-x-4">
              <dl className="min-w-[72px]">
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-8 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date, 'MM/DD')}</time>
                </dd>
              </dl>
              <div>
                <h3 className="text-xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>
                </h3>
                {showTags && tags?.length > 0 && (
                  <div className="flex flex-wrap">
                    {tags?.map?.((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
