import { useState, useEffect} from 'react'
// import {  Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
// import HealthTips from './HealthTips';
// import PetList from './PetList';

function App() {

   const [user, setUser] = useState(null);

   useEffect(() => {
        fetch('/me').then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);


    if (!user) return <Login  onLogin={setUser} />;


  return (
    <div>
        <h1>My Pet's Health</h1>
      {/* <Routes>
        <Route path='/'> */}
          <HomePage/>
        {/* </Route>
        </Routes> */}
  
    </div>
  );
}

export default App;
