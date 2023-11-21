// googleCalendarApiKey: 'AIzaSyB9OGdxbDWzEKeyxFaWzWhOypnSsmB-uvo',
// events: 'c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com',
// facebookAppId: '859184232616360'

'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { FacebookProvider, Group } from 'react-facebook';
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

  function FacebookGroup() {
    return (
      <FacebookProvider appId="859184232616360">
        <Group
          href="https://www.facebook.com/groups/csaatuva"
          width="300"
          showSocialContext={true}
          showMetaData={true}
          skin="light"
        />
      </FacebookProvider>
    );
  }

  return (
    <div>
      <FullCalendar {...calendarProps} />
      <FacebookGroup />
    </div>
  );
}

export default GoogleCalendar;

