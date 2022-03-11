import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'
interface Props {
  posts: PostFrontMatter[]
  title?: string
  initialDisplayPosts?: PostFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
  showTags?: boolean
  hiddenSearch?: boolean
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
  showTags = false,
  hiddenSearch = false
}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchValue
      ?.split(' ')
      ?.some((key) => searchContent.toLowerCase().includes(key?.toLowerCase()))
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const groupByYear = (array: PostFrontMatter[]) => {
    return array?.reduce?.((pre, cur, index, arr) => {
      const curYear = formatDate(cur?.date, 'YYYY')
      const firstIndex = arr?.findIndex?.((v) => formatDate(v?.date, 'YYYY') === curYear)
      if (index === firstIndex) {
        return [...pre, curYear, cur]
      }
      return [...pre, cur]
    }, []) as (PostFrontMatter | string)[]
  }

  return (
    <>
      <div>
        {!hiddenSearch && (
          <div className="pt-6 pb-4 space-y-2 md:space-y-4">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
              {title}
            </h1>
            <div className="relative max-w-lg">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="search title or tag"
                className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        )}
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {groupByYear(displayPosts)?.map?.((frontMatter) => {
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
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
