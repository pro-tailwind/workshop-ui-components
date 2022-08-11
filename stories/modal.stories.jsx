import React, { useState } from 'react'
import cx from 'classnames'

import { PrettyModal } from '../components/pretty-modal'
import { Button } from '../components/button'

const story = {
  title: 'Components/Modal',
  component: PrettyModal,
}

const dogs = [
  'poodle',
  'corgi',
  'labrador',
  'golden retriever',
  'staffie',
  'greyhound',
  'german shepherd',
  'chiuaua',
  'some dog',
]

export function WithFooterActions() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button size="small" look="secondary" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <PrettyModal
        size="small"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Want to adopt a corgi puppy?"
        footer={
          <div className="flex justify-end gap-4">
            <Button size="small" look="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button size="small" onClick={() => setIsOpen(false)}>
              Hell yeah, do it!
            </Button>
          </div>
        }
      >
        <p>You've seen the photos and videos on Twitter. Of course you want to, lol.</p>
      </PrettyModal>
    </>
  )
}

export default story
