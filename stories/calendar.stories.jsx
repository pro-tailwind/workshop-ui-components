import React, { useState } from 'react'
import { now, today, toCalendarDateTime } from '@internationalized/date'

import { Calendar } from '../components/calendar'
import { CalendarDay } from '../components/calendar/calendar-day'
import { bookingAvailabilities } from '../data'

const story = {
  title: 'Components/Calendar',
  component: Calendar,
}

export function All() {
  const [selectedDate, setSelectedDate] = useState(now())
  return (
    <div className="max-w-md">
      <Calendar
        aria-label="Availability calendar"
        value={selectedDate}
        onChange={setSelectedDate}
        bookingAvailabilities={bookingAvailabilities}
        minValue={today()}
        maxValue={today().add({ months: 6 })}
      />
    </div>
  )
}

export function WithAvailabilityToday() {
  // Set selected date to tomorrow (so we can see today's availability status)
  const [selectedDate, setSelectedDate] = useState(now().add({ days: 1 }))
  // Mock availabilities (probably better suited for a mock file!)
  const availabilities = [
    { startTime: toCalendarDateTime(today()).add({ hours: 8 }).toString(), endTime: null },
  ]

  return (
    <div className="max-w-md">
      <Calendar
        aria-label="Availability calendar"
        value={selectedDate}
        onChange={setSelectedDate}
        bookingAvailabilities={availabilities}
        minValue={today()}
        maxValue={today().add({ months: 6 })}
      />
    </div>
  )
}

export default story
