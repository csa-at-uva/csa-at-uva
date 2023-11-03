// const googleAPI = 'AIzaSyB9OGdxbDWzEKeyxFaWzWhOypnSsmB-uvo'; 
// const myGoogleCalendarID = 'c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com';

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'list', 'googleCalendar' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listYear'
      },
  
      displayEventTime: false,

      googleCalendarApiKey: 'AIzaSyB9OGdxbDWzEKeyxFaWzWhOypnSsmB-uvo', 
  
      events: 'c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com',
  
      eventClick: function(arg) {
  
        window.open(arg.event.url, '_blank', 'width=700,height=600');
  
        arg.jsEvent.preventDefault();
      }
  
    });
  
    calendar.render();
  });
