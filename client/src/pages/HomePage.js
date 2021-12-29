import PetList from '../components/PetList';
import HealthTips from '../components/HealthTips';
import {useState, useEffect} from 'react';
import EditPet from '../components/EditPet';

function HomePage() {

    const [pets, setPets] = useState([]);
    
    const [selectedPet, setSelectedPet] = useState({});
    const [errors, setErrors] = useState([]);
     
    function selectPet(petObj) {
        setSelectedPet(petObj)
        console.log(petObj)
    }


    useEffect(() => {
        fetch('/api/pets')
        .then((r) => r.json())
        .then(setPets)

    }, []);

    function handlePetChange(petObj) {

        fetch(`api/pets/${petObj.id}`, 
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
            console.log(updatedPetList);
        })
            }else {
                r.json().then((error) => console.log(error))
            }
        })
    
        // console.log(petObj)
    }

    // function handleImageChange(obj) {
    //     fetch(`api/pets/${obj.id}`,  {
    //     method: "PATCH",
    //     body: JSON.stringify(obj)
    //     }
    //     )
    //     .then((r) => r.json())
    //     const updatedPetList = [...pets].map((pet) => {
    //         if(pet.id === obj.id){
    //             return obj
    //         } else {
    //             return pet;
    //         }
    //     }) 
    //     setPets(updatedPetList);
    //     console.log(updatedPetList);
    // }
        
    // }

    return (
        <>
        <HealthTips/>
        <PetList pets={pets} setPets={setPets} selectPet={selectPet}/>
        <EditPet handlePetChange={handlePetChange} selectedPet={selectedPet} errors={errors}/>
        </>
    )
}

export default HomePage;