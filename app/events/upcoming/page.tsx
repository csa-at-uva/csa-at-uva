'use client';
import 'app/globals.css'

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

function GoogleCalendar() {
  const calendarProps = {
    plugins: [dayGridPlugin, googleCalendarPlugin],
    initialView: 'dayGridMonth',
    events: {
      googleCalendarApiKey: 'AIzaSyB9OGdxbDWzEKeyxFaWzWhOypnSsmB-uvo',
      googleCalendarId: 'c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com',
    },
    eventColor: '#8B0000',
    contentHeight: 400,
    fixedWeekCount: false
  };

  return (
    <div className='content'>
      <div className='header'>
        <h1>2023-2024 Events Calendar</h1>
      </div>
      <FullCalendar {...calendarProps} />
    </div>
  );
}

export default GoogleCalendar;

