import React from 'react'

import '../styles/tailwind.css'

export const decorators = [
  (Story, context) => {
    const { theme } = context.globals
    return (
      <div className="antialiased" data-theme={theme}>
        <Story />
      </div>
    )
  },
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

// Add theme dropdown to toolbar
// .storybook/preview.js
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Multi-theme support',
    defaultValue: 'base',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        {
          value: 'base',
          title: 'Theme: Base',
        },
        {
          value: 'rainforest',
          title: 'Theme: Rainforest',
        },
        {
          value: 'candy',
          title: 'Theme: Candy',
        },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
}
