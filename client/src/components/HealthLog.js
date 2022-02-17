import {useEffect, useState} from 'react';
import FullCalendar, {formatData} from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';

import Event from './Event';


function HealthLog({id}) {


      // const renderEventContent = (eventInfo) => {
      //   return (
      //     <>
      //       <b>{eventInfo.timeText}</b>
      //       <i>{eventInfo.event.title}</i>
      //     </>
      //   )
      // }
   
   
     const handleDateSelect = (selectInfo) => {
        // setShowEventForm(true);
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
          // setText(title);
          // setStartTime(start);
          // setEndTime(end);
          // console.log(title)

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
               
                // start_time: start,
                // end_time: end
          
    
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
        initialView="timeGridWeek"

        headerToolbar={{
            left: "prev,next,today,addEventButton",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        // customButtons={{
        //     addEventButton: {
        //         text: 'add event..'
                 
        // }}}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        // dateClick={() => handleSubmitEvent}
        editable={true}
        selectable={true}
        selectMirror={true}
        select={handleDateSelect}
        events={ {
          url: `api/pets/${id}`,
          color: 'white',
          textColor: 'black'
        
        }}
        // eventMouseEnter={'click to delete'}
        eventClick={handleEventClick}
    
        
        
        />
        </div>
        
    
        
        {/* <Event />  */}

      
        </>
    )
}

export default HealthLog;