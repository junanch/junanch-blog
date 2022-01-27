import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  // weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface Props {
  frontMatter: PostFrontMatter
  authorDetails: AuthorFrontMatter[]
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
}

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }: Props) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="pt-6">
            <div className="space-y-1">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="space-y-1 space-x-2 flex flex-wrap items-center text-gray-500 dark:text-gray-400">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center space-x-2">
                    {authorDetails.map((author) => (
                      <li className="flex items-center space-x-2" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width="22px"
                            height="22px"
                            alt="avatar"
                            className="rounded-full"
                          />
                        )}
                        <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                          <dt className="sr-only">Name</dt>
                          <dd className="">{author.name}</dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </dd>
                <span className="block">/</span>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-4">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
                {tags && (
                  <>
                    <span className="block">/</span>
                    <dt className="sr-only">Tags</dt>
                    <dd className="text-base leading-4">
                      <ul className="flex justify-center space-x-2">
                        {tags?.map?.((tag, index) => (
                          <li key={tag} className="">
                            <Tag
                              text={tag}
                              className="mr-0 text-base leading-4 !text-gray-500 !dark:text-gray-400"
                            />
                            {index !== tags?.length - 1 && <span>,</span>}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </>
                )}
              </dl>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 dark:divide-gray-700"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-8 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {(next || prev) && (
                  <div className="flex justify-between py-4">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="py-4">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
            <div>
              <div className="pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
