import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';


function HealthLog({id}) {
   
     const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr
          })

          fetch("api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            
                title: title,
                pet_id: id,
                start: selectInfo.startStr,
                end: selectInfo.endStr
            }),
          })
          .then((r) => r.json())
          .then((data) => console.log(data))
        }
  
      }

    const handleEventClick = (clickInfo) => {
      if(window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {

        clickInfo.event.remove();

        fetch(`api/events/${clickInfo.event.id}`, 
          {
          method: "DELETE"
          }
        )
      }
    }
    return (
        <>
        <div id="calendar"> 
        <FullCalendar 
        initialView="timeGridDay"

        headerToolbar={{
            left: "prev,next,today,addEventButton",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        editable={true}
        selectable={true}
        selectMirror={true}
        select={handleDateSelect}
        events={ {
          url: `api/pets/${id}`,
          color: 'white',
          textColor: 'black'
        
        }}
      
        eventClick={handleEventClick}
    
        />
        </div>

        </>
    )
}

export default HealthLog;