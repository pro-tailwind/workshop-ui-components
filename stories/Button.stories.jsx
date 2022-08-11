import React from 'react'

import { Button } from '../components/button'

const story = {
  title: 'Components/Button',
  component: Button,
}

export function All() {
  return (
    <div className="space-y-2">
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <Button hasIcon>Primary large</Button>
        <Button>Without icon</Button>
        <Button look="secondary">Secondary large</Button>
      </div>
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <Button hasIcon size="small">
          Primary small
        </Button>
        <Button size="small" noIcon>
          Without icon
        </Button>
        <Button size="small" look="secondary">
          Secondary small
        </Button>
      </div>
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <Button hasIcon isLoading>
          Loading state
        </Button>
      </div>
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <Button hasIcon disabled>
          Disabled
        </Button>
        <Button disabled>Disabled</Button>
        <Button look="secondary" disabled>
          Disabled
        </Button>
      </div>
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <Button disabled hasIcon size="small">
          Disabled
        </Button>
        <Button disabled size="small">
          Disabled
        </Button>
        <Button look="secondary" disabled noIcon size="small">
          Disabled
        </Button>
      </div>
    </div>
  )
}

export function Large() {
  return (
    <div className="flex max-w-5xl flex-wrap items-center gap-3">
      <Button>Primary</Button>
      <Button look="secondary">Secondary</Button>
    </div>
  )
}

export function Small() {
  return (
    <div className="flex max-w-5xl flex-wrap items-center gap-3">
      <Button size="small">Primary</Button>
      <Button size="small" look="secondary">
        Secondary
      </Button>
    </div>
  )
}

export function Primary() {
  return (
    <div className="flex max-w-5xl flex-wrap items-center gap-3">
      <Button hasIcon>Large with icon</Button>
      <Button>Without icon</Button>
      <Button size="small" hasIcon>
        Small with icon
      </Button>
      <Button size="small">Without icon</Button>
    </div>
  )
}

export function Secondary() {
  return (
    <div className="flex max-w-5xl flex-wrap items-center gap-3">
      <Button look="secondary" hasIcon>
        Large
      </Button>
      <Button look="secondary" size="small" hasIcon>
        Small
      </Button>
    </div>
  )
}

export default story
