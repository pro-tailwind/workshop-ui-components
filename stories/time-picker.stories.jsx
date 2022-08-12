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
      startTime: toCalendarDateTime(today()).add({ hours: 8 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 9 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 9 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 10 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 10 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 11 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 11 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 12 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 12 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 13 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 13 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 14 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 14 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 15 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 15 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 16 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 16 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 17 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 17 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 18 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 18 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 19 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 19 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 20 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 20 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 21 }).toString(),
    },
    {
      startTime: toCalendarDateTime(today()).add({ hours: 21 }).toString(),
      endTime: toCalendarDateTime(today()).add({ hours: 22 }).toString(),
    },
  ]
  return (
    <div className="h-[400px] w-80 ring ring-black/10">
      <TimePicker selectedDate={selectedDate} bookingAvailabilities={availabilities} />
    </div>
  )
}

export default story
