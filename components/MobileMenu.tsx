import * as React from 'react'

interface PropsType {
  isOpened: boolean
  onToggle: () => void
}

export default function MobileMenu({ isOpened, onToggle }: PropsType) {
  return (
    <button
      type="button"
      className={`mobile-menu ${isOpened ? 'opened' : ''} cursor-pointer w-8 h-8 p-1 sm:hidden`}
      onClick={onToggle}
      aria-label="Toggle Menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-900 dark:text-gray-100 w-6 h-6">
        <line
          x1="2"
          y1="6"
          x2="14"
          y2="6"
          strokeLinecap="round"
          className="stroke-gray-900 dark:stroke-gray-100 stroke-[3px] transition-all"
        />
        <line
          x1="2"
          y1="14"
          x2="24"
          y2="14"
          strokeLinecap="round"
          className="stroke-gray-900 dark:stroke-gray-100 stroke-[3px] transition-all"
        />
        <line
          x1="2"
          y1="22"
          x2="14"
          y2="22"
          className="stroke-gray-900 dark:stroke-gray-100 stroke-[3px] transition-all"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}
