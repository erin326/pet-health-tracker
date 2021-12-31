import {useState} from 'react';
import FullCalendar, {formatData} from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import Event from './Event';


// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import 'react-calendar/dist/Calendar.css';

// function goToEventForm(){
//     <Link to={}></Link>
// }

function HealthLog({pets}) {

    // const [date, setDate]  = useState(new Date());
    const [showEventForm, setShowEventForm] = useState(false);

    const [eventData, setEventData] = useState(['event']);
    const [text, setText] = useState('hi');

    function handleSubmitEvent(e) {
      e.preventDefault();

      
      fetch("api/events", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              text: text, 
            
          }),
      })
      .then((r) => r.json())
      .then((newEvent) => setEventData(newEvent))
  }
   
   
    const handleDateSelect = (selectInfo) => {
        setShowEventForm(true);
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            // id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr
            // allDay: selectInfo.allDay
          })
        }
      }
    // const events = [{ title: "today's event", date: new Date() }]
    return (
        <>
        <FullCalendar 
        initialView="timeGridWeek"

        headerToolbar={{
            left: "prev,next,today,addEventButton",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        customButtons={{
            addEventButton: {
                text: 'add event..'
                 
        }}}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dateClick={function(info) {
            alert('Clicked on' + info.dateStr);
        }}
        editable={true}
        selectable={true}
        select={handleDateSelect}
        // events={events}
        
        />
    
        {/* <Event />  */}
        </>
    )
}

export default HealthLog;