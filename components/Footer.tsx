import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col space-y-6 justify-start pt-4 pb-10 mb-0 space-x-0 text-md text-gray-500 dark:text-gray-400">
        <div className="flex flex-row items-center">
          <ul className="flex space-x-2">
            <li>{`© 2022 - ${new Date().getFullYear()}`}</li>
            <li>{` • `}</li>
            <li>Junan Blog</li>
          </ul>
          <ul className="ml-4 flex space-x-2 items-center cursor-pointer">
            <li className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            </li>
            <li className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              <SocialIcon kind="github" href={siteMetadata.github} />
            </li>
            <li className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
