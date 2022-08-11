import React, { useState } from 'react'
import { addHours, startOfToday, formatISO } from 'date-fns'

import { Calendar } from '../components/calendar'
import { bookingAvailabilities } from '../data'
import { addDays } from 'date-fns/esm'

const story = {
  title: 'Components/Calendar',
  component: Calendar,
}

export function All() {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  return (
    <div className="max-w-md">
      <Calendar
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        bookingAvailabilities={bookingAvailabilities}
      />
    </div>
  )
}

export function WithAvailabilityToday() {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(addDays(today, 1))
  const availabilities = [
    { startTime: formatISO(today), endTime: addHours(today, 1) },
    { startTime: addDays(today, 2), endTime: addHours(addDays(today, 2), 1) },
  ]

  console.log({ availabilities })
  return (
    <div className="max-w-md">
      <Calendar
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        bookingAvailabilities={availabilities}
      />
    </div>
  )
}

export default story
