import {useEffect, useState} from 'react';
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

function HealthLog({id}) {

    // const [date, setDate]  = useState(new Date());
    // const [showEventForm, setShowEventForm] = useState(false);

//     const [eventData, setEventData] = useState([]);
//     const [text, setText] = useState('');
//     const [startTime, setStartTime] = useState('');
//     const [endTime, setEndTime] = useState('');

//     const [currentEvents, setCurrentEvents]= useState([]);
//     // function handleSubmitEvent(e) {
    
      
//     //   fetch("api/events", {
//     //       method: "POST",
//     //       headers: {
//     //           "Content-Type": "application/json"

//     //       },
//     //       body: JSON.stringify({
//     //          text,
//     //          pet_id: id 
        
            
//     //       }),
//     //   })
//     //   .then((r) => r.json())
//     //   .then((newEvent) => console.log(newEvent))
      
//     //   // eventData.map((ev) => {
//     //   //   setText(ev.text)
//     //   // });
      
     
    
//   // }

//   useEffect(() => {
//     fetch('api/events')
//     .then((r) => r.json())
//     .then((data) => console.log(data))
//   }, [])

//   function renderSidebarEvent(event) {
//     return (
//       <li key={event.id}>
//         <b>{event.start, {year: 'numeric', month: 'short', day: 'numeric'}}</b>
//         <i>{event.title}</i>
//       </li>
//     )
//   }

// const renderSidebar = () =>{
//     return (
//       <div className='demo-app-sidebar'>
//         <div className='demo-app-sidebar-section'>
//           <h2>Instructions</h2>
//           <ul>
//             <li>Select dates and you will be prompted to create a new event</li>
//             <li>Drag, drop, and resize events</li>
//             <li>Click an event to delete it</li>
//           </ul>
//         </div>
//         {/* <div className='demo-app-sidebar-section'>
//           <label>
//             <input
//               type='checkbox'
//               checked={this.state.weekendsVisible}
//               onChange={this.handleWeekendsToggle}
//             ></input>
//             toggle weekends
//           </label>
//         </div> */}
//         <div className='demo-app-sidebar-section'>
//           <h2>All Events ({currentEvents.length})</h2>
//           <ul>
//             {currentEvents.map(renderSidebarEvent)}
//           </ul>
//         </div>
//       </div>
//     )
//   }

 
    // const handleEvents = (events) => {
       
    //   fetch("api/events", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"

    //     },
    //     body: JSON.stringify({
        
    //         text: title,
    //         pet_id: id,
      
          
    //     }),
    // })
    // // .then((r) => r.json())
    // // .then((newEvent) => setCurrentEvents(newEvent.text))
    // //  setCurrentEvents(events)
    // }
  
  

      const renderEventContent = (eventInfo) => {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }
   
   
     const handleDateSelect = (selectInfo) => {
        // setShowEventForm(true);
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
        const newEvent = calendarApi.addEvent({
            // id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr
            // allDay: selectInfo.allDay
          })
          // setText(title);
          // setStartTime(start);
          // setEndTime(end);
          console.log(title)
        }

        fetch("api/events", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
  
          },
          body: JSON.stringify({
          
              text: title,
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

    //   const addEvent = () => {

    //     const events = {
    //        url: '/myfeed.php',
    //        method: 'POST',
    //        extraParams: {
    //           pet_id: id,
             
    //        },
    //        failure: function() {
    //           alert('there was an error while fetching events!');
    //        },
    //        color: 'yellow', // a non-ajax option
    //        textColor: 'black' // a non-ajax option
    //     }
        
     
    //  };
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
          url: `api/events`,
          color: 'yellow',
          textColor: 'black'
        
        }}
        // addEvent={}
        // initialEvents={currentEvents}
        // eventAdd={handleEvents}
        // select={handleDateSelect}
        // // eventContent={eventData}
        // // eventAdd={handleEvents}
        // events={'api/events'}

        // events={}
        
        // events={text}
      
        
        />
    
        <div id="calendar"> </div>
        {/* <Event />  */}
        </>
    )
}

export default HealthLog;