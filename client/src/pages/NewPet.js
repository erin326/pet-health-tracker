import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function NewPet() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [healthIssue, setHealthIssue] = useState('');
    const [petImage, setPetImage] = useState(null)
    
   
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    


    function handleSubmitPet(e) {
        e.preventDefault();

        const formData = new FormData();
       
        formData.append('name', name)
        formData.append('age', age)
        formData.append('weight', weight)
        formData.append('sex', sex)
        formData.append('type_of_pet', type)
        formData.append('health_issues', healthIssue)
        formData.append('pet_image', petImage)

        if(petImage) {
          fetch('/api/pets', {
            method: "POST",
            body: formData
          })
          .then((r) => {
            if(r.ok) {
               navigate('/');
            }else {
                r.json().then((error)=> {
                    setErrors(error.errors)
                    console.log(error)
                });
            }
          });
        } else {
          fetch('/api/pets', {
            method: "POST",
            headers: {
              "Content-Type" : "application/json",
            },
    
            body:
              JSON.stringify({
              name,
              age,
              weight,
              sex, 
              type_of_pet: type,
              health_issues: healthIssue
            })
          })
          .then((r) => {
              if(r.ok) {
                navigate('/');
              }else {
                  r.json().then((error)=> {
                      setErrors(error.errors)
                      console.log(error)
                  });
              }
          });

        }
 
    }

    return(
        <>
        <h2>Add a Pet</h2>
        <form
          onSubmit={handleSubmitPet}>
            <label>Name: </label>
            <input
            type="text"
            id="pet-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></input>
            <label>Type: </label>
            <input
            type="text"
            id="pet-type"
            value={type}
            onChange={(e) => setType( e.target.value)}
            ></input>
              <label>Sex: </label>
            <input
            type="text"
            id="pet-sex"
            value={sex}
            onChange={(e) => setSex( e.target.value)}
            ></input>
              <label>Age: </label>
            <input
            type="text"
            id="pet-age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            ></input>
              <label>Weight: </label>
            <input
            type="text"
            id="pet-weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            ></input>
              <label>Health Issues: </label>
            <input
            type="text"
            id="pet-health-issue"
            value={healthIssue}
            onChange={(e) => setHealthIssue( e.target.value)}
            ></input>

            <input
            type="file"
            accept="image/*" 
            onChange={(e) => setPetImage(e.target.files[0])}
            ></input>
              
            <button type='submit'>Submit</button>
          
              
        </form>
    
        {errors.map((error) => (
                <li key={error}>{error}</li>
            ))}

        </>
    )
}

export default NewPet;

