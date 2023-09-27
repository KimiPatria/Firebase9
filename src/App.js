import { useState } from "react";
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [events, setEvents] = useState([]);
  const eventsCollectionRef = collection(db, "event");

  const getEvents = async () => {
    const data = await getDocs(eventsCollectionRef);
    console.log(data.docs);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getEvents(); // fetch data when the component is rendered

  console.log(events);

  return (

    <div>
      <h1>My Firebase Data</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name}, {event.date}, {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}



    // <div className="App">
    //   {events.map((event) => {
    //   return( 
    //     <div>
    //       {" "}
    //       <h1>Name: {event.name}</h1>
    //       <h1>Date: {event.date}</h1>
    //       <h1>Location: {event.location}</h1>
        
    //    </div>
    //   );
    // })}
    // </div>

export default App;
