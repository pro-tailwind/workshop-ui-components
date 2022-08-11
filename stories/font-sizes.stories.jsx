import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config'

const { theme } = resolveConfig(config)

const story = {
  title: 'Tokens/Font Sizes',
}

export const FontSizes = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="divide-y">
      {Object.entries(theme.fontSize).map(([key, value]) => {
        return (
          <div key={value} className="flex items-center gap-12 py-6">
            <pre className="mt-1 shrink-0 basis-10 font-mono text-sm">
              <code className="rounded bg-yellow-100 px-2 py-1">{key}</code>
            </pre>
            <div className="min-w-0 flex-1">
              <p
                style={{ fontSize: value[0], lineHeight: value[1].lineHeight }}
                className="truncate"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

export default story
