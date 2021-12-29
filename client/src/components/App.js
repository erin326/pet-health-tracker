import { useState, useEffect} from 'react'
import {  Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import NewPet from '../pages/NewPet';
import EditPet from './EditPet';
// import HealthTips from './HealthTips';
// import PetList from './PetList';

function App() {

   const [user, setUser] = useState(null);

   
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
            <Route exact path='/edit/:id' element={<EditPet 
            // name={name} setName={setName} 
            // type={type} setType={setType} 
            // age={age} setAge={setAge}
            // sex={sex} setSex={setSex} 
            // weight={weight} setWeight={setWeight} 
            // healthIssue={healthIssue} setHealthIssue={setHealthIssue} 
            // petImage={petImage} setPetImage={setPetImage}
            />}
            ></Route>
            
            <Route exact path='/' element={<HomePage/>}>
            </Route>
         
          </Routes>

        </main>
   
  
    </div>
  );
}

export default App;
