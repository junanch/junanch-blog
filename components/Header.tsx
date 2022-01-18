import * as React from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'
import MobileMenu from './MobileMenu'

function useIsScrollTop() {
  const [isTop, setIsTop] = React.useState(true)
  React.useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isTop
}

function useToggleMenu() {
  const [menuShow, setMenuShow] = React.useState(false)
  const onMenuToggle = () => {
    setMenuShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }
  return [menuShow, onMenuToggle] as const
}

export default function Header() {
  const [menuShow, onMenuToggle] = useToggleMenu()
  const isTop = useIsScrollTop()

  return (
    <>
      <header
        className={`flex items-center justify-between py-4 sticky top-0 z-20 border-b ${
          isTop ? 'border-transparent' : 'border-gray-900/10 dark:border-gray-300/10'
        } bg-white dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 backdrop-saturate-150 backdrop-blur`}
      >
        <nav className="w-full mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileMenu isOpened={menuShow} onToggle={onMenuToggle} />
          </div>
        </nav>
      </header>

      {/* Mobile Modal */}
      <div
        className={`sm:hidden fixed w-full h-screen right-0 z-20 transform ease-in-out duration-500 ${
          menuShow ? 'translate-x-0' : ' -translate-x-full'
        } bg-white dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 backdrop-saturate-150 backdrop-blur`}
      >
        <nav className="h-full mt-8 space-y-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12">
              <Link
                href={link.href}
                title={link.title}
                className="text-xl font-semibold leading-8 tracking-wide text-gray-700 dark:text-gray-100 hover:text-black dark:hover:text-white"
                onClick={onMenuToggle}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
