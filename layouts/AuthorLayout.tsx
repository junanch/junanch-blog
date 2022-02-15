import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="items-start space-y-2">
        <div className="flex flex-col items-center mt-8 pt-8 pb-6 space-x-2 bg-gray-200  bg-opacity-25 dark:bg-opacity-10 rounded-xl">
          <Image
            src={avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="w-48 h-48 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
        </div>

        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
      </div>
    </>
  )
}
