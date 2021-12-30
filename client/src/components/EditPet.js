import { useState, useEffect } from "react";
import PetCard from "./PetCard";
// import {withRouter} from 'react-router-dom'

function EditPet(
  {user, selectedPet, onPetChange, errors, handleImageChange
    //  id,
    //  name, type, age, sex, weight, healthIssue, petImage, setAge, setHealthIssue, setName, setPetImage, setSex, setType, setWeight
    }) {

      // const [errors, setErrors] = useState([])


    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [healthIssue, setHealthIssue] = useState('');
    // const [petImage, setPetImage] = useState(null)

    const [id, setPetId] = useState(0);
    // const [imageId, setImageId] = useState(0);

    useEffect(() => {
      setPetId(selectedPet.id)
      setName(selectedPet.name)
      setAge(selectedPet.age)
      setWeight(selectedPet.weight)
      setType(selectedPet.type_of_pet)
      setSex(selectedPet.sex)
      setHealthIssue(selectedPet.health_issues)
      // setPetImage(selectedPet.pet_image)

    }, [selectedPet]);

    function handleSubmit(e) {
      e.preventDefault();
      const updatedPet = {
        id: id, 
        name: name,
        age: age, 
        weight: weight, 
        health_issues: healthIssue,
        sex: sex,
        type_of_pet: type, 
        
        // pet_image: petImage
      }

      onPetChange(updatedPet)
      
      // handlePetChange()
    }

    // function handleImageChange(e) {
    //   if(e.target.files[0]) this.setState({newPhoto: e.target.files[0]});
    // }

    // function handleSubmitPhoto() {
    //   fetch(`/api/pets/${id}`)
    // }
 
    //     const [errors, setErrors] = useState([])
    // const {id, name, sex, type, age, weight} = pet;

    // const petImage = pet.pet_image;
    // const healthIssue = pet.health_issues
    return(
        <>
        
        
        <form 
        // encType="multipart/form-data"
         onSubmit={handleSubmit}>
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

         
              
            <button type='submit'>Submit</button>
            {/* <p>{errors.map((error) => (
                <li>{error}</li>
            ))}
                </p> */}
        </form>

        {/* <form onSubmit={handleImageChange}>
        <input
            type="file"
            accept="image/*"
            onChange={(e) => setPetImage(e.target.files[0])}
            ></input>
        </form> */}


        </>
    )
}

export default EditPet;