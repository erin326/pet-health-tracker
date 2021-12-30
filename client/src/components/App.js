import { useState, useEffect} from 'react'
import {  Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import NewPet from '../pages/NewPet';
import EditPet from './EditPet';
import PetCard from './PetCard';
// import HealthTips from './HealthTips';
// import PetList from './PetList';

function App() {

   const [user, setUser] = useState(null);
   
   const [pets, setPets] = useState([]);
    
   const [selectedPet, setSelectedPet] = useState({});
   const [errors, setErrors] = useState([]);

   const navigate = useNavigate();
  
    
 
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
          r.json().then((error) => console.log(error))
      }
  })


  // console.log(petObj)
}
   
  //  const [name, setName] = useState('');
  //  const [type, setType] = useState('');
  //  const [age, setAge] = useState('');
  //  const [sex, setSex] = useState('');
  //  const [weight, setWeight] = useState('');
  //  const [healthIssue, setHealthIssue] = useState('');
  //  const [petImage, setPetImage] = useState(null)


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
            <Route exact path='/new' element={<NewPet user={user}
            

            //  name={name} setName={setName} 
            //   type={type} setType={setType} 
            //   age={age} setAge={setAge}
            //   sex={sex} setSex={setSex} 
            //   weight={weight} setWeight={setWeight} 
            //   healthIssue={healthIssue} setHealthIssue={setHealthIssue} 
            //   petImage={petImage} setPetImage={setPetImage}

            />}>
            </Route>
            <Route exact path='/:id' element={<PetCard />}></Route>
            <Route exact path='/edit/:id' element={<EditPet selectPet={selectPet} selectedPet={selectedPet} setSelectedPet={setSelectedPet} onPetChange={handlePetChange}
            // name={name} setName={setName} 
            // type={type} setType={setType} 
            // age={age} setAge={setAge}
            // sex={sex} setSex={setSex} 
            // weight={weight} setWeight={setWeight} 
            // healthIssue={healthIssue} setHealthIssue={setHealthIssue} 
            // petImage={petImage} setPetImage={setPetImage}
            />}
            ></Route>
            
            <Route exact path='/' element={<HomePage  selectPet={selectPet} pets={pets} setPets={setPets}/>}>
            </Route>
         
          </Routes>

        </main>
   
  
    </div>
  );
}

export default App;
