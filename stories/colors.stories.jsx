import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config'

const { theme } = resolveConfig(config)

const story = {
  title: 'Tokens/Colors',
}

export const Colors = () => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    {Object.entries(theme.colors).map(([key, value]) => {
      if (typeof value === 'string') return null
      return (
        <div key={value} className="flex items-center gap-12 py-6">
          <pre className="mt-1 shrink-0 basis-20 text-right font-mono text-sm">
            <code
              className="rounded px-2 py-1 font-medium"
              style={{ backgroundColor: theme.colors[key][100], color: theme.colors[key][900] }}
            >
              {key}
            </code>
          </pre>

          <ul className="flex flex-1 overflow-hidden rounded-md">
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
        </div>
      )
    })}
  </div>
)

export default story
