import React from 'react'

import '../styles/tailwind.css'

export const decorators = [
  (Story) => (
    <div className="antialiased">
      <Story />
    </div>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Tokens', ['Colors', 'Font Sizes', 'Font Families'], 'Components'],
    },
  },
}
