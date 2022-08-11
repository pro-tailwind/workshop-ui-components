import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config'

// import { Button } from './Button';

const { theme } = resolveConfig(config)

const story = {
  title: 'Tokens/Font Families',
}

export const FontFamilies = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="divide-y">
      {Object.entries(theme.fontFamily).map(([key, value]) => {
        return (
          <div key={value} className="flex items-center gap-12 py-6">
            <pre className="mt-1 shrink-0 basis-10 font-mono text-sm">
              <code className="rounded bg-yellow-100 px-2 py-1">{key}</code>
            </pre>

            <div className="min-w-0 flex-1">
              <p style={{ fontFamily: value }} className="truncate text-2xl">
                The Pro Tailwind workshops are a whole lot of fun, don't you think?
              </p>
              <pre className="mt-2 max-w-2xl truncate font-mono text-sm">
                <code className="rounded bg-yellow-100 px-2 py-1">{value.join(', ')}</code>
              </pre>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

export default story
