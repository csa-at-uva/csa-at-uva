// googleCalendarApiKey: 'AIzaSyB9OGdxbDWzEKeyxFaWzWhOypnSsmB-uvo',
// events: 'c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com',

'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import 'app/globals.css'

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

  return <FullCalendar {...calendarProps} />;
}

export default GoogleCalendar;

