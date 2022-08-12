import React, { useState } from 'react'

import { today, toCalendarDateTime } from '@internationalized/date'

import { TimePicker } from '../components/time-picker'

import { bookingAvailabilities } from '../data'

const story = {
  title: 'Components/Time Picker',
  componnet: TimePicker,
}

export function NoVacancy() {
  const [selectedDate] = useState(today())
  return (
    <div className="w-80">
      <TimePicker selectedDate={selectedDate} bookingAvailabilities={bookingAvailabilities} />
    </div>
  )
}

export function Vacancy() {
  const [selectedDate] = useState(today())
  const availabilities = [
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
  ]
  return (
    <div className="w-80">
      <TimePicker selectedDate={selectedDate} bookingAvailabilities={availabilities} />
    </div>
  )
}

export function ScrollingList() {
  const [selectedDate] = useState(today())
  const availabilities = [
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 1 }).toString(),
    },
  ]
  return (
    <div className="h-[400px] w-80 ring ring-black/10">
      <TimePicker selectedDate={selectedDate} bookingAvailabilities={availabilities} />
    </div>
  )
}

export default story
