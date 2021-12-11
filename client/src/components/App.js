import { useState, useEffect} from 'react'
import {  Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
// import HealthTips from './HealthTips';
// import PetList from './PetList';

function App() {

   const [user, setUser] = useState(null);

   useEffect(() => {
        fetch('/api/me').then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);


    if (!user) return <Login  onLogin={setUser} />;


  return (
    <div>
        
        <NavBar user={user} setUser={setUser}/>
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage/>}>
            </Route>
          </Routes>

        </main>
   
  
    </div>
  );
}

export default App;
