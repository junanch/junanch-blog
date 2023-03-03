import { ComponentProps, useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout2'
import { PageSEO } from '@/components/SEO'
import SearchBar from '@/components/SearchBar'

export const POSTS_PER_PAGE = 5

export const getStaticProps: GetStaticProps<{
  posts: ComponentProps<typeof ListLayout>['posts']
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [showTags, setShowTags] = useState<boolean>(false)
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <SearchBar
        onSearch={(value) => setSearchValue(value)}
        showTags={showTags}
        onShowTags={(state) => setShowTags(state)}
      />
      <ListLayout posts={posts} searchValue={searchValue} showTags={showTags} />
    </>
  )
}
