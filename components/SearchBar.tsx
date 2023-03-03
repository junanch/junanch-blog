import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

interface Props {
  title?: string
  onSearch?: (value?: string) => void
  showTags?: boolean
  onShowTags?: (state?: boolean) => void
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SearchInput = ({ title, showTags, onSearch, onShowTags }: Props) => {
  return (
    <div className="pt-6 pb-4 space-y-2 md:space-y-4">
      {title && (
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
          {title}
        </h1>
      )}
      <div className="max-w-lg flex gap-x-2 items-center">
        <div className="relative flex-1">
          <input
            type="text"
            onKeyDown={(event) => {
              if (event?.key === 'Enter') {
                // @ts-ignore
                onSearch?.(event?.target?.value)
              }
            }}
            placeholder="search title or tag"
            aria-label="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex-none">
          <Switch.Group as="div" className="flex items-center">
            <Switch
              checked={showTags}
              onChange={onShowTags}
              className={classNames(
                showTags ? 'bg-gray-400' : 'bg-gray-200',
                'relative inline-flex h-10 w-12 flex-shrink-0 cursor-pointer rounded-md border-4 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  showTags ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-8 w-5 transform rounded bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
              {/* <span className="">show</span> */}
            </Switch>
          </Switch.Group>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
