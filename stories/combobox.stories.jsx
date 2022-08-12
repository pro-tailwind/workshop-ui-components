import React, { useState } from 'react'
import cx from 'clsx'

import { Combobox } from '../components/combobox'

const story = {
  title: 'Components/Combobox',
  component: Combobox,
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

export function All() {
  const [selected, setSelected] = useState(null)
  const [selected1, setSelected1] = useState(null)
  const [selected2, setSelected2] = useState(null)
  return (
    <div className="space-y-2">
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <div className="w-72">
          <h2>Primary</h2>
          <Combobox data={dogs} selected={selected} setSelected={setSelected} />
        </div>
        <div className="w-72">
          <h2>Secondary</h2>
          <Combobox look="secondary" data={dogs} selected={selected1} setSelected={setSelected1} />
        </div>
        <div className="w-72">
          <h2>Custom item display</h2>
          <Combobox
            data={dogs}
            selected={selected2}
            setSelected={setSelected2}
            placeholder="Choose a good pup..."
            itemDisplay={({ item, active, selected }) => (
              <div className="flex gap-2">
                <span className="font-semibold">{item}</span>
                <span className={cx(active ? 'text-slate-200' : 'text-slate-500')}>
                  good pup {selected ? '😎' : '🐶'}
                </span>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export function Primary() {
  const [selected, setSelected] = useState(null)
  return (
    <div className="space-y-2">
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <div className="w-64">
          <h2>Primary</h2>
          <Combobox data={dogs} selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </div>
  )
}

export function Secondary() {
  const [selected, setSelected] = useState(null)
  return (
    <div className="space-y-2">
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <div className="w-64">
          <h2>Primary</h2>
          <Combobox look="secondary" data={dogs} selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </div>
  )
}

export function CustomItemDisplay() {
  const [selected, setSelected] = useState(null)
  const [selected1, setSelected1] = useState(null)
  return (
    <div className="space-y-2">
      <div className="flex max-w-5xl flex-wrap items-center gap-3">
        <div className="w-64">
          <h2>Custom item display</h2>
          <Combobox
            data={dogs}
            selected={selected}
            setSelected={setSelected}
            itemDisplay={({ item, active, selected }) => (
              <div className="flex gap-2">
                <span className="font-semibold">{item}</span>
                <span className={cx(active ? 'text-slate-200' : 'text-slate-500')}>
                  good pup {selected ? '😎' : '🐶'}
                </span>
              </div>
            )}
          />
        </div>
        <div className="w-64">
          <h2>Custom item display</h2>
          <Combobox
            look="secondary"
            data={dogs}
            selected={selected1}
            setSelected={setSelected1}
            itemDisplay={({ item, active, selected }) => (
              <div className="flex gap-2">
                <span className="font-semibold">{item}</span>
                <span className={cx(active ? 'text-slate-200' : 'text-slate-500')}>
                  good pup {selected ? '😎' : '🐶'}
                </span>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default story
