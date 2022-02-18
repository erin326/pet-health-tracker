import { useState, useEffect } from "react";


function EditPet(
  {selectedPet, onPetChange, errors}) {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [healthIssue, setHealthIssue] = useState('');
    const [id, setPetId] = useState(0);
   

    useEffect(() => {
      setPetId(selectedPet.id)
      setName(selectedPet.name)
      setAge(selectedPet.age)
      setWeight(selectedPet.weight)
      setType(selectedPet.type_of_pet)
      setSex(selectedPet.sex)
      setHealthIssue(selectedPet.health_issues)
     
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
      }
      onPetChange(updatedPet)
    }

    
    return(
        <>
        <form className="pet-info-form"
            onSubmit={handleSubmit}>
            <label>Name: </label>
            <input className='pet-input'
            type="text"
            id="pet-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></input>
            <br></br>
            <label>Type: </label>
            <input
            type="text"
            id="pet-type"
            value={type}
            onChange={(e) => setType( e.target.value)}
            ></input>
            <br></br>
              <label>Sex: </label>
            <input
            type="text"
            id="pet-sex"
            value={sex}
            onChange={(e) => setSex( e.target.value)}
            ></input>
            <br></br>
              <label>Age: </label>
            <input
            type="text"
            id="pet-age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            ></input>
            <br></br>
              <label>Weight: </label>
            <input
            type="text"
            id="pet-weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            ></input>
            <br></br>
              <label>Health Issues: </label>
            <input
            type="text"
            id="pet-health-issue"
            value={healthIssue}
            onChange={(e) => setHealthIssue( e.target.value)}
            ></input>
            <br></br>

            <button className="button" type='submit'>Submit</button>
            {errors ? errors.map((err) => (
              <p>{err}</p>
            )) : null}
          
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