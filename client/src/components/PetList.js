import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
// import EditPet from './EditPet';
// import EditPet from './EditPet';
import PetCard from './PetCard';

function PetList({pets, selectPet, setPets }) {

    // const [pets, setPets] = useState([]);
    
    // const [selectedPet, setSelectedPet] = useState({});
    
    // function selectPet(petObj) {
    //     setSelectedPet(petObj)
    // }


    // useEffect(() => {
    //     fetch('/api/pets')
    //     .then((r) => r.json())
    //     .then(setPets)

    // }, []);

    function handleDeletePet(id) {

        const updatedPets = pets.filter((pet) => pet.id  !== id);

        fetch(`/api/pets/${id}`, {
           method: "DELETE"
        });
        setPets(updatedPets);
    }
    
    

    // function handleUpdate(updatedPet) {

    //     const updatedPets = pets.map((pet) => {
    //         return pet.id === updatedPet.id ? updatedPet : pet
    //     })
    //     setPets(updatedPets);
        // setPets((pets) => 
        //     pets.map((pet) => {
            
        //         return pet.id === updatedPet.id ? updatedPet : pet;
        //     })
        //  );
        // fetch(`/api/pets/${id}`, {
        //   method: "PATCH",
        //   body: JSON.stringify({
        //     name,
        //     sex,
        //     type_of_pet: type,
        //     age,
        //     weight,
        //     health_issues: healthIssue,
        //     pet_image: petImage
        //   })
        // })
    // }

    
    // function handlePetChange(petObj) {

    //     fetch(`api/pets/${petObj.id}`, 
    //     {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json" } ,
    //         body: JSON.stringify(petObj)
    //     })
    //     .then((r) => {
    //         if(r.ok) {
    //             r.json()
    //     .then(_ => {
    //         const updatedPetList = [...pets].map((pet) => {
    //             if(pet.id === petObj.id){
    //                 return petObj
    //             } else {
    //                 return pet;
    //             }
    //         }) 
    //         setPets(updatedPetList);
    //         console.log(updatedPetList);
    //     })
    //         }else {
    //             r.json().then((error) => console.log(error))
    //         }
    //     })
    
    //     // console.log(petObj)
    // }


    return (
        <>
        {pets.length > 0 ? (
            pets.map((pet) => (
                <PetCard key={pet.id} 
              
                pet={pet}
                selectPet={selectPet}
                onDeletePet={handleDeletePet}

                // onUpdatePet={handlePetChange}
                />
            ))
        ) : (
            <>
            {/* <h2>No Pets Found</h2> */}
           <p>
               We're here to help you track of any changes in your pet's behavior, to keep them happy and healthy. Just add a new pet to get started!
           </p>
          
            </>
        )}

        </>
    )
}

export default PetList;