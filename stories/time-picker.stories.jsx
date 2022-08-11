import React, { useState } from 'react'
import { addHours, startOfToday, addDays, formatISO, setHours } from 'date-fns'

import { TimePicker } from '../components/time-picker'

import { bookingAvailabilities } from '../data'

const story = {
  title: 'Components/Time Picker',
  componnet: TimePicker,
}

export function NoVacancy() {
  const today = startOfToday()
  const [selectedDay] = useState(today)
  return (
    <div className="w-80">
      <TimePicker selectedDay={selectedDay} bookingAvailabilities={bookingAvailabilities} />
    </div>
  )
}

export function Vacancy() {
  const today = startOfToday()
  const [selectedDay] = useState(today)
  const availabilities = [
    { startTime: formatISO(setHours(today, 8)), endTime: formatISO(setHours(today, 9)) },
    { startTime: formatISO(setHours(today, 10)), endTime: formatISO(setHours(today, 11)) },
    { startTime: formatISO(setHours(today, 12)), endTime: formatISO(setHours(today, 13)) },
    { startTime: formatISO(setHours(today, 14)), endTime: formatISO(setHours(today, 15)) },
  ]
  return (
    <div className="w-80">
      <TimePicker selectedDay={selectedDay} bookingAvailabilities={availabilities} />
    </div>
  )
}

export function ScrollingList() {
  const today = startOfToday()
  const [selectedDay] = useState(today)
  const availabilities = [
    { startTime: formatISO(setHours(today, 6)), endTime: formatISO(setHours(today, 7)) },
    { startTime: formatISO(setHours(today, 7)), endTime: formatISO(setHours(today, 8)) },
    { startTime: formatISO(setHours(today, 8)), endTime: formatISO(setHours(today, 9)) },
    { startTime: formatISO(setHours(today, 9)), endTime: formatISO(setHours(today, 10)) },
    { startTime: formatISO(setHours(today, 10)), endTime: formatISO(setHours(today, 11)) },
    { startTime: formatISO(setHours(today, 11)), endTime: formatISO(setHours(today, 12)) },
    { startTime: formatISO(setHours(today, 12)), endTime: formatISO(setHours(today, 13)) },
    { startTime: formatISO(setHours(today, 13)), endTime: formatISO(setHours(today, 14)) },
    { startTime: formatISO(setHours(today, 14)), endTime: formatISO(setHours(today, 15)) },
    { startTime: formatISO(setHours(today, 15)), endTime: formatISO(setHours(today, 16)) },
    { startTime: formatISO(setHours(today, 16)), endTime: formatISO(setHours(today, 17)) },
    { startTime: formatISO(setHours(today, 17)), endTime: formatISO(setHours(today, 18)) },
    { startTime: formatISO(setHours(today, 18)), endTime: formatISO(setHours(today, 19)) },
    { startTime: formatISO(setHours(today, 19)), endTime: formatISO(setHours(today, 20)) },
    { startTime: formatISO(setHours(today, 20)), endTime: formatISO(setHours(today, 21)) },
  ]
  return (
    <div className="h-[400px] w-80 ring ring-black/10">
      <TimePicker selectedDay={selectedDay} bookingAvailabilities={availabilities} />
    </div>
  )
}

export default story
