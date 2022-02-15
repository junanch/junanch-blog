import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col space-y-6 justify-start pt-4 pb-10 mb-0 space-x-0 text-md text-gray-500 dark:text-gray-400">
        <div className="flex flex-row items-center">
          <ul className="flex space-x-2">
            <li>{`© ${new Date().getFullYear()}`}</li>
            <li>{` • `}</li>
            <li>{siteMetadata.title}</li>
          </ul>
          <ul className="ml-4 flex space-x-4 items-center cursor-pointer">
            <li>
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            </li>
            <li>
              <SocialIcon kind="github" href={siteMetadata.github} />
            </li>
            <li>
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
