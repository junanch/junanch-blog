import * as React from 'react'

interface PropsType {
  isOpened: boolean
  onToggle: () => void
}

export default function MobileMenu({ isOpened, onToggle }: PropsType) {
  return (
    <button
      type="button"
      className={`mobile-menu ${
        isOpened ? 'opened' : ''
      } cursor-pointer w-8 h-8 p-1 sm:hidden rounded  hover:bg-gray-200 dark:hover:bg-gray-800`}
      onClick={onToggle}
      aria-label="Toggle Menu"
    >
      <span className="bg-gray-900 dark:bg-gray-100"></span>
      <span className="bg-gray-900 dark:bg-gray-100"></span>
      <span className="bg-gray-900 dark:bg-gray-100"></span>
    </button>
  )
}
