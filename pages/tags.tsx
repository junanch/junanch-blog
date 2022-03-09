import { PageSEO } from '@/components/SEO'
import TagStatistics from '@/components/TagStatistics'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

export const getStaticProps: GetStaticProps<{
  tags: Record<string, number>
  posts: PostFrontMatter[]
}> = async () => {
  const tags = await getAllTags('blog')
  const allPosts = await getAllFilesFrontMatter('blog')

  return { props: { tags, posts: allPosts } }
}

export default function Tags({ tags, posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <TagStatistics tags={tags} />
      <ListLayout posts={posts} showTags hiddenSearch />
    </>
  )
}
