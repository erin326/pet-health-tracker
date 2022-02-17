import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import NewPet from '../pages/NewPet';
import EditPet from './EditPet';
import PetCard from './PetCard';
import HealthLog from './HealthLog';



function App() {

   const [user, setUser] = useState(null);
   const [pets, setPets] = useState([]);
    
   const [selectedPet, setSelectedPet] = useState({});
   const [errors, setErrors] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
        fetch('/api/me').then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <Login  onLogin={setUser} />;

 
   function selectPet(petObj) {
    setSelectedPet(petObj)
    console.log(petObj)
    }

  function handlePetChange(petObj) {

  fetch(`/api/pets/${petObj.id}`, 
  {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json" } ,
      body: JSON.stringify(petObj)
  })
  .then((r) => {
      if(r.ok) {
          r.json()
  .then(_ => {
        const updatedPetList = [...pets].map((pet) => {
            if(pet.id === petObj.id){
                return petObj
            } else {
                return pet;
            }
        }) 
        setPets(updatedPetList);
        navigate('/');

        console.log(updatedPetList);
    })
        }else {
            r.json().then((error) => setErrors(error.errors))
            
        }
    })

    }
 

  return (
    <div>
        
        <NavBar user={user} setUser={setUser}/>
        <main>
          <Routes>
            <Route exact path='/new' element={<NewPet user={user}/>}>
            </Route>
            <Route exact path='/:id' element={<PetCard />}></Route>
            <Route exact path='/edit/:id' element={<EditPet selectPet={selectPet} selectedPet={selectedPet} setSelectedPet={setSelectedPet} onPetChange={handlePetChange}
        
            />}
            ></Route>
            <Route exact path='health-log/:id' element={<HealthLog pets={pets} selectedPet={selectedPet} setSelectedPet={setSelectedPet} />}></Route>
            <Route exact path='/' element={<HomePage  selectPet={selectPet} pets={pets} setPets={setPets} user={user} setUser={setUser}/>}>
            </Route>
         
          </Routes>

          {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}

        </main>
   
  
    </div>
  );
}

export default App;
