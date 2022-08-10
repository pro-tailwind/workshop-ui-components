import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config'

// import { Button } from './Button';

const { theme } = resolveConfig(config)

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tokens/Colors',
  // component: Button,
}

export const Primary = () => (
  <div className="mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-8 items-end gap-x-12 gap-y-8">
      {Object.entries(theme.colors).map(([key, value]) => {
        if (typeof value === 'string') return null
        return (
          <>
            <h2 className="p-2 text-right leading-none">{key}</h2>
            <ul className="justify-stretch col-span-7 flex overflow-hidden rounded-md">
              {Object.entries(value).map(([shadeKey, value]) => (
                <li
                  key={`${key}-${value}`}
                  className="flex h-16 w-full items-end justify-start p-2 font-semibold leading-none"
                  style={{
                    backgroundColor: value,
                    color: shadeKey < 400 ? theme.colors[key][900] : theme.colors[key][50],
                  }}
                >
                  {shadeKey}
                </li>
              ))}
            </ul>
          </>
        )
      })}
    </div>
  </div>
)
