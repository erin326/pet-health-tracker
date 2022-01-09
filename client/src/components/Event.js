import {useState} from 'react';

function Event({petId}) {

    const [eventData, setEventData] = useState(['event']);
    const [text, setText] = useState('hi');

    // function showEvents() {
    //     fetch("api/events")
    //     .then((r) => r.json())
    //     .then((eventsArray) => {
    //         setEventData(eventsArray);
    //     });
    // }

    // function handleNewEvent(event) {

    // }

  

    function handleSubmitEvent(e) {
        e.preventDefault();

        
        fetch("api/events", {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body: JSON.stringify({
                text: text, 
                pet_id: petId
            }),
        })
        .then((r) => r.json())
        .then((newEvent) => setEventData(newEvent))
    }

    return (
        <>
        <form
        //  onSubmit={handleSubmitEvent}
         >
            <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            >Input Changes</input>
        </form>
        <button type='submit'>Submit</button>
        </>
    )
}

export default Event;