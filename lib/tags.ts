import { PostFrontMatter } from 'types/PostFrontMatter'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

interface Options {
  kebabCase: boolean
}

export async function getAllTags(type: 'blog' | 'authors', options: Options = { kebabCase: true }) {
  const files = getFiles(type)

  const tagCount: Record<string, number> = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const matterFile = matter(source)
    const data = matterFile.data as PostFrontMatter
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = options.kebabCase ? kebabCase(tag) : tag
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  return tagCount
}
