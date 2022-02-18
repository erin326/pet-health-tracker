import PetCard from './PetCard';

function PetList({pets, selectPet, setPets }) {


    function handleDeletePet(id) {

        const updatedPets = pets.filter((pet) => pet.id  !== id);

        fetch(`/api/pets/${id}`, {
           method: "DELETE"
        });
        setPets(updatedPets);
    }
    

    return (
        <>
        {pets.length > 0 ? (
            pets.map((pet) => (
                
                <PetCard key={pet.id} 
              
                pet={pet}
                selectPet={selectPet}
                onDeletePet={handleDeletePet}
                />
            ))
        ) : (
            <>
           
           <h3 className="text">
               We're here to help you track any changes in your pet's behavior, to keep them happy and healthy. Just add a new pet to get started!
           </h3>
            </>
        )}

        </>
    )
}

export default PetList;